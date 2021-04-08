CREATE TABLE daily_job_report (
  daily_job_report_id int NOT NULL AUTO_INCREMENT,
  date varchar(255) DEFAULT NULL,
  customer varchar(255) DEFAULT NULL,
  project varchar(255) DEFAULT NULL,
  contract_number varchar(255) DEFAULT NULL,
  foreman varchar(255) DEFAULT NULL,
  weather_delay_notes varchar(255) DEFAULT NULL,
  weather_delay_start varchar(255) DEFAULT NULL,
  weather_delay_end varchar(255) DEFAULT NULL,
  project_delay_notes varchar(255) DEFAULT NULL,
  project_delay_start varchar(255) DEFAULT NULL,
  project_delay_end varchar(255) DEFAULT NULL,
  employee_name varchar(255) DEFAULT NULL,
  hours varchar(255) DEFAULT NULL,
  job_number varchar(255) DEFAULT NULL,
  job_description varchar(255) DEFAULT NULL,
  PRIMARY KEY (daily_job_report_id)
);

CREATE TABLE jsa_form(
    ticket_num INT NOT NULL,
    proj_date VARCHAR(255),
    company VARCHAR(255),
    representative VARCHAR(255),
    location VARCHAR(255),
    well_num INT,
    afe_num INT,
    weather_id TEXT,
    emergency_address VARCHAR(255),
    gps_location VARCHAR(255),
    hazard_1 TEXT,
    hazard_2 TEXT,
    hazard_3 TEXT,
    major_steps TEXT,
    potential_hazard TEXT,
    remove_hazard TEXT,
    user_id VARCHAR(255),
    signatures  VARCHAR(3),
    PRIMARY KEY (ticket_num)
);

CREATE TABLE inspection(
    company VARCHAR(255),
    proj_date VARCHAR(255),
    location VARCHAR(255),
    job_num INT NOT NULL,
    equip_type VARCHAR(255),
    hour_meter DOUBLE,
    mileage INT,
    column1 TEXT,
    column2 TEXT,
    column3 TEXT,
    explain_defects TEXT,
    sign_operator VARCHAR(5),
    sign_mech VARCHAR(5),
    needsRepair varchar(5),
    PRIMARY KEY (job_num)
);

CREATE TABLE material_pricing (
    part_id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    part_name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price VARCHAR(15) NOT NULL,
    cost VARCHAR(15) NOT NULL,
    part_group VARCHAR(255) NOT NULL
);

material_pricing data inserts:

INSERT INTO `material_pricing` (`part_id`, `part_name`, `type`, `price`, `cost`, `part_group`) VALUES (NULL, '15KV Lightning Arrestor', '15 KV Lightning Arrestor', '61.61', '58.10', 'arrestor'), (NULL, '27 KV Lightning Arrestor', '27 KV Lightning Arrestor', '126.58', '100.00', 'arrestor')

INSERT INTO `material_pricing` (`part_id`, `part_name`, `type`, `price`, `cost`, `part_group`) VALUES (NULL, 'M-EAVS101M006', 'Arrestor 6KV Std Duty Arm Mtd', '38.92', '33.07', 'arrestor'), (NULL, 'M-EAVS101M012', '12 KV Arrestor ', '52.48', '52.48', 'arrestor')

INSERT INTO `material_pricing` (`part_id`, `part_name`, `type`, `price`, `cost`, `part_group`) VALUES (NULL, 'M-EAVS101M015', 'Arrestor 15 KV Std Duty Arm Mt', '65.78', '51.97', 'arrestor'), (NULL, 'M-EAVT3F27', 'Arrestor 27 KV Arm Mtd', '101.52', '88.27', 'arrestor')

