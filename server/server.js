const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors()); // you need to use this cors() function in order to receive requests from the front end
app.use(express.json()); // you need to use the json() function to so that the data from the front end is received correctly

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'formsdb',
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

app.get('/dailyjobreport', (req, res) => {
  db.query(
    'SELECT * FROM daily_job_report WHERE daily_job_report_id = 13',
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
