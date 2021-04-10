const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const jwt = require('express-jwt');
const jwtAuthz = require('express-jwt-authz');
const jwksRsa = require('jwks-rsa');

// Authorization middleware. When used, the
// Access Token must exist and be verified against
// the Auth0 JSON Web Key Set
const checkJwt = jwt({
  // Dynamically provide a signing key
  // based on the kid in the header and
  // the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-s6qumqdd.us.auth0.com/.well-known/jwks.json`,
  }),

  // Validate the audience and the issuer.
  audience: 'http://localhost:5000/',
  issuer: `https://dev-s6qumqdd.us.auth0.com/`,
  algorithms: ['RS256'],
});

const checkScopes = jwtAuthz(['view:forms']);

app.use(cors()); // you need to use this cors() function in order to receive requests from the front end
app.use(express.json()); // you need to use the json() function to so that the data from the front end is received correctly

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'formsdb',
  port: 3309,
});

app.post('/dailyjobreport', (req, res) => {
  const date = req.body.date;
  const customer = req.body.customer;
  const project = req.body.project;
  const contractNumber = req.body.contractNumber;
  const foreman = req.body.foreman;
  const weatherNotes = req.body.weatherNotes;
  const weatherStart = req.body.weatherStart;
  const weatherEnd = req.body.weatherEnd;
  const projectNotes = req.body.projectNotes;
  const projectStart = req.body.projectStart;
  const projectEnd = req.body.projectEnd;
  const employeeName = req.body.employeeName;
  const hours = req.body.hours;
  const jobNumber = req.body.jobNumber;
  const jobDescription = req.body.jobDescription;

  db.query(
    // the question marks are how you prevent sql injection from the user
    'INSERT INTO daily_job_report (date, customer, project, contract_number, foreman, weather_delay_notes, weather_delay_start, weather_delay_end, project_delay_notes, project_delay_start, project_delay_end, employee_name, hours, job_number, job_description) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [
      date,
      customer,
      project,
      contractNumber,
      foreman,
      weatherNotes,
      weatherStart,
      weatherEnd,
      projectNotes,
      projectStart,
      projectEnd,
      employeeName,
      hours,
      jobNumber,
      jobDescription,
    ],

    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send('Values Inserted');
      }
    }
  );
}); // end of dailyjobreport endpoint

app.post('/jsaform', (req, res) => {
  const date = req.body.date;
  const ticket_num = req.body.ticket_num;
  const company = req.body.company;
  const representative = req.body.representative;
  const location = req.body.location;
  const well_num = req.body.well_num;
  const afe_num = req.body.afe_num;
  const weather = req.body.weather;
  const hazardSteps = req.body.hazardSteps;
  const potentialHazard = req.body.potentialHazard;
  const recommHazard = req.body.recommHazard;
  const emergencyAddress = req.body.emergencyAddress;
  const medicalFacility = req.body.medicalFacility;
  const hazardType1 = req.body.hazardType1;
  const hazardType2 = req.body.hazardType2;
  const hazardType3 = req.body.hazardType3;
  const employeeName = req.body.employeeName;
  const employeeInitals = req.body.employeeInitals;

  db.query(
    'INSERT INTO jsa_form (ticket_num, proj_date, company, location, well_num, afe_num, weather_id, emergency_address, gps_location, hazard_1,hazard_2,hazard_3, major_steps, potential_hazard, remove_hazard, user_id, signatures, representative) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [
      ticket_num,
      date,
      company,
      location,
      well_num,
      afe_num,
      weather,
      emergencyAddress,
      medicalFacility,
      hazardType1,
      hazardType2,
      hazardType3,
      hazardSteps,
      potentialHazard,
      recommHazard,
      employeeName,
      employeeInitals,
      representative,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send('Values Inserted');
      }
    }
  );
});

app.post('/inspectionform', (req, res) => {
  const company = req.body.company;
  const date = req.body.date;
  const location = req.body.location;
  const job_num = req.body.job_num;
  const equipment = req.body.equipment;
  const hour_meter = req.body.hour_meter;
  const mileage = req.body.mileage;
  const column1 = req.body.column1;
  const column2 = req.body.column2;
  const column3 = req.body.column3;
  const defects = req.body.defects;
  const repairsNeeded = req.body.repairsNeeded;
  const operatorInitals = req.body.operatorInitals;
  const mechanicInitals = req.body.mechanicInitals;

  db.query(
    'INSERT INTO inspection (company, proj_date, location, job_num, equip_type, hour_meter, mileage, column1, column2, column3, explain_defects, sign_operator, sign_mech, needsRepair) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [
      company,
      date,
      location,
      job_num,
      equipment,
      hour_meter,
      mileage,
      column1,
      column2,
      column3,
      defects,
      operatorInitals,
      mechanicInitals,
      repairsNeeded,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send('Values Inserted');
      }
    }
  );
});

app.post('/createtask', checkJwt, checkScopes, (req, res) => {
  const date = req.body.date;
  const contractNumber = req.body.contractNumber;
  const title = req.body.title;
  const body = req.body.body;

  db.query(
    'INSERT INTO task_sharing (date, contract_number, title, body) VALUES (?, ?, ?, ?)',
    [date, contractNumber, title, body],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send('Task inserted');
      }
    }
  );
});

app.get('/getforms', checkJwt, checkScopes, (req, res) => {
  //res.send({ message: 'User does not have the needed permissions' });
});

app.get('/createtask', checkJwt, checkScopes, (req, res) => {});

app.get('/tasksharing', checkJwt, checkScopes, (req, res) => {});

//get---------------------------------------------get

//in client side call app.get('url', {params: {id:this.state.value}})
//called over here in req.query.id <-- this and ^ this must be the same name
//pass '?' where the id will be and it will call that when you call
//db.query(sql, [value], (err,result))
app.get('/dailyjobreport', checkJwt, checkScopes, (req, res) => {
  var value = req.query.id;
  var sql = 'SELECT * FROM daily_job_report WHERE contract_number = ?';
  db.query(sql, [value], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/dailyjobreport_id', (req, res) => {
  db.query('SELECT contract_number from daily_job_report', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/jsaform', checkJwt, checkScopes, (req, res) => {
  var value = req.query.id;
  var sql = 'SELECT * FROM jsa_form WHERE ticket_num = ?';
  db.query(sql, [value], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/jsaform_ticket', (req, res) => {
  db.query('SELECT ticket_num FROM jsa_form', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/inspection', checkJwt, checkScopes, (req, res) => {
  var value = req.query.id;
  var sql = 'SELECT * FROM inspection WHERE job_num = ?';
  db.query(sql, [value], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/inspection_id', (req, res) => {
  db.query('SELECT job_num FROM inspection', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/viewpricing', checkJwt, checkScopes, (req, res) => {
  var value = req.query.partGroup;
  var sql = 'SELECT * FROM material_pricing WHERE part_group = ?';
  db.query(sql, [value], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/pricing', checkJwt, checkScopes, (req, res) => {
  var value = req.query.partGroup;
  var sql = 'SELECT * FROM material_pricing WHERE part_group = ?';
  db.query(sql, [value], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/viewtask', (req, res) => {
  let sql = 'SELECT * FROM task_sharing';
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