INSERT INTO `material_pricing` (`part_id`, `part_name`, `type`, `price`, `cost`, `part_group`) VALUES (NULL, '1/2\"x2\" SB Bolt', '1/2\" X 2\" Silicone Bronze Bolts - 8/20/08 Fastenal', '4.51', '3.83', 'bolts_nuts_screws'), (NULL, '1/2\"X2\" SB Nut', '1/2\" X 2\" Silicone Bronze Nut - 8/20/08 Fastenal', '1.35', '1.14', 'bolts_nuts_screws'), (NULL, '1/2\"X2\" SB Washer', '1/2\" X 2\" Silicone Bronze Washer - 8/20/08 Fastenal', '1.84', '1.56', 'bolts_nuts_screws'), (NULL, '1/2-13ssnut', '1/2-13 SS Nut', '0.59', '0.50', 'bolts_nuts_screws'), (NULL, '1/2-13x11/2ss bolt', '1/2-13 x 1 1/2 SS Bolt', '1.52', '1.29', 'bolts_nuts_screws'), (NULL, '1/2ssflatwasher', '1/2 SS Flat Washer', '0.59', '0.50', 'bolts_nuts_screws'), (NULL, '1/2sslockwasher', '1/2 SS Lock washer', '0.36', '0.30', 'bolts_nuts_screws'), (NULL, '1/4X1-1/2LAG', '1/4\" x 1-1/2\" Lag Screw', '0.11', '0.08', 'bolts_nuts_Screws'), (NULL, '1/4X2LAG', '1/2\" x 2\" Lag Bolts', '0.11', '0.08', 'bolts_nuts_Screws'), (NULL, '1002', 'Houseknob Medium Lag Screw', '4.09', '3.23', 'bolts_nuts_screws')

INSERT INTO `material_pricing` (`part_id`, `part_name`, `description`, `price`, `cost`, `part_group`) VALUES (NULL, '30 Amp', '30 Amp Breaker', '18.00', '18.00', 'breakers'), (NULL, 'A864CHSCFG', 'NEMA 4X FBX Enclosures', '78.66', '62.14', 'breakers'), (NULL, 'BAB2020', '2 Phase 20 Amp 240 Volt Bolt-On Breaker ', '72.11', '56.96', 'breakers'), (NULL, 'BR2020', 'BR 20 Amp Tandem Breaker', '11.36', '11.36', 'breakers'), (NULL, 'BR2100', 'BR 2 Pole 100 Amp Branch Breaker', '30.59', '31.25', 'breakers'), (NULL, 'BR220', 'BR 2 Pole 20 Amp Breaker', '10.55', '8.96', 'breakers'), (NULL, 'C-HBR120', '20 Amp 1 P Breaker', '4.70', '3.98', 'breakers'), (NULL, 'C-HBR220', '20A DP Breaker', '10.58', '8.99', 'breakers'), (NULL, 'C-HBR260', '60 A DP Breaker', '10.58', '8.99', 'breakers'), (NULL, 'CL120', '1 Pole 20 Amp Breaker ', '4.92', '4.26', 'breakers'), (NULL, 'GHB3015', '3 Phase 15 Amp 480Volt Breaker ', '177.22', '140.00', 'breakers'), (NULL, 'HFD3050', '3P 50 Amp Breaker 300 Volt', '447.06', '380.00', 'breakers'), (NULL, 'HOM220', '2 Pole 20 Amp Breaker ', '10.59', '9.00', 'breakers')


INSERT INTO `material_pricing` (`part_id`, `part_name`, `description`, `price`, `cost`, `part_group`) VALUES (NULL, '623652', '3/4\" X 1/2\" RE Bushing ', '0.46', '0.36', 'bushings'), (NULL, '832', 'Topaz 832 3/4 Bushing ', '0.11', '0.08', 'bushings'), (NULL, '834', '1-1/4\" Plastic Bushing ', '0.18', '0.14', 'bushings'), (NULL, '835', '1-1/2\" Bushing', '0.16', '0.12', 'bushings'), (NULL, '836', '2\" Plastic Bushing', '0.25', '0.25', 'bushings'), (NULL, '838', '3\" Plastic Bushing', '0.52', '0.52', 'bushings'), (NULL, 'O-ZGBLG-4124', '4\" ins ground bushing ', '71.28', '56.31', 'bushings'), (NULL, 'O-ZRB100-75', '1 x 3/4 RE Bushing ', '1.45', '1.14', 'bushings'), (NULL, 'OZGRB-321S', '3/4\" X 1/2\" Red Bushing', '1.41', '1.10', 'bushings'), (NULL, 'OZGRB-322S', '1 x 3/4 Red Bush', '2.04', '1.61', 'bushings')


INSERT INTO `material_pricing` (`part_id`, `part_name`, `description`, `price`, `cost`, `part_group`) VALUES (NULL, 'CAD115PLUSF20', 'GRDG Weld Metal ', '8.42', '7.15', 'cadweld'), (NULL, 'CAD150PLUSF20', 'GRDG Weld Metal 150 Shot Cadweld ', '12.88', '10.17', 'cadweld'), (NULL, 'CAD200PLUSF20', 'GRDG Weld Metal 200 Shot Cadweld ', '15.97', '12.61', 'cadweld'), (NULL, 'CAD90PLUSF20', '#90 Shot Cadweld ', '9.14', '7.21', 'cadweld'), (NULL, 'CADGRC162Q', 'Cable to Grd Rod Mold', '94.12', '80.00', 'cadweld'), (NULL, 'CADGRC182Q', 'Mold 4/0 Cable to 3/4 G', '80.65', '68.54', 'cadweld'), (NULL, 'CADGTC162G', 'Cable to Grd Rod Mold ', '108.04', '85.35', 'cadweld'), (NULL, 'CADGTC182Q', '3/4 Rod to 4/0 Cable Mol', '101.18', '86.00', 'cadweld'), (NULL, 'CADPLUSCU', 'Control Unit', '155.39', '132.08', 'cadweld'), (NULL, 'CADTAC2G2G', 'Holder Tee Cable Mold', '91.77', '78.00', 'cadweld')


INSERT INTO `material_pricing` (`part_id`, `part_name`, `description`, `price`, `cost`, `part_group`) VALUES (NULL, '609591', '200 Amp Trailer Disconnect w/4 Spaces & Feed Thru Lugs', '107.50', '84.93', 'disconnects'), (NULL, 'C-HDG222NRB-PM', '60A 3R Fused PM Disc', '61.97', '52.67', 'disconnects'), (NULL, 'C-HDH361FRK', 'Safety Switch 30A 3P3F 600V NEMA 3R ', '287.84', '244.66', 'disconnects'), (NULL, 'C-HDH362FRK', 'Discon 3P 60A 600V 3 Fuse Rt', '365.20', '310.42', 'disconnects'), (NULL, 'C-HDH362FRK-PM', '3P 60A 600V Disc PM', '294.12', '250.00', 'disconnects'), (NULL, 'C-HDH364FRK', 'Disc 3P 200A 3F R/B 600V', '626.87', '532.8375', 'disconnects'), (NULL, 'C-HDH365FRK', '400A NEMA 3R 600V Fused NEMA 3R', '1573.42', '1337.40', 'disconnects'), (NULL, 'C-HDH367FRK', 'Safety Switch 800A 3P3F 600V NEMA 3R', '4823.53', '4100.00', 'disconnects'), (NULL, 'GF222NR', '60A 240V 3R 2P Fused', '95.99', '75.83', 'disconnects'), (NULL, 'SCE192712-EA', 'SCE192712-EA', '1072.48', '911.60', 'disconnects')


INSERT INTO `material_pricing` (`part_id`, `part_name`, `description`, `price`, `cost`, `part_group`) VALUES (NULL, 'BUSKTK-1', '600V Midget Fuse', '3.24', '2.75', 'fuses'), (NULL, 'BUSKTK-10', '600V Midget Fuse', '2.48', '2.10', 'fuses'), (NULL, 'BUSKTK-5', '5 AMP 600V Midget Fuse', '3.87', '3.06', 'fuses'), (NULL, 'EF20TCCIR', '20 Amp HV Fuse Link', '2.11', '1.67', 'fuses'), (NULL, 'EF30TCCIR', '30 Amp HV Fuse Link', '2.12', '1.67', 'fuses'), (NULL, 'EF3TNCCIR', '3 Amp HV Fuse Link', '2.12', '1.67', 'fuses'), (NULL, 'IDSR030', 'L-F IDSR030 30A fuse 600V ', '7.32', '5.78', 'fuses'), (NULL, 'IDSR100', 'IDSR 100 600 Volt Fuse ', '32.13', '25.38', 'fuses'), (NULL, 'IDSR100', 'IDSR 100 600 Volt Fuse', '32.13', '25.38', 'fuses'), (NULL, 'IDSR300', '300A 600V Time Delay Fuse', '133.66', '105.59', 'fuses')
