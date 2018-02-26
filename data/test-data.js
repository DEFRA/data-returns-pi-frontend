'use strict';

/**
 * Standalone test data used for front end development
 */
module.exports = {

    users: [
        { 'id': 1, 'title': 'Mr', 'surname': 'Adams', 'forename': 'Douglas', 'password': 'a', 'position': 'EA site offices', 'username': 'ea1', 'telephone': '4567465', roles: ['SITE_OFFICER'] },
        { 'id': 5245, 'title': 'Mrs', 'surname': 'Reeve', 'forename': 'Carla', 'password': 'a', 'position': 'Wastewater Regulatory Technician', 'username': '1@email.com', 'telephone': '4567465', roles: ['OPERATOR'] },
        { 'id': 4231, 'title': 'Mr', 'surname': 'Butterworth', 'forename': 'Tony', 'password': 'a', 'position': 'University Radiation Protection Adviser', 'username': '2@email.com', 'telephone': '47467456', roles: ['OPERATOR'] },
        { 'id': 5058, 'title': 'Dr', 'surname': 'Hall', 'forename': 'David', 'password': 'a', 'position': 'Consultant Clinical Scientist', 'username': '3@email.com', 'telephone': '4567456', roles: ['OPERATOR'] },
        { 'id': 4006, 'title': 'Mrs', 'surname': 'Halliday', 'forename': 'Alison', 'password': 'a', 'position': 'RPS', 'username': '4@email.com', 'telephone': '0117 23452 ', roles: ['OPERATOR'] },
        { 'id': 133, 'title': 'Mr', 'surname': 'Dewar', 'forename': 'Roderick', 'password': 'a', 'position': 'HSE Advisor', 'username': '5@email.com', 'telephone': '2345225', roles: ['OPERATOR'] },
        { 'id': 1274, 'title': 'Ms', 'surname': 'Moysey', 'forename': 'Carolyn ', 'password': 'a', 'position': 'Quality and Environmental Process Manager', 'username': '6@email.com', 'telephone': '4657 4567', roles: ['OPERATOR'] },
        { 'id': 1878, 'title': 'Mr', 'surname': 'Jones', 'forename': 'Pete', 'password': 'a', 'position': 'EHS Manager', 'username': '7@email.com', 'telephone': '456747', roles: ['OPERATOR'] },
        { 'id': 2511, 'title': 'Mr', 'surname': 'Earl', 'forename': 'David', 'password': 'a', 'position': 'Environment Manager', 'username': '8@email.com', 'telephone': '4657456', roles: ['OPERATOR'] },
        { 'id': 927, 'title': 'Mr', 'surname': 'Howe', 'forename': 'David', 'password': 'a', 'position': 'Site Manager', 'username': '9@email.com', 'telephone': '45674674', roles: ['OPERATOR'] },
        { 'id': 1386, 'title': 'Mr', 'surname': 'Fenwick', 'forename': 'Clive', 'password': 'a', 'position': 'Site Technician', 'username': '10@email.com', 'telephone': '0117 767 45674', roles: ['OPERATOR'] },
        { 'id': 685, 'title': 'Mr', 'surname': 'Glover', 'forename': 'Martin ', 'password': 'a', 'position': 'Environment and Distribution Safety Manager ', 'username': '11@email.com', 'telephone': '01179 46574', roles: ['OPERATOR'] },
        { 'id': 902, 'title': 'Mrs', 'surname': 'Harvey', 'forename': 'Julie', 'password': 'a', 'position': 'EHS Advisor', 'username': '12@email.com', 'telephone': '0117 456 456764', roles: ['OPERATOR'] },
        { 'id': 99, 'title': 'Mr', 'surname': 'Sweeting', 'forename': 'David', 'password': 'a', 'position': 'Engineering Manager', 'username': '13@email.com', 'telephone': '0117 6574', roles: ['OPERATOR'] },
        { 'id': 1706, 'title': 'Mr', 'surname': 'Hart', 'forename': 'Tom', 'password': 'a', 'position': 'Site Manager', 'username': '14@email.com', 'telephone': '0117 465767 467', roles: ['OPERATOR'] },
        { 'id': 1823, 'title': 'Mr', 'surname': "O'Leary", 'forename': 'Patrick', 'password': 'a', 'position': 'Risk Control Manager', 'username': '15@email.com', 'telephone': '45677', roles: ['OPERATOR'] },
        { 'id': 2730, 'title': 'Mr', 'surname': 'Hinton', 'forename': 'David', 'password': 'a', 'position': 'SHEQ Manager', 'username': '16@email.com', 'telephone': '07887 4567476', roles: ['OPERATOR'] },
        { 'id': 4222, 'title': 'Miss', 'surname': 'Li', 'forename': 'Jessica', 'password': 'a', 'position': 'Graduate Civil Engineer', 'username': '17@email.com', 'telephone': '4567456567', roles: ['OPERATOR'] },
        { 'id': 2159, 'title': 'Mr', 'surname': 'Gilbert', 'forename': 'Anthony', 'password': 'a', 'position': 'Chemist', 'username': '18@email.com', 'telephone': '0117 766 45674', roles: ['OPERATOR'] },
        { 'id': 2239, 'title': 'Miss', 'surname': 'Graham', 'forename': 'Kate', 'password': 'a', 'position': 'HSE Coordinator', 'username': '19@email.com', 'telephone': '0117 674654', roles: ['OPERATOR'] },
        { 'id': 1068, 'title': 'Mr', 'surname': 'Drew', 'forename': 'Kevin', 'password': 'a', 'position': 'RPA team leader & safety manager', 'username': '20@email.com', 'telephone': '45674', roles: ['OPERATOR'] },
        { 'id': 3333, 'title': 'Mr', 'surname': 'Lee', 'forename': 'David', 'password': 'a', 'position': 'Ast Radiation Protection Officer', 'username': '21@email.com', 'telephone': '0117 767 7654', roles: ['OPERATOR'] },
        { 'id': 4262, 'title': 'Mrs', 'surname': 'Jakeman', 'forename': 'Lesley', 'password': 'a', 'position': 'Environment Assistant', 'username': '22@email.com', 'telephone': '45674', roles: ['OPERATOR'] },
        { 'id': 3383, 'title': 'mr', 'surname': 'ross', 'forename': 'duncan', 'password': 'a', 'position': 'director', 'username': '23@email.com', 'telephone': '0117 676 4567', roles: ['OPERATOR'] },
        { 'id': 4688, 'title': 'Mr', 'surname': 'Leonard', 'forename': 'Rob', 'password': 'a', 'position': 'Group Compliance Manager', 'username': '24@email.com', 'telephone': '45677', roles: ['OPERATOR'] },
        { 'id': 3980, 'title': 'Mr', 'surname': 'Hemming', 'forename': 'Julian', 'password': 'a', 'position': 'Consultant', 'username': '25@email.com', 'telephone': '01454 456777', roles: ['OPERATOR'] },
        { 'id': 3079, 'title': 'Mr', 'surname': 'Woods', 'forename': 'Mark', 'password': 'a', 'position': 'Compliance manager', 'username': '26@email.com', 'telephone': '01823 45677', roles: ['OPERATOR'] },
        { 'id': 3715, 'title': 'Mrs', 'surname': 'Jakeman', 'forename': 'Lesley', 'password': 'a', 'position': 'Environment Assistant', 'username': '27@email.com', 'telephone': '4564567', roles: ['OPERATOR'] },
        { 'id': 5227, 'title': 'Miss', 'surname': 'Reynolds', 'forename': 'Hannah', 'password': 'a', 'position': 'Renewables Compliance Manager', 'username': '28@email.com', 'telephone': '456764576', roles: ['OPERATOR'] },
        { 'id': 5213, 'title': 'Mr', 'surname': 'Davies', 'forename': 'Nigel', 'password': 'a', 'position': 'Regional Ops Manager', 'username': '29@email.com', 'telephone': '456747', roles: ['OPERATOR'] },
        { 'id': 2951, 'title': 'Mr', 'surname': 'Price', 'forename': 'Lee', 'password': 'a', 'position': 'Plant Manager', 'username': '30@email.com', 'telephone': '0117 46577', roles: ['OPERATOR'] },
        { 'id': 5237, 'title': 'Ms', 'surname': 'Pitcher', 'forename': 'Elizabeth', 'password': 'a', 'position': 'Radiation Protection Adviser', 'username': '31@email.com', 'telephone': '4564567', roles: ['OPERATOR'] },
        { 'id': 2342, 'title': 'Mrs', 'surname': 'Smith', 'forename': 'Helen ', 'password': 'a', 'position': 'Waste Supervisor', 'username': '32@email.com', 'telephone': '01225 4567', roles: ['OPERATOR'] },
        { 'id': 2745, 'title': 'Mr', 'surname': 'Stoodley', 'forename': 'Adrian', 'password': 'a', 'position': 'Waste Water Audit Manager', 'username': '33@email.com', 'telephone': '46577', roles: ['OPERATOR'] },
        { 'id': 3711, 'title': 'Mr', 'surname': 'Williams', 'forename': 'David', 'password': 'a', 'position': 'Environmental Manager', 'username': '34@email.com', 'telephone': '07917 45677', roles: ['OPERATOR'] },
        { 'id': 3318, 'title': 'Mr.', 'surname': 'Kistrup', 'forename': 'Carl', 'password': 'a', 'position': 'Senior Environmental Consultant', 'username': '35@email.com', 'telephone': '4567777', roles: ['OPERATOR'] },
        { 'id': 1493, 'title': 'Mr', 'surname': 'Minshall', 'forename': 'Michael', 'password': 'a', 'position': 'Site Manager', 'username': '36@email.com', 'telephone': '0117 767 4567', roles: ['OPERATOR'] },
        { 'id': 95, 'title': 'MR', 'surname': 'Gallagher', 'forename': 'Ray', 'password': 'a', 'position': 'Reg Off', 'username': '37@email.com', 'telephone': '45677', roles: ['OPERATOR'] },
        { 'id': 3129, 'title': 'Mr', 'surname': 'Young', 'forename': 'Tim', 'password': 'a', 'position': 'Site Manager', 'username': '38@email.com', 'telephone': '45677', roles: ['OPERATOR'] },
        { 'id': 2684, 'title': 'Miss', 'surname': 'Hislop', 'forename': 'Marianna', 'password': 'a', 'position': 'Environmental Manager', 'username': '39@email.com', 'telephone': '07917 45677', roles: ['OPERATOR'] },
        { 'id': 4356, 'title': 'Mrs', 'surname': 'Kellett', 'forename': 'Helen', 'password': 'a', 'position': 'Site Manager', 'username': '40@email.com', 'telephone': '07795 774566', roles: ['OPERATOR'] },
        { 'id': 2760, 'title': 'Mr', 'surname': 'Johns', 'forename': 'Paul', 'password': 'a', 'position': 'Consultant', 'username': '41@email.com', 'telephone': '07802 456776' }
    ],

    eaIds: [
        { 'id': 1, 'name': '100311', site: { 'id': 100000000011399, 'name': 'BRISTOL (AVONMOUTH) STW', 'postcode': 'BS11 9AA' }, 'operatorId': 100000000010071 },
        { 'id': 2, 'name': 'AA4910', site: { 'id': 1961025129620, 'name': 'KINGS WESTON LANE BRISTOL AVON', 'postcode': 'BS11 8HT' }, 'operatorId': 1799173812330 },
        { 'id': 3, 'name': 'AB7361', site: { 'id': 899020396442, 'name': 'THE DOCKS PORTISHEAD BRISTOL', 'postcode': 'BS11 0YT' }, 'operatorId': 531217667600 },
        { 'id': 4, 'name': 'AB7469', site: { 'id': 6229044354330, 'name': 'BRISTOL ROYAL INFIRMARY (INCLUDING ST MICHAELS HOSPITAL) UPPER MAUDLIN STREET BRISTOL', 'postcode': 'BS2 8HW' }, 'operatorId': 510018340930 },
        { 'id': 5, 'name': 'AC2608', site: { 'id': 7693044340010, 'name': 'BRISTOL GENERAL HOSPITAL GUINEA STREET BRISTOL AVON', 'postcode': 'BS1 6SY' }, 'operatorId': 510018340930 },
        { 'id': 6, 'name': 'AC2632', site: { 'id': 8242032941380, 'name': 'WOODLAND ROAD BRISTOL', 'postcode': 'BS8 1UG' }, 'operatorId': 510018340930 },
        { 'id': 7, 'name': 'AC2896', site: { 'id': 4518050615240, 'name': 'FRENCHAY HOSPITAL FRENCHAY BRISTOL AVON', 'postcode': 'BS16 1LE' }, 'operatorId': 24229236287 },
        { 'id': 8, 'name': 'AC2926', site: { 'id': 4232045716250, 'name': 'KINGS WESTON LANE BRISTOL AVON', 'postcode': 'BS11 0YS' }, 'operatorId': 24229236287 },
        { 'id': 9, 'name': 'AC2934', site: { 'id': 163923998049, 'name': 'ENTERPRISE HOUSE 6-7 BONVILLE ROAD BRISLINGTON BRISTOL', 'postcode': 'BS4 5PE' }, 'operatorId': 24229236287 },
        { 'id': 10, 'name': 'AC7286', site: { 'id': 889956058323, 'name': 'PO BOX 103 ASHTON HOUSE ASHTON VALE ROAD BRISTOL', 'postcode': 'BS99 7TJ' }, 'operatorId': 510018340930 },
        { 'id': 11, 'name': 'AD7133', site: { 'id': 1560050135200, 'name': 'PO BOX 46 ST ANDREWS ROAD AVONMOUTH BRISTOL', 'postcode': 'BS11 9YF' }, 'operatorId': 2994174040870 },
        { 'id': 12, 'name': 'AD7176', site: { 'id': 100000000026725, 'name': 'Csg Bristol Treatment Plant Pennywell Road Bristol Avon', 'postcode': 'BS5 0TQ' }, 'operatorId': 5485221565210 },
        { 'id': 13, 'name': 'AE1718', site: { 'id': 32532007705, 'name': 'KINGSWESTON LANE AVONMOUTH BRISTOL', 'postcode': 'BS11 8HT' }, 'operatorId': 22929145678 },
        { 'id': 14, 'name': 'AE1840', site: { 'id': 13890117944618, 'name': 'DOVE LANE REDFIELD BRISTOL', 'postcode': 'BS5 9NQ' }, 'operatorId': 8736174325990 },
        { 'id': 15, 'name': 'AE6124', site: { 'id': 1308043422330, 'name': 'Avonmouth Lng Facility Severn Road Bristol Avon', 'postcode': 'BS10 7SQ' }, 'operatorId': 5485221565210 },
        { 'id': 16, 'name': 'AE6531', site: { 'id': 421283366862, 'name': 'ROLLS-ROYCE PLC FILTON SITE PO BOX 3 FILTON BRISTOL', 'postcode': 'BS34 7QE  ' }, 'operatorId': 4642173844090 },
        { 'id': 17, 'name': 'AG3673', site: { 'id': 492499091655, 'name': 'ZENECA PHARMACEUTICALS, AVLON WORKS SEVERNSIDE SITE HALLEN BRISTOL', 'postcode': 'BS10 7ZE' }, 'operatorId': 1799173812330 },
        { 'id': 18, 'name': 'AG7008', site: { 'id': 3418746892216, 'name': 'SMOKE LANE ST ANDREWS ROAD BRISTOL', 'postcode': 'BS11 9HZ' }, 'operatorId': 1417174244540 },
        { 'id': 19, 'name': 'AG8314', site: { 'id': 100000000012959, 'name': 'KINGS WESTON LANE BRISTOL BRISTOL', 'postcode': 'BS11 0YS' }, 'operatorId': 47 },
        { 'id': 20, 'name': 'AG8535', site: { 'id': 100000000026647, 'name': 'Hosegood Flour Mill Old Dock Bristol Avon', 'postcode': 'BS11 9DL' }, 'operatorId': 9786174154450 }
    ],

    userEaIds: [
        { 'eaIdId': [1, 7, 11, 17, 20], 'userId': 5245 },
        { 'eaIdId': [], 'userId': 4231 },
        { 'eaIdId': [3], 'userId': 4231 },
        { 'eaIdId': [4], 'userId': 5058 },
        { 'eaIdId': [5], 'userId': 4006 },
        { 'eaIdId': [6], 'userId': 133 },
        { 'eaIdId': [7], 'userId': 1274 },
        { 'eaIdId': [8], 'userId': 1878 },
        { 'eaIdId': [9], 'userId': 2511 },
        { 'eaIdId': [10], 'userId': 927 },
        { 'eaIdId': [11], 'userId': 1386 },
        { 'eaIdId': [12], 'userId': 685 },
        { 'eaIdId': [13], 'userId': 902 },
        { 'eaIdId': [14], 'userId': 927 },
        { 'eaIdId': [15], 'userId': 99 },
        { 'eaIdId': [16], 'userId': 1706 },
        { 'eaIdId': [17], 'userId': 1274 },
        { 'eaIdId': [18], 'userId': 1823 },
        { 'eaIdId': [19], 'userId': 2730 },
        { 'eaIdId': [20], 'userId': 4222 }
    ],

    operators: [
        { 'id': 100000000010071, 'name': 'Wessex Water' },
        { 'id': 1799173812330, 'name': 'PASMINCO EUROPE (SMELTING) LTD' },
        { 'id': 531217667600, 'name': 'ALBEMARLE CHEMICALS UK LTD' },
        { 'id': 510018340930, 'name': 'UNIVERSITY HOSPITALS BRISTOL NHS FOUNDATION TRUST' },
        { 'id': 24229236287, 'name': 'UNIVERSITY OF BRISTOL' },
        { 'id': 2994174040870, 'name': 'IMPERIAL CANCER RESEARCH FUND' },
        { 'id': 5485221565210, 'name': 'NORTH BRISTOL NHS TRUST' },
        { 'id': 22929145678, 'name': 'NATIONAL HEALTH SERVICE BLOOD AND TRANSPLANT' },
        { 'id': 8736174325990, 'name': 'UNIVERSITY OF THE WEST OF ENGLAND' },
        { 'id': 4642173844090, 'name': 'CENTRE FOR EMERGENCY PREPAREDNESS AND RESPONSE (CEPR)' },
        { 'id': 1417174244540, 'name': 'BLAGDEN PACKAGING NV' },
        { 'id': 47, 'name': 'BRISTOL CITY COUNCIL' },
        { 'id': 9786174154450, 'name': 'CHEMICAL RECOVERIES LTD' },
        { 'id': 2845174332570, 'name': 'BRISTOL DENTAL SCHOOL HOSPITAL' },
        { 'id': 7918174649380, 'name': 'EUROPEAN FRICTION INDUSTRIES LTD' },
        { 'id': 7282175000750, 'name': 'BOC GROUP PLC' },
        { 'id': 4334133725715, 'name': 'RHODIA ORGANIQUE FINE LTD' },
        { 'id': 100000000017929, 'name': 'Accolade Wines Limited' },
        { 'id': 100000000013108, 'name': 'Augean Treatment Ltd' },
        { 'id': 3638174605600, 'name': 'CLEANSING SERVICE GROUP LTD' },
        { 'id': 100000000021771, 'name': 'Ethos Medical & Special Waste Ltd' },
        { 'id': 1389011792567, 'name': 'OCTAVIUS HUNT LTD' },
        { 'id': 32532006462, 'name': 'ST MODWEN DEVELOPMENT LTD' },
        { 'id': 3418746870311, 'name': 'MOTHERWELL BRIDGE ENVIROTEC LTD' },
        { 'id': 9246173844410, 'name': 'NATIONAL GRID TRANSCO LTD' },
        { 'id': 247195678357, 'name': 'SRCL LTD' },
        { 'id': 4565194038715, 'name': 'BRISTOL ENERGY LTD' },
        { 'id': 9905174317310, 'name': 'ASTRAZENECA UK LTD' },
        { 'id': 2173222034207, 'name': 'TOCRIS COOKSON LTD' },
        { 'id': 1035224522340, 'name': 'STRACHAN AND HENSHAW LTD' },
        { 'id': 708216880848, 'name': 'COMPACT POWER LTD' },
        { 'id': 100000000011112, 'name': 'ADM Milling Ltd' },
        { 'id': 100000000016417, 'name': 'Constellation Europe' },
        { 'id': 100000000010752, 'name': 'Neptune Plating Ltd' },
        { 'id': 100000000011588, 'name': 'BOC Limited' },
        { 'id': 100000000019809, 'name': 'St Modwens Developments Limited' },
        { 'id': 353724891627, 'name': 'SEABANK POWER LTD' },
        { 'id': 113593001699, 'name': 'BP LPG UK LTD' },
        { 'id': 3181222181279, 'name': 'BNS NUCLEAR SERVICES LIMITED' },
        { 'id': 100000000023350, 'name': 'Suez Recycling And Recovery Uk Ltd' },
        { 'id': 100000000021752, 'name': 'Kassero Edible Oils Ltd' },
        { 'id': 100000000022656, 'name': 'New Earth Solutions (West) Limited' },
        { 'id': 100000000021761, 'name': 'Metoxal UK Ltd' },
        { 'id': 100000000018537, 'name': 'Andersons Waste Treatment Centre Limited' },
        { 'id': 100000000022669, 'name': 'Tradebe Healthcare (Southwest) Limited' },
        { 'id': 445018564307, 'name': 'VIRIDOR WASTE MANAGEMENT LTD' },
        { 'id': 100000000022644, 'name': 'Avonmouth Bio Power Energy Limited' },
        { 'id': 100000000022434, 'name': 'Forfarmers UK Limited' },
        { 'id': 100000000023727, 'name': 'Packcare Limited' },
        { 'id': 100000000015776, 'name': 'ETHOC RECYCLING LTD' },
        { 'id': 100000000016412, 'name': 'Avonmouth Resource Park Limited' },
        { 'id': 100000000021743, 'name': 'St Modwen Properties I S. a. r. l' },
        { 'id': 100000000022772, 'name': 'Alliance Medical Limited' },
        { 'id': 100000000012370, 'name': 'Wessex Water Services Ltd' },
        { 'id': 100000000018596, 'name': 'Srcl Limited' },
        { 'id': 100000000021774, 'name': 'Earthminded UK Ltd' },
        { 'id': 100000000016641, 'name': 'Rhodia UK Limited' },
        { 'id': 100000000010099, 'name': 'Test Operator' },
        { 'id': 100000000021779, 'name': 'Helius Energy Gamma Limited' },
        { 'id': 100000000020166, 'name': 'Albemarle Medway UK Limited' },
        { 'id': 100000000021626, 'name': 'WasteCare Limited' },
        { 'id': 100000000014382, 'name': 'Stonegate Ltd' },
        { 'id': 100000000016434, 'name': 'Sevalco Limited' }
    ],

    units: [
        { 'id': 1, 'name': 'Bq', 'type': 'R', 'factor': 0.001000000000000, 'description': 'becqerels' },
        { 'id': 2, 'name': 'g', 'type': 'W', 'factor': 0.001000000000000, 'description': 'grammes' },
        { 'id': 3, 'name': 'GBq', 'type': 'R', 'factor': 1000000.000000000000000, 'description': 'gigabecqerels' },
        { 'id': 4, 'name': 'KBq', 'type': 'R', 'factor': 1.000000000000000, 'description': 'kilobecqerels' },
        { 'id': 5, 'name': 'kg', 'type': 'W', 'factor': 1.000000000000000, 'description': 'kilogrammes' },
        { 'id': 6, 'name': 'kt', 'type': 'W', 'factor': 1000000.000000000000000, 'description': 'kilotonnes' },
        { 'id': 7, 'name': 'MBq', 'type': 'R', 'factor': 1000.000000000000000, 'description': 'megabecqerels' },
        { 'id': 8, 'name': 'mg', 'type': 'W', 'factor': 0.000001000000000, 'description': 'milligrammes' },
        { 'id': 9, 'name': 'n/a', 'type': 'N', 'factor': 0.000000000000000, 'description': 'not applicable' },
        { 'id': 10, 'name': 'ng', 'type': 'W', 'factor': 0.000000000001000, 'description': 'nanogrammes' },
        { 'id': 11, 'name': 't', 'type': 'W', 'factor': 1000.000000000000000, 'description': 'tonnes' },
        { 'id': 12, 'name': 'TBq', 'type': 'R', 'factor': 1000000000.000000000000000, 'description': 'terrabecqerels' }
    ],

    substances: [
        { 'id': 503, 'name': 'Acetaldehyde (Ethanal)' },
        { 'id': 504, 'name': 'Acrylic acid' },
        { 'id': 505, 'name': 'Acrylonitrile (2-Propenenitrile)' },
        { 'id': 506, 'name': 'Aldrin' },
        { 'id': 507, 'name': 'Ammonia' },
        { 'id': 508, 'name': 'Ammonium nitrate' },
        { 'id': 509, 'name': 'Ammonium sulphate' },
        { 'id': 510, 'name': 'Aniline (Benzeneamine)' },
        { 'id': 511, 'name': 'Antimony' },
        { 'id': 512, 'name': 'Arsenic' },
        { 'id': 513, 'name': 'Asbestos (suspended particles & fibres)' },
        { 'id': 514, 'name': 'Atrazine' },
        { 'id': 515, 'name': 'Azinphos-methyl' },
        { 'id': 516, 'name': 'Barium' },
        { 'id': 517, 'name': 'Barium compounds (not sulphate) - total nos' },
        { 'id': 518, 'name': 'Benzene' },
        { 'id': 519, 'name': 'Beryllium' },
        { 'id': 520, 'name': 'Bromine' },
        { 'id': 521, 'name': 'Butadiene (1,3-Butadiene)' },
        { 'id': 522, 'name': 'N-Butyl acrylate' },
        { 'id': 523, 'name': 'Cadmium' },
        { 'id': 524, 'name': 'Carbon dioxide' },
        { 'id': 525, 'name': 'Carbon disulphide' },
        { 'id': 526, 'name': 'Carbon monoxide' },
        { 'id': 527, 'name': 'Carbon tetrachloride (Tetrachloromethane)' },
        { 'id': 528, 'name': 'Chlorine' },
        { 'id': 529, 'name': 'Chlorine dioxide' },
        { 'id': 530, 'name': 'Chlorobenzene (Monochlorobenzene)' },
        { 'id': 531, 'name': 'Chloroform (Trichloromethane)' },
        { 'id': 532, 'name': 'Chlorophenols - total nos' },
        { 'id': 533, 'name': 'Americium 241' },
        { 'id': 534, 'name': 'Americium 241 (Mixed With Beryllium)' },
        { 'id': 535, 'name': 'Bromine 82' },
        { 'id': 536, 'name': 'Cadmium 109' },
        { 'id': 537, 'name': 'Curium 245' },
        { 'id': 538, 'name': 'Iron 55' },
        { 'id': 539, 'name': 'Krypton 85' },
        { 'id': 540, 'name': 'Nickel 59' },
        { 'id': 541, 'name': 'Plutonium 238' },
        { 'id': 542, 'name': 'Rhodium 106' },
        { 'id': 543, 'name': 'Indium 111' },
        { 'id': 544, 'name': 'Mercury 203' },
        { 'id': 545, 'name': 'Lead 210' },
        { 'id': 546, 'name': 'Phosphorus 32' },
        { 'id': 547, 'name': 'Plutonium 240' },
        { 'id': 548, 'name': 'Praseodymium 144' },
        { 'id': 549, 'name': 'Tin 121m' },
        { 'id': 550, 'name': 'Tin 126' },
        { 'id': 551, 'name': 'Tritium' },
        { 'id': 552, 'name': 'Ytterbium 169' },
        { 'id': 553, 'name': 'Zirconium 95' },
        { 'id': 554, 'name': 'Zinc 65' },
        { 'id': 555, 'name': 'Uranium 233' },
        { 'id': 556, 'name': 'Uranium 234' },
        { 'id': 557, 'name': 'Uranium 235' },
        { 'id': 558, 'name': 'Xenon 133' },
        { 'id': 559, 'name': 'Zirconium 93' },
        { 'id': 560, 'name': 'Yttrium 90' },
        { 'id': 561, 'name': 'Yttrium 91' },
        { 'id': 562, 'name': 'Thulium 170' },
        { 'id': 563, 'name': 'Technetium 99m' },
        { 'id': 564, 'name': 'Sulphur 35' },
        { 'id': 565, 'name': 'Sodium 22' },
        { 'id': 566, 'name': 'Silver 108m' },
        { 'id': 567, 'name': 'Ruthenium 103' },
        { 'id': 568, 'name': 'Promethium 147' },
        { 'id': 569, 'name': 'Radium 226' },
        { 'id': 570, 'name': 'Radium 226 (Mixed With Beryllium)' },
        { 'id': 571, 'name': 'Caesium 134' },
        { 'id': 572, 'name': 'Caesium 135' },
        { 'id': 573, 'name': 'Caesium 137' },
        { 'id': 574, 'name': 'Calcium 41' },
        { 'id': 575, 'name': 'Calcium 45' },
        { 'id': 576, 'name': 'Carbon 14' },
        { 'id': 577, 'name': 'Chlorine 36' },
        { 'id': 578, 'name': 'Cobalt 57' },
        { 'id': 579, 'name': 'Americium 243' },
        { 'id': 580, 'name': 'Californium 252' },
        { 'id': 581, 'name': 'Cerium 144' },
        { 'id': 582, 'name': 'Chromium 51' },
        { 'id': 583, 'name': 'Cobalt 58' },
        { 'id': 584, 'name': 'Cobalt 60' },
        { 'id': 585, 'name': 'Curium 242' },
        { 'id': 586, 'name': 'Curium 243' },
        { 'id': 587, 'name': 'Curium 244' },
        { 'id': 588, 'name': 'Curium 246' },
        { 'id': 589, 'name': 'Europium 145' },
        { 'id': 590, 'name': 'Iodine 125' },
        { 'id': 591, 'name': 'Iodine 129' },
        { 'id': 592, 'name': 'Iodine 131' },
        { 'id': 593, 'name': 'Iridium 192' },
        { 'id': 594, 'name': 'Manganese 54' },
        { 'id': 595, 'name': 'Molybdenum 99' },
        { 'id': 596, 'name': 'Neptunium 237' },
        { 'id': 597, 'name': 'Nickel 63' },
        { 'id': 598, 'name': 'Niobium 93m' },
        { 'id': 599, 'name': 'Niobium 94' },
        { 'id': 600, 'name': 'Niobium 95' },
        { 'id': 601, 'name': 'Palladium 107' },
        { 'id': 602, 'name': 'Plutonium Alpha' },
        { 'id': 603, 'name': 'Plutonium 239' },
        { 'id': 604, 'name': 'Plutonium 241' },
        { 'id': 605, 'name': 'Plutonium 242' },
        { 'id': 606, 'name': 'Polonium 210' },
        { 'id': 607, 'name': 'Proactinium 231' },
        { 'id': 608, 'name': 'Promethium 144' },
        { 'id': 609, 'name': 'Ruthenium 106' },
        { 'id': 610, 'name': 'Samarium 151' },
        { 'id': 611, 'name': 'Selenium 79' },
        { 'id': 612, 'name': 'Silver 110m' },
        { 'id': 613, 'name': 'Sodium 24' },
        { 'id': 614, 'name': 'Strontium 89' },
        { 'id': 615, 'name': 'Strontium 90' },
        { 'id': 616, 'name': 'Thorium - Natural' },
        { 'id': 617, 'name': 'Thorium 229' },
        { 'id': 618, 'name': 'Thorium 230' },
        { 'id': 619, 'name': 'Thorium 232' },
        { 'id': 620, 'name': 'Tritium & Carbon 14' },
        { 'id': 621, 'name': 'Tritium (In Metal Foil)' },
        { 'id': 622, 'name': 'Tritium (In Sealed Glass Tube)' },
        { 'id': 623, 'name': 'Uranium - Depleted' },
        { 'id': 624, 'name': 'Uranium 236' },
        { 'id': 625, 'name': 'Uranium 238' },
        { 'id': 626, 'name': 'Chromium' },
        { 'id': 627, 'name': 'Cobalt' },
        { 'id': 628, 'name': 'Cobalt compounds - total nos' },
        { 'id': 629, 'name': 'Copper' },
        { 'id': 630, 'name': 'Cresol - all isomers - total' },
        { 'id': 631, 'name': 'Dichlorodiphenyltrichloroethane (DDT)' },
        { 'id': 632, 'name': 'Dichlorvos' },
        { 'id': 633, 'name': 'Dieldrin' },
        { 'id': 634, 'name': 'Dimethyl sulphate' },
        { 'id': 635, 'name': 'Dinoseb' },
        { 'id': 636, 'name': 'Endosulfan' },
        { 'id': 637, 'name': 'Endrin' },
        { 'id': 638, 'name': 'Ethyl acrylate' },
        { 'id': 639, 'name': 'Ethyl benzene' },
        { 'id': 640, 'name': 'Ethylamine' },
        { 'id': 641, 'name': 'Ethylene (Ethene)' },
        { 'id': 642, 'name': 'Ethylene dichloride (1,2-Dichloroethane)' },
        { 'id': 643, 'name': 'Ethylene oxide (1,2 Epoxyethane)' },
        { 'id': 644, 'name': 'Fenitrothion' },
        { 'id': 645, 'name': 'Formaldehyde (Methanal)' },
        { 'id': 646, 'name': 'Hexachlorobenzene (HCB)' },
        { 'id': 647, 'name': 'Hexachlorobutadiene' },
        { 'id': 648, 'name': 'Hexachlorocyclohexane (Lindane)' },
        { 'id': 649, 'name': 'Hydrogen bromide' },
        { 'id': 650, 'name': 'Hydrogen cyanide' },
        { 'id': 651, 'name': 'Hydrogen fluoride' },
        { 'id': 652, 'name': 'Hydrogen iodide' },
        { 'id': 653, 'name': 'Hydrogen peroxide' },
        { 'id': 654, 'name': 'Hydrogen sulphide' },
        { 'id': 655, 'name': 'Iodine' },
        { 'id': 656, 'name': 'Iron' },
        { 'id': 657, 'name': 'Lead' },
        { 'id': 658, 'name': 'Malathion' },
        { 'id': 659, 'name': 'Maleic anhydride' },
        { 'id': 660, 'name': 'Manganese' },
        { 'id': 661, 'name': 'Mercury' },
        { 'id': 662, 'name': 'Methane' },
        { 'id': 663, 'name': 'Methanol' },
        { 'id': 664, 'name': 'Methyl acrylate' },
        { 'id': 665, 'name': 'Butanone (Methyl ethyl ketone)' },
        { 'id': 666, 'name': '4-Methylpentan-2-one (Methyl isobutyl ketone) (MIBK)' },
        { 'id': 667, 'name': 'Methacrylic acid' },
        { 'id': 668, 'name': "4,4'-Methylene-bis [2-chloroaniline]" },
        { 'id': 669, 'name': 'Dichloromethane (DCM) (Methylene chloride)' },
        { 'id': 670, 'name': "4,4'-Methylene dianiline (MDA)" },
        { 'id': 671, 'name': 'Mineral Fibres - Not Asbestos /Glass' },
        { 'id': 672, 'name': 'Molybdenum' },
        { 'id': 673, 'name': 'Naphthalene' },
        { 'id': 674, 'name': 'Nickel' },
        { 'id': 675, 'name': 'Nitric acid' },
        { 'id': 1282, 'name': 'Chromium VI And Compounds - As Cr' },
        { 'id': 1283, 'name': 'Chromium III And Compounds - As Cr' },
        { 'id': 1284, 'name': '4-Tert-Octylphenol' },
        { 'id': 1285, 'name': 'Decenes - total nos' },
        { 'id': 1286, 'name': 'Undecene' },
        { 'id': 1287, 'name': 'Octylphenols and octylphenol ethoxylates' }
    ],

    ewcChapter: [
        { 'id': 1, 'code': '01', 'description': 'WASTES RESULTING FROM EXPLORATION, MINING, QUARRYING, PHYSICAL AND CHEMICAL TREATMENT OF MINERALS' },
        { 'id': 2, 'code': '02', 'description': 'WASTES FROM AGRICULTURE, HORTICULTURE, AQUACULTURE, FORESTRY, HUNTING AND FISHING, FOOD PREPARATION AND PROCESSING' },
        { 'id': 3, 'code': '03', 'description': 'WASTES FROM WOOD PROCESSING AND THE PRODUCTION OF PANELS AND FURNITURE, PULP, PAPER AND CARDBOARD' },
        { 'id': 4, 'code': '04', 'description': 'WASTES FROM THE LEATHER, FUR AND TEXTILE INDUSTRIES' },
        { 'id': 5, 'code': '05', 'description': 'WASTES FROM PETROLEUM REFINING, NATURAL GAS PURIFICATION AND PYROLYTIC TREATMENT OF COAL' },
        { 'id': 6, 'code': '06', 'description': 'WASTES FROM INORGANIC CHEMICAL PROCESSES' },
        { 'id': 7, 'code': '07', 'description': 'WASTES FROM ORGANIC CHEMICAL PROCESSES' },
        { 'id': 8, 'code': '08', 'description': 'WASTES FROM THE MANUFACTURE, FORMULATION, SUPPLYAND USE (MFSU) OF COATINGS (PAINTS, VARNISHES AND VITREOUS ENAMELS), ADHESIVES, SEALANTS AND PRINTING INKS' },
        { 'id': 9, 'code': '09', 'description': 'WASTES FROM THE PHOTOGRAPHIC INDUSTRY' },
        { 'id': 10, 'code': '10', 'description': 'WASTES FROM THERMAL PROCESSES' },
        { 'id': 11, 'code': '11', 'description': 'WASTES FROM CHEMICAL SURFACE TREATMENT AND COATING OF METALS AND OTHER MATERIALS; NON-FERROUS HYDRO-METALLURGY' },
        { 'id': 12, 'code': '12', 'description': 'WASTES FROM SHAPING AND PHYSICAL AND MECHANICAL SURFACE TREATMENT OF METALS AND PLASTICS' },
        { 'id': 13, 'code': '13', 'description': 'OIL WASTES AND WASTES OF LIQUID FUELS (except edible oils, and those in chapters 05, 12 and 19)' },
        { 'id': 14, 'code': '14', 'description': 'WASTE ORGANIC SOLVENTS, REFRIGERANTS AND PROPELLANTS (except 07 and 08)' },
        { 'id': 15, 'code': '15', 'description': 'WASTE PACKAGING; ABSORBENTS, WIPING CLOTHS, FILTER MATERIALS AND PROTECTIVE CLOTHING NOT OTHERWISE SPECIFIED' },
        { 'id': 16, 'code': '16', 'description': 'WASTES NOT OTHERWISE SPECIFIED IN THE LIST' },
        { 'id': 17, 'code': '17', 'description': 'CONSTRUCTION AND DEMOLITION WASTES (INCLUDING EXCAVATED SOIL FROM CONTAMINATED SITES)' },
        { 'id': 18, 'code': '18', 'description': 'WASTES FROM HUMAN OR ANIMAL HEALTH CARE AND/OR RELATED RESEARCH (except kitchen and restaurant wastes not arising from immediate health care)' },
        { 'id': 19, 'code': '19', 'description': 'WASTES FROM WASTE MANAGEMENT FACILITIES, OFF-SITE WASTE WATER TREATMENT PLANTS AND THE PREPARATION OF WATER INTENDED FOR HUMAN CONSUMPTION AND WATER FOR INDUSTRIAL USE' },
        { 'id': 20, 'code': '20', 'description': 'MUNICIPAL WASTES (HOUSEHOLD WASTE AND SIMILAR COMMERCIAL, INDUSTRIAL AND INSTITUTIONAL WASTES) INCLUDING SEPARATELY COLLECTED FRACTIONS' }
    ],

    ewcSubChapter: [
        { 'id': 1, 'code': '01', 'chapter': '01', 'description': 'wastes from mineral excavation' },
        { 'id': 2, 'code': '03', 'chapter': '01', 'description': 'wastes from physical and chemical processing of metalliferous minerals' },
        { 'id': 3, 'code': '04', 'chapter': '01', 'description': 'wastes from physical and chemical processing of non-metalliferous minerals' },
        { 'id': 4, 'code': '05', 'chapter': '01', 'description': 'drilling muds and other drilling wastes' },
        { 'id': 5, 'code': '01', 'chapter': '02', 'description': 'wastes from agriculture, horticulture, aquaculture, forestry, hunting and fishing' },
        { 'id': 6, 'code': '02', 'chapter': '02', 'description': 'wastes from the preparation and processing of meat, fish and other foods of animal origin' },
        { 'id': 7, 'code': '03', 'chapter': '02', 'description': 'wastes from fruit, vegetables, cereals, edible oils, cocoa, coffee, tea and tobacco preparation and processing; conserve production; yeast and yeast extract production, molasses preparation and fermentation' },
        { 'id': 8, 'code': '04', 'chapter': '02', 'description': 'wastes from sugar processing' },
        { 'id': 9, 'code': '05', 'chapter': '02', 'description': 'wastes from the dairy products industry' },
        { 'id': 10, 'code': '06', 'chapter': '02', 'description': 'wastes from the baking and confectionery industry' },
        { 'id': 11, 'code': '07', 'chapter': '02', 'description': 'wastes from the production of alcoholic and non-alcoholic beverages (except coffee, tea and cocoa)' },
        { 'id': 12, 'code': '01', 'chapter': '03', 'description': 'wastes from wood processing and the production of panels and furniture' },
        { 'id': 13, 'code': '02', 'chapter': '03', 'description': 'wastes from wood preservation' },
        { 'id': 14, 'code': '03', 'chapter': '03', 'description': 'wastes from pulp, paper and cardboard production and processing' },
        { 'id': 15, 'code': '01', 'chapter': '04', 'description': 'wastes from the leather and fur industry' },
        { 'id': 16, 'code': '02', 'chapter': '04', 'description': 'wastes from the textile industry' },
        { 'id': 17, 'code': '01', 'chapter': '05', 'description': 'wastes from petroleum refining' },
        { 'id': 18, 'code': '06', 'chapter': '05', 'description': 'wastes from the pyrolytic treatment of coal' },
        { 'id': 19, 'code': '07', 'chapter': '05', 'description': 'wastes from natural gas purification and transportation' },
        { 'id': 20, 'code': '01', 'chapter': '06', 'description': 'wastes from the manufacture, formulation, supply and use (MFSU) of acids' },
        { 'id': 21, 'code': '02', 'chapter': '06', 'description': 'wastes from the MFSU of bases' },
        { 'id': 22, 'code': '03', 'chapter': '06', 'description': 'wastes from the MFSU of salts and their solutions and metallic oxides' },
        { 'id': 23, 'code': '04', 'chapter': '06', 'description': 'metal-containing wastes other than those mentioned in 06 03' },
        { 'id': 24, 'code': '05', 'chapter': '06', 'description': 'sludges from on-site effluent treatment' },
        { 'id': 25, 'code': '06', 'chapter': '06', 'description': 'wastes from the MFSU of sulphur chemicals, sulphur chemical processes and desulphurisation processes' },
        { 'id': 26, 'code': '07', 'chapter': '06', 'description': 'wastes from the MFSU of halogens and halogen chemical processes' },
        { 'id': 27, 'code': '08', 'chapter': '06', 'description': 'wastes from the MFSU of silicon and silicon derivatives' },
        { 'id': 28, 'code': '09', 'chapter': '06', 'description': 'wastes from the MSFU of phosphorous chemicals and phosphorous chemical processes' },
        { 'id': 29, 'code': '10', 'chapter': '06', 'description': 'wastes from the MFSU of nitrogen chemicals, nitrogen chemical processes and fertiliser manufacture' },
        { 'id': 30, 'code': '11', 'chapter': '06', 'description': 'wastes from the manufacture of inorganic pigments and opacificiers' },
        { 'id': 31, 'code': '13', 'chapter': '06', 'description': 'wastes from inorganic chemical processes not otherwise specified' },
        { 'id': 32, 'code': '01', 'chapter': '07', 'description': 'wastes from the manufacture, formulation, supply and use (MFSU) of basic organic chemicals' },
        { 'id': 33, 'code': '02', 'chapter': '07', 'description': 'wastes from the MFSU of plastics, synthetic rubber and man-made fibres' },
        { 'id': 34, 'code': '03', 'chapter': '07', 'description': 'wastes from the MFSU of organic dyes and pigments (except 06 11)' },
        { 'id': 35, 'code': '04', 'chapter': '07', 'description': 'wastes from the MFSU of organic plant protection products (except 02 01 08 and 02 01 09), wood preserving agents (except 03 02) and other biocides' },
        { 'id': 36, 'code': '05', 'chapter': '07', 'description': 'wastes from the MFSU of pharmaceuticals' },
        { 'id': 37, 'code': '06', 'chapter': '07', 'description': 'wastes from the MFSU of fats, grease, soaps, detergents, disinfectants and cosmetics' },
        { 'id': 38, 'code': '07', 'chapter': '07', 'description': 'wastes from the MFSU of fine chemicals and chemical products not otherwise specified' },
        { 'id': 39, 'code': '01', 'chapter': '08', 'description': 'wastes from MFSU and removal of paint and varnish' },
        { 'id': 40, 'code': '02', 'chapter': '08', 'description': 'wastes from MFSU of other coatings (including ceramic materials)' },
        { 'id': 41, 'code': '03', 'chapter': '08', 'description': 'wastes from MFSU of printing inks' },
        { 'id': 42, 'code': '04', 'chapter': '08', 'description': 'wastes from MFSU of adhesives and sealants (including waterproofing products)' },
        { 'id': 43, 'code': '05', 'chapter': '08', 'description': 'wastes not otherwise specified in 08' },
        { 'id': 44, 'code': '01', 'chapter': '09', 'description': 'wastes from the photographic industry' },
        { 'id': 45, 'code': '01', 'chapter': '10', 'description': 'wastes from power stations and other combustion plants (except 19)' },
        { 'id': 46, 'code': '02', 'chapter': '10', 'description': 'wastes from the iron and steel industry' },
        { 'id': 47, 'code': '03', 'chapter': '10', 'description': 'wastes from aluminium thermal metallurgy' },
        { 'id': 48, 'code': '04', 'chapter': '10', 'description': 'wastes from lead thermal metallurgy' },
        { 'id': 49, 'code': '05', 'chapter': '10', 'description': 'wastes from zinc thermal metallurgy' },
        { 'id': 50, 'code': '06', 'chapter': '10', 'description': 'wastes from copper thermal metallurgy' },
        { 'id': 51, 'code': '07', 'chapter': '10', 'description': 'wastes from silver, gold and platinum thermal metallurgy' },
        { 'id': 52, 'code': '08', 'chapter': '10', 'description': 'wastes from other non-ferrous thermal metallurgy' },
        { 'id': 53, 'code': '09', 'chapter': '10', 'description': 'wastes from casting of ferrous pieces' },
        { 'id': 54, 'code': '10', 'chapter': '10', 'description': 'wastes from casting of non-ferrous pieces' },
        { 'id': 55, 'code': '11', 'chapter': '10', 'description': 'wastes from manufacture of glass and glass products' },
        { 'id': 56, 'code': '12', 'chapter': '10', 'description': 'wastes from manufacture of ceramic goods, bricks, tiles and construction products' },
        { 'id': 57, 'code': '13', 'chapter': '10', 'description': 'wastes from manufacture of cement, lime and plaster and articles and products made from them' },
        { 'id': 58, 'code': '14', 'chapter': '10', 'description': 'waste from crematoria' },
        { 'id': 59, 'code': '01', 'chapter': '11', 'description': 'wastes from chemical surface treatment and coating of metals and other materials (for example galvanic processes, zinc coating processes, pickling processes, etching, phosphating, alkaline degreasing, anodising)' },
        { 'id': 60, 'code': '02', 'chapter': '11', 'description': 'wastes from non-ferrous hydrometallurgical processes' },
        { 'id': 61, 'code': '03', 'chapter': '11', 'description': 'sludges and solids from tempering processes' },
        { 'id': 62, 'code': '05', 'chapter': '11', 'description': 'wastes from hot galvanising processes' },
        { 'id': 63, 'code': '01', 'chapter': '12', 'description': 'wastes from shaping and physical and mechanical surface treatment of metals and plastics' },
        { 'id': 64, 'code': '03', 'chapter': '12', 'description': 'wastes from water and steam degreasing processes (except 11)' },
        { 'id': 65, 'code': '01', 'chapter': '13', 'description': 'waste hydraulic oils' },
        { 'id': 66, 'code': '02', 'chapter': '13', 'description': 'waste engine, gear and lubricating oils' },
        { 'id': 67, 'code': '03', 'chapter': '13', 'description': 'waste insulating and heat transmission oils' },
        { 'id': 68, 'code': '04', 'chapter': '13', 'description': 'bilge oils' },
        { 'id': 69, 'code': '05', 'chapter': '13', 'description': 'oil/water separator contents' },
        { 'id': 70, 'code': '07', 'chapter': '13', 'description': 'wastes of liquid fuels' },
        { 'id': 71, 'code': '08', 'chapter': '13', 'description': 'oil wastes not otherwise specified' },
        { 'id': 72, 'code': '06', 'chapter': '14', 'description': 'waste organic solvents, refrigerants and foam/aerosol propellants' },
        { 'id': 73, 'code': '01', 'chapter': '15', 'description': 'packaging (including separately collected municipal packaging waste)' },
        { 'id': 74, 'code': '02', 'chapter': '15', 'description': 'absorbents, filter materials, wiping cloths and protective clothing' },
        { 'id': 75, 'code': '01', 'chapter': '16', 'description': 'end-of-life vehicles from different means of transport (including offroad machinery) and wastes from dismantling of end-of-life vehicles and vehicle maintenance (except 13, 14, 16 06 and 16 08)' },
        { 'id': 76, 'code': '02', 'chapter': '16', 'description': 'wastes from electrical and electronic equipment' },
        { 'id': 77, 'code': '03', 'chapter': '16', 'description': 'off-specification batches and unused products' },
        { 'id': 78, 'code': '04', 'chapter': '16', 'description': 'waste explosives' },
        { 'id': 79, 'code': '05', 'chapter': '16', 'description': 'gases in pressure containers and discarded chemicals' },
        { 'id': 80, 'code': '06', 'chapter': '16', 'description': 'batteries and accumulators' },
        { 'id': 81, 'code': '07', 'chapter': '16', 'description': 'wastes from transport tank, storage tank and barrel cleaning (except 05 and 13)' },
        { 'id': 82, 'code': '08', 'chapter': '16', 'description': 'spent catalysts' },
        { 'id': 83, 'code': '09', 'chapter': '16', 'description': 'oxidising substances' },
        { 'id': 84, 'code': '10', 'chapter': '16', 'description': 'aqueous liquid wastes destined for off-site treatment' },
        { 'id': 85, 'code': '11', 'chapter': '16', 'description': 'waste linings and refractories' },
        { 'id': 86, 'code': '01', 'chapter': '17', 'description': 'concrete, bricks, tiles and ceramics' },
        { 'id': 87, 'code': '02', 'chapter': '17', 'description': 'wood, glass and plastic' },
        { 'id': 88, 'code': '03', 'chapter': '17', 'description': 'bituminous mixtures, coal tar and tarred products' },
        { 'id': 89, 'code': '04', 'chapter': '17', 'description': 'metals (including their alloys)' },
        { 'id': 90, 'code': '05', 'chapter': '17', 'description': 'soil (including excavated soil from contaminated sites), stones and dredging spoil' },
        { 'id': 91, 'code': '06', 'chapter': '17', 'description': 'insulation materials and asbestos-containing construction materials' },
        { 'id': 92, 'code': '08', 'chapter': '17', 'description': 'gypsum-based construction material' },
        { 'id': 93, 'code': '09', 'chapter': '17', 'description': 'other construction and demolition wastes' },
        { 'id': 94, 'code': '01', 'chapter': '18', 'description': 'wastes from natal care, diagnosis, treatment or prevention of disease in humans' },
        { 'id': 95, 'code': '02', 'chapter': '18', 'description': 'wastes from research, diagnosis, treatment or prevention of disease involving animals' },
        { 'id': 96, 'code': '01', 'chapter': '19', 'description': 'wastes from incineration or pyrolysis of waste' },
        { 'id': 97, 'code': '02', 'chapter': '19', 'description': 'wastes from physico/chemical treatments of waste (including dechromatation, decyanidation, neutralisation)' },
        { 'id': 98, 'code': '03', 'chapter': '19', 'description': 'stabilised/solidified wastes (4)' },
        { 'id': 99, 'code': '04', 'chapter': '19', 'description': 'vitrified waste and wastes from vitrification' },
        { 'id': 100, 'code': '05', 'chapter': '19', 'description': 'wastes from aerobic treatment of solid wastes' },
        { 'id': 101, 'code': '06', 'chapter': '19', 'description': 'wastes from anaerobic treatment of waste' },
        { 'id': 102, 'code': '07', 'chapter': '19', 'description': 'landfill leachate' },
        { 'id': 103, 'code': '08', 'chapter': '19', 'description': 'wastes from waste water treatment plants not otherwise specified' },
        { 'id': 104, 'code': '09', 'chapter': '19', 'description': 'wastes from the preparation of water intended for human consumption or water for industrial use' },
        { 'id': 105, 'code': '10', 'chapter': '19', 'description': 'wastes from shredding of metal-containing wastes' },
        { 'id': 106, 'code': '11', 'chapter': '19', 'description': 'wastes from oil regeneration' },
        { 'id': 107, 'code': '12', 'chapter': '19', 'description': 'wastes from the mechanical treatment of waste (for example sorting, crushing, compacting, pelletising) not otherwise specified' },
        { 'id': 108, 'code': '13', 'chapter': '19', 'description': 'wastes from soil and groundwater remediation' },
        { 'id': 109, 'code': '01', 'chapter': '20', 'description': 'separately collected fractions (except 15 01)' },
        { 'id': 110, 'code': '02', 'chapter': '20', 'description': 'garden and park wastes (including cemetery waste)' },
        { 'id': 111, 'code': '03', 'chapter': '20', 'description': 'other municipal wastes' }
    ],

    ewcActivity: [
        { 'id': 1342, 'subChapter': '01', 'chapter': '01', 'hazardous': 0, 'code': '01', 'description': 'Wastes from mineral metalliferous excavation' },
        { 'id': 1343, 'subChapter': '01', 'chapter': '01', 'hazardous': 0, 'code': '02', 'description': 'Wastes from mineral non-metalliferous excavation' },
        { 'id': 1344, 'subChapter': '03', 'chapter': '01', 'hazardous': 1, 'code': '04', 'description': 'Acid-generating tailings from processing of sulphide ore' },
        { 'id': 1345, 'subChapter': '03', 'chapter': '01', 'hazardous': 1, 'code': '05', 'description': 'Other tailings containing dangerous substances' },
        { 'id': 1346, 'subChapter': '03', 'chapter': '01', 'hazardous': 0, 'code': '06', 'description': 'Tailings other than those mentioned in 01 03 04 and 01 03 05' },
        { 'id': 1347, 'subChapter': '03', 'chapter': '01', 'hazardous': 1, 'code': '07', 'description': 'Other wastes containing dangerous substances from physical and chemical processing of metalliferous minerals' },
        { 'id': 1348, 'subChapter': '03', 'chapter': '01', 'hazardous': 0, 'code': '08', 'description': 'Dusty and powdery wastes other than those mentioned in 01 03 07' },
        { 'id': 1349, 'subChapter': '03', 'chapter': '01', 'hazardous': 0, 'code': '09', 'description': 'Red mud from alumina production other than the wastes mentioned in 01 03 07' },
        { 'id': 1350, 'subChapter': '03', 'chapter': '01', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1351, 'subChapter': '04', 'chapter': '01', 'hazardous': 1, 'code': '07', 'description': 'Wastes containing dangerous substances from physical and chemical processing of non-metalliferous minerals' },
        { 'id': 1352, 'subChapter': '04', 'chapter': '01', 'hazardous': 0, 'code': '08', 'description': 'Waste gravel and crushed rocks other than those mentioned in 01 04 07' },
        { 'id': 1353, 'subChapter': '04', 'chapter': '01', 'hazardous': 0, 'code': '09', 'description': 'Waste sand and clays' },
        { 'id': 1354, 'subChapter': '04', 'chapter': '01', 'hazardous': 0, 'code': '10', 'description': 'Dusty and powdery wastes other than those mentioned in 01 04 07' },
        { 'id': 1355, 'subChapter': '04', 'chapter': '01', 'hazardous': 0, 'code': '11', 'description': 'Wastes from potash and rock salt processing other than those mentioned in 01 04 07' },
        { 'id': 1356, 'subChapter': '04', 'chapter': '01', 'hazardous': 0, 'code': '12', 'description': 'Tailings and other wastes from washing and cleaning of minerals other than those mentioned in 01 04 07 and 01 04 11' },
        { 'id': 1357, 'subChapter': '04', 'chapter': '01', 'hazardous': 0, 'code': '13', 'description': 'Wastes from stone cutting and sawing other than those mentioned in 01 04 07' },
        { 'id': 1358, 'subChapter': '04', 'chapter': '01', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1359, 'subChapter': '05', 'chapter': '01', 'hazardous': 0, 'code': '04', 'description': 'Freshwater drilling muds and wastes' },
        { 'id': 1360, 'subChapter': '05', 'chapter': '01', 'hazardous': 1, 'code': '05', 'description': 'Oil-containing drilling muds and wastes' },
        { 'id': 1361, 'subChapter': '05', 'chapter': '01', 'hazardous': 1, 'code': '06', 'description': 'Drilling muds and other drilling wastes containing dangerous substances' },
        { 'id': 1362, 'subChapter': '05', 'chapter': '01', 'hazardous': 0, 'code': '07', 'description': 'Barite-containing drilling muds and wastes other than those mentioned in 01 05 05 and 01 05 06' },
        { 'id': 1363, 'subChapter': '05', 'chapter': '01', 'hazardous': 0, 'code': '08', 'description': 'Chloride-containing drilling muds and wastes other than those mentioned in 01 05 05 and 01 05 06' },
        { 'id': 1364, 'subChapter': '05', 'chapter': '01', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1365, 'subChapter': '01', 'chapter': '02', 'hazardous': 0, 'code': '01', 'description': 'Sludges from washing and cleaning' },
        { 'id': 1366, 'subChapter': '01', 'chapter': '02', 'hazardous': 0, 'code': '02', 'description': 'Animal-tissue waste' },
        { 'id': 1367, 'subChapter': '01', 'chapter': '02', 'hazardous': 0, 'code': '03', 'description': 'Plant-tissue waste' },
        { 'id': 1368, 'subChapter': '01', 'chapter': '02', 'hazardous': 0, 'code': '04', 'description': 'Waste plastics (except packaging)' },
        { 'id': 1369, 'subChapter': '01', 'chapter': '02', 'hazardous': 0, 'code': '06', 'description': 'Animal faeces, urine and manure (including spoiled straw), effluent, collected separately and treated off-site' },
        { 'id': 1370, 'subChapter': '01', 'chapter': '02', 'hazardous': 0, 'code': '07', 'description': 'Wastes from forestry' },
        { 'id': 1371, 'subChapter': '01', 'chapter': '02', 'hazardous': 1, 'code': '08', 'description': 'Agrochemical waste containing dangerous substances' },
        { 'id': 1372, 'subChapter': '01', 'chapter': '02', 'hazardous': 0, 'code': '09', 'description': 'Agrochemical waste other than those mentioned in 02 01 08' },
        { 'id': 1373, 'subChapter': '01', 'chapter': '02', 'hazardous': 0, 'code': '10', 'description': 'Waste metal' },
        { 'id': 1374, 'subChapter': '01', 'chapter': '02', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1375, 'subChapter': '02', 'chapter': '02', 'hazardous': 0, 'code': '01', 'description': 'Sludges from washing and cleaning' },
        { 'id': 1376, 'subChapter': '02', 'chapter': '02', 'hazardous': 0, 'code': '02', 'description': 'Animal-tissue waste' },
        { 'id': 1377, 'subChapter': '02', 'chapter': '02', 'hazardous': 0, 'code': '03', 'description': 'Materials unsuitable for consumption or processing' },
        { 'id': 1378, 'subChapter': '02', 'chapter': '02', 'hazardous': 0, 'code': '04', 'description': 'Sludges from on-site effluent treatment' },
        { 'id': 1379, 'subChapter': '02', 'chapter': '02', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1380, 'subChapter': '03', 'chapter': '02', 'hazardous': 0, 'code': '01', 'description': 'Sludges from washing, cleaning, peeling, centrifuging and separation' },
        { 'id': 1381, 'subChapter': '03', 'chapter': '02', 'hazardous': 0, 'code': '02', 'description': 'Wastes from preserving agents' },
        { 'id': 1382, 'subChapter': '03', 'chapter': '02', 'hazardous': 0, 'code': '03', 'description': 'Wastes from solvent extraction' },
        { 'id': 1383, 'subChapter': '03', 'chapter': '02', 'hazardous': 0, 'code': '04', 'description': 'Materials unsuitable for consumption or processing' },
        { 'id': 1384, 'subChapter': '03', 'chapter': '02', 'hazardous': 0, 'code': '05', 'description': 'Sludges from on-site effluent treatment' },
        { 'id': 1385, 'subChapter': '03', 'chapter': '02', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1386, 'subChapter': '04', 'chapter': '02', 'hazardous': 0, 'code': '01', 'description': 'Soil from cleaning and washing beet' },
        { 'id': 1387, 'subChapter': '04', 'chapter': '02', 'hazardous': 0, 'code': '02', 'description': 'Off-specification calcium carbonate' },
        { 'id': 1388, 'subChapter': '04', 'chapter': '02', 'hazardous': 0, 'code': '03', 'description': 'Sludges from on-site effluent treatment' },
        { 'id': 1389, 'subChapter': '04', 'chapter': '02', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1390, 'subChapter': '05', 'chapter': '02', 'hazardous': 0, 'code': '01', 'description': 'Materials unsuitable for consumption or processing' },
        { 'id': 1391, 'subChapter': '05', 'chapter': '02', 'hazardous': 0, 'code': '02', 'description': 'Sludges from on-site effluent treatment' },
        { 'id': 1392, 'subChapter': '05', 'chapter': '02', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1393, 'subChapter': '06', 'chapter': '02', 'hazardous': 0, 'code': '01', 'description': 'Materials unsuitable for consumption or processing' },
        { 'id': 1394, 'subChapter': '06', 'chapter': '02', 'hazardous': 0, 'code': '02', 'description': 'Wastes from preserving agents' },
        { 'id': 1395, 'subChapter': '06', 'chapter': '02', 'hazardous': 0, 'code': '03', 'description': 'Sludges from on-site effluent treatment' },
        { 'id': 1396, 'subChapter': '06', 'chapter': '02', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1397, 'subChapter': '07', 'chapter': '02', 'hazardous': 0, 'code': '01', 'description': 'Wastes from washing, cleaning and mechanical reduction of raw materials' },
        { 'id': 1398, 'subChapter': '07', 'chapter': '02', 'hazardous': 0, 'code': '02', 'description': 'Wastes from spirits distillation' },
        { 'id': 1399, 'subChapter': '07', 'chapter': '02', 'hazardous': 0, 'code': '03', 'description': 'Wastes from chemical treatment' },
        { 'id': 1400, 'subChapter': '07', 'chapter': '02', 'hazardous': 0, 'code': '04', 'description': 'Materials unsuitable for consumption or processing' },
        { 'id': 1401, 'subChapter': '07', 'chapter': '02', 'hazardous': 0, 'code': '05', 'description': 'Sludges from on-site effluent treatment' },
        { 'id': 1402, 'subChapter': '07', 'chapter': '02', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1403, 'subChapter': '01', 'chapter': '03', 'hazardous': 0, 'code': '01', 'description': 'Waste bark and cork' },
        { 'id': 1404, 'subChapter': '01', 'chapter': '03', 'hazardous': 1, 'code': '04', 'description': 'Sawdust, shavings, cuttings, wood, particle board and veneer containing dangerous substances' },
        { 'id': 1405, 'subChapter': '01', 'chapter': '03', 'hazardous': 0, 'code': '05', 'description': 'Sawdust, shavings, cuttings, wood, particle board and veneer other than those mentioned in 03 01 04' },
        { 'id': 1406, 'subChapter': '01', 'chapter': '03', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1407, 'subChapter': '02', 'chapter': '03', 'hazardous': 1, 'code': '01', 'description': 'Non-halogenated organic wood preservatives' },
        { 'id': 1408, 'subChapter': '02', 'chapter': '03', 'hazardous': 1, 'code': '02', 'description': 'Organochlorinated wood preservatives' },
        { 'id': 1409, 'subChapter': '02', 'chapter': '03', 'hazardous': 1, 'code': '03', 'description': 'Organometallic wood preservatives' },
        { 'id': 1410, 'subChapter': '02', 'chapter': '03', 'hazardous': 1, 'code': '04', 'description': 'Inorganic wood preservatives' },
        { 'id': 1411, 'subChapter': '02', 'chapter': '03', 'hazardous': 1, 'code': '05', 'description': 'Other wood preservatives containing dangerous substances' },
        { 'id': 1412, 'subChapter': '02', 'chapter': '03', 'hazardous': 0, 'code': '99', 'description': 'Wood preservatives not otherwise specified' },
        { 'id': 1413, 'subChapter': '03', 'chapter': '03', 'hazardous': 0, 'code': '01', 'description': 'Waste bark and wood' },
        { 'id': 1414, 'subChapter': '03', 'chapter': '03', 'hazardous': 0, 'code': '02', 'description': 'Green liquor sludge (from recovery of cooking liquor)' },
        { 'id': 1415, 'subChapter': '03', 'chapter': '03', 'hazardous': 0, 'code': '05', 'description': 'De-inking sludges from paper recycling' },
        { 'id': 1416, 'subChapter': '03', 'chapter': '03', 'hazardous': 0, 'code': '07', 'description': 'Mechanically separated rejects from pulping of waste paper and cardboard' },
        { 'id': 1417, 'subChapter': '03', 'chapter': '03', 'hazardous': 0, 'code': '08', 'description': 'Wastes from sorting of paper and cardboard destined for recycling' },
        { 'id': 1418, 'subChapter': '03', 'chapter': '03', 'hazardous': 0, 'code': '09', 'description': 'Lime mud waste' },
        { 'id': 1419, 'subChapter': '03', 'chapter': '03', 'hazardous': 0, 'code': '10', 'description': 'Fibre rejects, fibre-, filler- and coating-sludges from mechanical separation' },
        { 'id': 1420, 'subChapter': '03', 'chapter': '03', 'hazardous': 0, 'code': '11', 'description': 'Sludges from on-site effluent treatment other than those mentioned in 03 03 10' },
        { 'id': 1421, 'subChapter': '03', 'chapter': '03', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1422, 'subChapter': '01', 'chapter': '04', 'hazardous': 0, 'code': '01', 'description': 'Fleshings and lime split wastes' },
        { 'id': 1423, 'subChapter': '01', 'chapter': '04', 'hazardous': 0, 'code': '02', 'description': 'Liming waste' },
        { 'id': 1424, 'subChapter': '01', 'chapter': '04', 'hazardous': 1, 'code': '03', 'description': 'Degreasing wastes containing solvents without a liquid phase' },
        { 'id': 1425, 'subChapter': '01', 'chapter': '04', 'hazardous': 0, 'code': '04', 'description': 'Tanning liquor containing chromium' },
        { 'id': 1426, 'subChapter': '01', 'chapter': '04', 'hazardous': 0, 'code': '05', 'description': 'Tanning liquor free of chromium' },
        { 'id': 1427, 'subChapter': '01', 'chapter': '04', 'hazardous': 0, 'code': '06', 'description': 'Sludges, in particular from on-site effluent treatment containing chromium' },
        { 'id': 1428, 'subChapter': '01', 'chapter': '04', 'hazardous': 0, 'code': '07', 'description': 'Sludges, in particular from on-site effluent treatment free of chromium' },
        { 'id': 1429, 'subChapter': '01', 'chapter': '04', 'hazardous': 0, 'code': '08', 'description': 'Waste tanned leather (blue sheetings, shavings, cuttings, buffing dust) containing chromium' },
        { 'id': 1430, 'subChapter': '01', 'chapter': '04', 'hazardous': 0, 'code': '09', 'description': 'Wastes from dressing and finishing' },
        { 'id': 1431, 'subChapter': '01', 'chapter': '04', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified.' },
        { 'id': 1432, 'subChapter': '02', 'chapter': '04', 'hazardous': 0, 'code': '09', 'description': 'Wastes from composite materials (impregnated textile, elastomer, plastomer)' },
        { 'id': 1433, 'subChapter': '02', 'chapter': '04', 'hazardous': 0, 'code': '10', 'description': 'Organic matter from natural products (for example grease, wax)' },
        { 'id': 1434, 'subChapter': '02', 'chapter': '04', 'hazardous': 1, 'code': '14', 'description': 'Wastes from finishing containing organic solvents' },
        { 'id': 1435, 'subChapter': '02', 'chapter': '04', 'hazardous': 0, 'code': '15', 'description': 'Wastes from finishing other than those mentioned in 04 02 14' },
        { 'id': 1436, 'subChapter': '02', 'chapter': '04', 'hazardous': 1, 'code': '16', 'description': 'Dyestuffs and pigments containing dangerous substances' },
        { 'id': 1437, 'subChapter': '02', 'chapter': '04', 'hazardous': 0, 'code': '17', 'description': 'Dyestuffs and pigments other than those mentioned in 04 02 16' },
        { 'id': 1438, 'subChapter': '02', 'chapter': '04', 'hazardous': 1, 'code': '19', 'description': 'Sludges from on-site effluent treatment containing dangerous substances' },
        { 'id': 1439, 'subChapter': '02', 'chapter': '04', 'hazardous': 0, 'code': '20', 'description': 'Sludges from on-site effluent treatment other than those mentioned in 04 02 19' },
        { 'id': 1440, 'subChapter': '02', 'chapter': '04', 'hazardous': 0, 'code': '21', 'description': 'Wastes from unprocessed textile fibres' },
        { 'id': 1441, 'subChapter': '02', 'chapter': '04', 'hazardous': 0, 'code': '22', 'description': 'Wastes from processed textile fibres' },
        { 'id': 1442, 'subChapter': '02', 'chapter': '04', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1443, 'subChapter': '01', 'chapter': '05', 'hazardous': 1, 'code': '02', 'description': 'Desalter sludges' },
        { 'id': 1444, 'subChapter': '01', 'chapter': '05', 'hazardous': 1, 'code': '03', 'description': 'Tank bottom sludges' },
        { 'id': 1445, 'subChapter': '01', 'chapter': '05', 'hazardous': 1, 'code': '04', 'description': 'Acid alkyl sludges' },
        { 'id': 1446, 'subChapter': '01', 'chapter': '05', 'hazardous': 1, 'code': '05', 'description': 'Oil spills' },
        { 'id': 1447, 'subChapter': '01', 'chapter': '05', 'hazardous': 1, 'code': '06', 'description': 'Oily sludges from maintenance operations of the plant or equipment' },
        { 'id': 1448, 'subChapter': '01', 'chapter': '05', 'hazardous': 1, 'code': '07', 'description': 'Acid tars' },
        { 'id': 1449, 'subChapter': '01', 'chapter': '05', 'hazardous': 1, 'code': '08', 'description': 'Other tars' },
        { 'id': 1450, 'subChapter': '01', 'chapter': '05', 'hazardous': 1, 'code': '09', 'description': 'Sludges from on-site effluent treatment containing dangerous substances' },
        { 'id': 1451, 'subChapter': '01', 'chapter': '05', 'hazardous': 0, 'code': '10', 'description': 'Sludges from on-site effluent treatment other than those mentioned in 05 01 09' },
        { 'id': 1452, 'subChapter': '01', 'chapter': '05', 'hazardous': 1, 'code': '11', 'description': 'Wastes from cleaning of fuels with bases' },
        { 'id': 1453, 'subChapter': '01', 'chapter': '05', 'hazardous': 1, 'code': '12', 'description': 'Oil containing acids' },
        { 'id': 1454, 'subChapter': '01', 'chapter': '05', 'hazardous': 0, 'code': '13', 'description': 'Boiler feedwater sludges' },
        { 'id': 1455, 'subChapter': '01', 'chapter': '05', 'hazardous': 0, 'code': '14', 'description': 'Wastes from cooling columns' },
        { 'id': 1456, 'subChapter': '01', 'chapter': '05', 'hazardous': 1, 'code': '15', 'description': 'Spent filter clays' },
        { 'id': 1457, 'subChapter': '01', 'chapter': '05', 'hazardous': 0, 'code': '16', 'description': 'Sulphur-containing wastes from petroleum desulphurisation' },
        { 'id': 1458, 'subChapter': '01', 'chapter': '05', 'hazardous': 0, 'code': '17', 'description': 'Bitumen' },
        { 'id': 1459, 'subChapter': '01', 'chapter': '05', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1460, 'subChapter': '06', 'chapter': '05', 'hazardous': 1, 'code': '01', 'description': 'Acid tars' },
        { 'id': 1461, 'subChapter': '06', 'chapter': '05', 'hazardous': 1, 'code': '03', 'description': 'Other tars' },
        { 'id': 1462, 'subChapter': '06', 'chapter': '05', 'hazardous': 0, 'code': '04', 'description': 'Waste from cooling columns' },
        { 'id': 1463, 'subChapter': '06', 'chapter': '05', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1464, 'subChapter': '07', 'chapter': '05', 'hazardous': 1, 'code': '01', 'description': 'Wastes containing mercury' },
        { 'id': 1465, 'subChapter': '07', 'chapter': '05', 'hazardous': 0, 'code': '02', 'description': 'Wastes containing sulphur' },
        { 'id': 1466, 'subChapter': '07', 'chapter': '05', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1467, 'subChapter': '01', 'chapter': '06', 'hazardous': 1, 'code': '01', 'description': 'Sulphuric acid and sulphurous acid' },
        { 'id': 1468, 'subChapter': '01', 'chapter': '06', 'hazardous': 1, 'code': '02', 'description': 'Hydrochloric acid' },
        { 'id': 1469, 'subChapter': '01', 'chapter': '06', 'hazardous': 1, 'code': '03', 'description': 'Hydrofluoric acid' },
        { 'id': 1470, 'subChapter': '01', 'chapter': '06', 'hazardous': 1, 'code': '04', 'description': 'Phosphoric and phosphorous acid' },
        { 'id': 1471, 'subChapter': '01', 'chapter': '06', 'hazardous': 1, 'code': '05', 'description': 'Nitric acid and nitrous acid' },
        { 'id': 1472, 'subChapter': '01', 'chapter': '06', 'hazardous': 1, 'code': '06', 'description': 'Other acids' },
        { 'id': 1473, 'subChapter': '01', 'chapter': '06', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1474, 'subChapter': '02', 'chapter': '06', 'hazardous': 1, 'code': '01', 'description': 'Calcium hydroxide' },
        { 'id': 1475, 'subChapter': '02', 'chapter': '06', 'hazardous': 1, 'code': '03', 'description': 'Ammonium hydroxide' },
        { 'id': 1476, 'subChapter': '02', 'chapter': '06', 'hazardous': 1, 'code': '04', 'description': 'Sodium and potassium hydroxide' },
        { 'id': 1477, 'subChapter': '02', 'chapter': '06', 'hazardous': 1, 'code': '05', 'description': 'Other bases' },
        { 'id': 1478, 'subChapter': '02', 'chapter': '06', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1479, 'subChapter': '03', 'chapter': '06', 'hazardous': 1, 'code': '11', 'description': 'Solid salts and solutions containing cyanides' },
        { 'id': 1480, 'subChapter': '03', 'chapter': '06', 'hazardous': 1, 'code': '13', 'description': 'Solid salts and solutions containing heavy metals' },
        { 'id': 1481, 'subChapter': '03', 'chapter': '06', 'hazardous': 0, 'code': '14', 'description': 'Solid salts and solutions other than those mentioned in 06 03 11 and 06 03 13' },
        { 'id': 1482, 'subChapter': '03', 'chapter': '06', 'hazardous': 1, 'code': '15', 'description': 'Metallic oxides containing heavy metals' },
        { 'id': 1483, 'subChapter': '03', 'chapter': '06', 'hazardous': 0, 'code': '16', 'description': 'Metallic oxides other than those mentioned in 06 03 15' },
        { 'id': 1484, 'subChapter': '03', 'chapter': '06', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1485, 'subChapter': '04', 'chapter': '06', 'hazardous': 1, 'code': '03', 'description': 'Wastes containing arsenic' },
        { 'id': 1486, 'subChapter': '04', 'chapter': '06', 'hazardous': 1, 'code': '04', 'description': 'Wastes containing mercury' },
        { 'id': 1487, 'subChapter': '04', 'chapter': '06', 'hazardous': 1, 'code': '05', 'description': 'Wastes containing other heavy metals' },
        { 'id': 1488, 'subChapter': '04', 'chapter': '06', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1489, 'subChapter': '05', 'chapter': '06', 'hazardous': 1, 'code': '02', 'description': 'Sludges from on-site effluent treatment containing dangerous substances' },
        { 'id': 1490, 'subChapter': '05', 'chapter': '06', 'hazardous': 0, 'code': '03', 'description': 'Sludges from on-site effluent treatment other than those mentioned in 06 05 02' },
        { 'id': 1491, 'subChapter': '06', 'chapter': '06', 'hazardous': 1, 'code': '02', 'description': 'Wastes containing dangerous sulphides' },
        { 'id': 1492, 'subChapter': '06', 'chapter': '06', 'hazardous': 0, 'code': '03', 'description': 'Wastes containing sulphides other than those mentioned in 06 06 02' },
        { 'id': 1493, 'subChapter': '06', 'chapter': '06', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1494, 'subChapter': '07', 'chapter': '06', 'hazardous': 1, 'code': '01', 'description': 'Wastes containing asbestos from electrolysis' },
        { 'id': 1495, 'subChapter': '07', 'chapter': '06', 'hazardous': 1, 'code': '02', 'description': 'Activated carbon from chlorine production' },
        { 'id': 1496, 'subChapter': '07', 'chapter': '06', 'hazardous': 1, 'code': '03', 'description': 'Barium sulphate sludge containing mercury' },
        { 'id': 1497, 'subChapter': '07', 'chapter': '06', 'hazardous': 1, 'code': '04', 'description': 'Solutions and acids, for example contact acid' },
        { 'id': 1498, 'subChapter': '07', 'chapter': '06', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1499, 'subChapter': '08', 'chapter': '06', 'hazardous': 1, 'code': '02', 'description': 'Wastes containing chlorosilanes' },
        { 'id': 1500, 'subChapter': '08', 'chapter': '06', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1501, 'subChapter': '09', 'chapter': '06', 'hazardous': 0, 'code': '02', 'description': 'Phosphorous slag' },
        { 'id': 1502, 'subChapter': '09', 'chapter': '06', 'hazardous': 1, 'code': '03', 'description': 'Calcium-based reaction wastes containing or contaminated with dangerous substances' },
        { 'id': 1503, 'subChapter': '09', 'chapter': '06', 'hazardous': 0, 'code': '04', 'description': 'Calcium-based reaction wastes other than those mentioned in 06 09 03' },
        { 'id': 1504, 'subChapter': '09', 'chapter': '06', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1505, 'subChapter': '10', 'chapter': '06', 'hazardous': 1, 'code': '02', 'description': 'Wastes containing dangerous substances' },
        { 'id': 1506, 'subChapter': '10', 'chapter': '06', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1507, 'subChapter': '11', 'chapter': '06', 'hazardous': 0, 'code': '01', 'description': 'Calcium-based reaction wastes from titanium dioxide production' },
        { 'id': 1508, 'subChapter': '11', 'chapter': '06', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1509, 'subChapter': '13', 'chapter': '06', 'hazardous': 1, 'code': '01', 'description': 'Inorganic plant protection products, wood-preserving agents and other biocides.' },
        { 'id': 1510, 'subChapter': '13', 'chapter': '06', 'hazardous': 1, 'code': '02', 'description': 'Spent activated carbon (except 06 07 02)' },
        { 'id': 1511, 'subChapter': '13', 'chapter': '06', 'hazardous': 0, 'code': '03', 'description': 'Carbon black' },
        { 'id': 1512, 'subChapter': '13', 'chapter': '06', 'hazardous': 1, 'code': '04', 'description': 'Wastes from asbestos processing' },
        { 'id': 1513, 'subChapter': '13', 'chapter': '06', 'hazardous': 1, 'code': '05', 'description': 'Soot' },
        { 'id': 1514, 'subChapter': '13', 'chapter': '06', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1515, 'subChapter': '01', 'chapter': '07', 'hazardous': 1, 'code': '01', 'description': 'Aqueous washing liquids and mother liquors' },
        { 'id': 1516, 'subChapter': '01', 'chapter': '07', 'hazardous': 1, 'code': '03', 'description': 'Organic halogenated solvents, washing liquids and mother liquors' },
        { 'id': 1517, 'subChapter': '01', 'chapter': '07', 'hazardous': 1, 'code': '04', 'description': 'Other organic solvents, washing liquids and mother liquors' },
        { 'id': 1518, 'subChapter': '01', 'chapter': '07', 'hazardous': 1, 'code': '07', 'description': 'Halogenated still bottoms and reaction residues' },
        { 'id': 1519, 'subChapter': '01', 'chapter': '07', 'hazardous': 1, 'code': '08', 'description': 'Other still bottoms and reaction residues' },
        { 'id': 1520, 'subChapter': '01', 'chapter': '07', 'hazardous': 1, 'code': '09', 'description': 'Halogenated filter cakes and spent absorbents' },
        { 'id': 1521, 'subChapter': '01', 'chapter': '07', 'hazardous': 1, 'code': '10', 'description': 'Other filter cakes and spent absorbents' },
        { 'id': 1522, 'subChapter': '01', 'chapter': '07', 'hazardous': 1, 'code': '11', 'description': 'Sludges from on-site effluent treatment containing dangerous substances' },
        { 'id': 1523, 'subChapter': '01', 'chapter': '07', 'hazardous': 0, 'code': '12', 'description': 'Sludges from on-site effluent treatment other than those mentioned in 07 01 11' },
        { 'id': 1524, 'subChapter': '01', 'chapter': '07', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1525, 'subChapter': '02', 'chapter': '07', 'hazardous': 1, 'code': '01', 'description': 'Aqueous washing liquids and mother liquors' },
        { 'id': 1526, 'subChapter': '02', 'chapter': '07', 'hazardous': 1, 'code': '03', 'description': 'Organic halogenated solvents, washing liquids and mother liquors' },
        { 'id': 1527, 'subChapter': '02', 'chapter': '07', 'hazardous': 1, 'code': '04', 'description': 'Other organic solvents, washing liquids and mother liquors' },
        { 'id': 1528, 'subChapter': '02', 'chapter': '07', 'hazardous': 1, 'code': '07', 'description': 'Halogenated still bottoms and reaction residues' },
        { 'id': 1529, 'subChapter': '02', 'chapter': '07', 'hazardous': 1, 'code': '08', 'description': 'Other still bottoms and reaction residues' },
        { 'id': 1530, 'subChapter': '02', 'chapter': '07', 'hazardous': 1, 'code': '09', 'description': 'Halogenated filter cakes and spent absorbents' },
        { 'id': 1531, 'subChapter': '02', 'chapter': '07', 'hazardous': 1, 'code': '10', 'description': 'Other filter cakes and spent absorbents' },
        { 'id': 1532, 'subChapter': '02', 'chapter': '07', 'hazardous': 1, 'code': '11', 'description': 'Sludges from on-site effluent treatment containing dangerous substances' },
        { 'id': 1533, 'subChapter': '02', 'chapter': '07', 'hazardous': 0, 'code': '12', 'description': 'Sludges from on-site effluent treatment other than those mentioned in 07 02 11' },
        { 'id': 1534, 'subChapter': '02', 'chapter': '07', 'hazardous': 0, 'code': '13', 'description': 'Waste plastic' },
        { 'id': 1535, 'subChapter': '02', 'chapter': '07', 'hazardous': 1, 'code': '14', 'description': 'Wastes from additives containing dangerous substances' },
        { 'id': 1536, 'subChapter': '02', 'chapter': '07', 'hazardous': 0, 'code': '15', 'description': 'Wastes from additives other than those mentioned in 07 02 14' },
        { 'id': 1537, 'subChapter': '02', 'chapter': '07', 'hazardous': 1, 'code': '16', 'description': 'Wastes containing silicones' },
        { 'id': 1538, 'subChapter': '02', 'chapter': '07', 'hazardous': 0, 'code': '17', 'description': null },
        { 'id': 1539, 'subChapter': '02', 'chapter': '07', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1540, 'subChapter': '03', 'chapter': '07', 'hazardous': 1, 'code': '01', 'description': 'Aqueous washing liquids and mother liquors' },
        { 'id': 1541, 'subChapter': '03', 'chapter': '07', 'hazardous': 1, 'code': '03', 'description': 'Organic halogenated solvents, washing liquids and mother liquors' },
        { 'id': 1542, 'subChapter': '03', 'chapter': '07', 'hazardous': 1, 'code': '04', 'description': 'Other organic solvents, washing liquids and mother liquors' },
        { 'id': 1543, 'subChapter': '03', 'chapter': '07', 'hazardous': 1, 'code': '07', 'description': 'Halogenated still bottoms and reaction residues' },
        { 'id': 1544, 'subChapter': '03', 'chapter': '07', 'hazardous': 1, 'code': '08', 'description': 'Other still bottoms and reaction residues' },
        { 'id': 1545, 'subChapter': '03', 'chapter': '07', 'hazardous': 1, 'code': '09', 'description': 'Halogenated filter cakes and spent absorbents' },
        { 'id': 1546, 'subChapter': '03', 'chapter': '07', 'hazardous': 1, 'code': '10', 'description': 'Other filter cakes and spent absorbents' },
        { 'id': 1547, 'subChapter': '03', 'chapter': '07', 'hazardous': 1, 'code': '11', 'description': 'Sludges from on-site effluent treatment containing dangerous substances' },
        { 'id': 1548, 'subChapter': '03', 'chapter': '07', 'hazardous': 0, 'code': '12', 'description': 'Sludges from on-site effluent treatment other than those mentioned in 07 03 11' },
        { 'id': 1549, 'subChapter': '03', 'chapter': '07', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1550, 'subChapter': '04', 'chapter': '07', 'hazardous': 1, 'code': '01', 'description': 'Aqueous washing liquids and mother liquors' },
        { 'id': 1551, 'subChapter': '04', 'chapter': '07', 'hazardous': 1, 'code': '03', 'description': 'Organic halogenated solvents, washing liquids and mother liquors' },
        { 'id': 1552, 'subChapter': '04', 'chapter': '07', 'hazardous': 1, 'code': '04', 'description': 'Other organic solvents, washing liquids and mother liquors' },
        { 'id': 1553, 'subChapter': '04', 'chapter': '07', 'hazardous': 1, 'code': '07', 'description': 'Halogenated still bottoms and reaction residues' },
        { 'id': 1554, 'subChapter': '04', 'chapter': '07', 'hazardous': 1, 'code': '08', 'description': 'Other still bottoms and reaction residues' },
        { 'id': 1555, 'subChapter': '04', 'chapter': '07', 'hazardous': 1, 'code': '09', 'description': 'Halogenated filter cakes and spent absorbents' },
        { 'id': 1556, 'subChapter': '04', 'chapter': '07', 'hazardous': 1, 'code': '10', 'description': 'Other filter cakes and spent absorbents' },
        { 'id': 1557, 'subChapter': '04', 'chapter': '07', 'hazardous': 1, 'code': '11', 'description': 'Sludges from on-site effluent treatment containing dangerous substances' },
        { 'id': 1558, 'subChapter': '04', 'chapter': '07', 'hazardous': 0, 'code': '12', 'description': 'Sludges from on-site effluent treatment other than those mentioned in 07 04 11' },
        { 'id': 1559, 'subChapter': '04', 'chapter': '07', 'hazardous': 1, 'code': '13', 'description': 'Solid wastes containing dangerous substances' },
        { 'id': 1560, 'subChapter': '04', 'chapter': '07', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1561, 'subChapter': '05', 'chapter': '07', 'hazardous': 1, 'code': '01', 'description': 'Aqueous washing liquids and mother liquors' },
        { 'id': 1562, 'subChapter': '05', 'chapter': '07', 'hazardous': 1, 'code': '03', 'description': 'Organic halogenated solvents, washing liquids and mother liquors' },
        { 'id': 1563, 'subChapter': '05', 'chapter': '07', 'hazardous': 1, 'code': '04', 'description': 'Other organic solvents, washing liquids and mother liquors' },
        { 'id': 1564, 'subChapter': '05', 'chapter': '07', 'hazardous': 1, 'code': '07', 'description': 'Halogenated still bottoms and reaction residues' },
        { 'id': 1565, 'subChapter': '05', 'chapter': '07', 'hazardous': 1, 'code': '08', 'description': 'Other still bottoms and reaction residues' },
        { 'id': 1566, 'subChapter': '05', 'chapter': '07', 'hazardous': 1, 'code': '09', 'description': 'Halogenated filter cakes and spent absorbents' },
        { 'id': 1567, 'subChapter': '05', 'chapter': '07', 'hazardous': 1, 'code': '10', 'description': 'Other filter cakes and spent absorbents' },
        { 'id': 1568, 'subChapter': '05', 'chapter': '07', 'hazardous': 1, 'code': '11', 'description': 'Sludges from on-site effluent treatment containing dangerous substances' },
        { 'id': 1569, 'subChapter': '05', 'chapter': '07', 'hazardous': 0, 'code': '12', 'description': 'Sludges from on-site effluent treatment other than those mentioned in 07 05 11' },
        { 'id': 1570, 'subChapter': '05', 'chapter': '07', 'hazardous': 1, 'code': '13', 'description': 'Solid wastes containing dangerous substances' },
        { 'id': 1571, 'subChapter': '05', 'chapter': '07', 'hazardous': 0, 'code': '14', 'description': 'Solid wastes other than those mentioned in 07 05 13' },
        { 'id': 1572, 'subChapter': '05', 'chapter': '07', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1573, 'subChapter': '06', 'chapter': '07', 'hazardous': 1, 'code': '01', 'description': 'Aqueous washing liquids and mother liquors' },
        { 'id': 1574, 'subChapter': '06', 'chapter': '07', 'hazardous': 1, 'code': '03', 'description': 'Organic halogenated solvents, washing liquids and mother liquors' },
        { 'id': 1575, 'subChapter': '06', 'chapter': '07', 'hazardous': 1, 'code': '04', 'description': 'Other organic solvents, washing liquids and mother liquors' },
        { 'id': 1576, 'subChapter': '06', 'chapter': '07', 'hazardous': 1, 'code': '07', 'description': 'Halogenated still bottoms and reaction residues' },
        { 'id': 1577, 'subChapter': '06', 'chapter': '07', 'hazardous': 1, 'code': '08', 'description': 'Other still bottoms and reaction residues' },
        { 'id': 1578, 'subChapter': '06', 'chapter': '07', 'hazardous': 1, 'code': '09', 'description': 'Halogenated filter cakes and spent absorbents' },
        { 'id': 1579, 'subChapter': '06', 'chapter': '07', 'hazardous': 1, 'code': '10', 'description': 'Other filter cakes and spent absorbents' },
        { 'id': 1580, 'subChapter': '06', 'chapter': '07', 'hazardous': 1, 'code': '11', 'description': 'Sludges from on-site effluent treatment containing dangerous substances' },
        { 'id': 1581, 'subChapter': '06', 'chapter': '07', 'hazardous': 0, 'code': '12', 'description': 'Sludges from on-site effluent treatment other than those mentioned in 07 06 11' },
        { 'id': 1582, 'subChapter': '06', 'chapter': '07', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1583, 'subChapter': '07', 'chapter': '07', 'hazardous': 1, 'code': '01', 'description': 'Aqueous washing liquids and mother liquors' },
        { 'id': 1584, 'subChapter': '07', 'chapter': '07', 'hazardous': 1, 'code': '03', 'description': 'Organic halogenated solvents, washing liquids and mother liquors' },
        { 'id': 1585, 'subChapter': '07', 'chapter': '07', 'hazardous': 1, 'code': '04', 'description': 'Other organic solvents, washing liquids and mother liquors' },
        { 'id': 1586, 'subChapter': '07', 'chapter': '07', 'hazardous': 1, 'code': '07', 'description': 'Halogenated still bottoms and reaction residues' },
        { 'id': 1587, 'subChapter': '07', 'chapter': '07', 'hazardous': 1, 'code': '08', 'description': 'Other still bottoms and reaction residues' },
        { 'id': 1588, 'subChapter': '07', 'chapter': '07', 'hazardous': 1, 'code': '09', 'description': 'Halogenated filter cakes and spent absorbents' },
        { 'id': 1589, 'subChapter': '07', 'chapter': '07', 'hazardous': 1, 'code': '10', 'description': 'Other filter cakes and spent absorbents' },
        { 'id': 1590, 'subChapter': '07', 'chapter': '07', 'hazardous': 1, 'code': '11', 'description': 'Sludges from on-site effluent treatment containing dangerous substances' },
        { 'id': 1591, 'subChapter': '07', 'chapter': '07', 'hazardous': 0, 'code': '12', 'description': 'Sludges from on-site effluent treatment other than those mentioned in 07 07 11' },
        { 'id': 1592, 'subChapter': '07', 'chapter': '07', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1593, 'subChapter': '01', 'chapter': '08', 'hazardous': 1, 'code': '11', 'description': 'Waste paint and varnish containing organic solvents or other dangerous substances' },
        { 'id': 1594, 'subChapter': '01', 'chapter': '08', 'hazardous': 0, 'code': '12', 'description': 'Waste paint and varnish other than those mentioned in 08 01 11' },
        { 'id': 1595, 'subChapter': '01', 'chapter': '08', 'hazardous': 1, 'code': '13', 'description': 'Sludges from paint or varnish containing organic solvents or other dangerous substances' },
        { 'id': 1596, 'subChapter': '01', 'chapter': '08', 'hazardous': 0, 'code': '14', 'description': 'Sludges from paint or varnish other than those mentioned in 08 01 13' },
        { 'id': 1597, 'subChapter': '01', 'chapter': '08', 'hazardous': 1, 'code': '15', 'description': 'Aqueous sludges containing paint or varnish containing organic solvents or other dangerous substances' },
        { 'id': 1598, 'subChapter': '01', 'chapter': '08', 'hazardous': 0, 'code': '16', 'description': 'Aqueous sludges containing paint or varnish other than those mentioned in 08 01 15' },
        { 'id': 1599, 'subChapter': '01', 'chapter': '08', 'hazardous': 1, 'code': '17', 'description': 'Wastes from paint or varnish removal containing organic solvents or other dangerous substances' },
        { 'id': 1600, 'subChapter': '01', 'chapter': '08', 'hazardous': 0, 'code': '18', 'description': 'Wastes from paint or varnish removal other than those mentioned in 08 01 17' },
        { 'id': 1601, 'subChapter': '01', 'chapter': '08', 'hazardous': 1, 'code': '19', 'description': 'Aqueous suspensions containing paint or varnish containing organic solvents or other dangerous substances' },
        { 'id': 1602, 'subChapter': '01', 'chapter': '08', 'hazardous': 0, 'code': '20', 'description': 'Aqueous suspensions containing paint or varnish other than those mentioned in 08 01 19' },
        { 'id': 1603, 'subChapter': '01', 'chapter': '08', 'hazardous': 1, 'code': '21', 'description': 'Waste paint or varnish remover' },
        { 'id': 1604, 'subChapter': '01', 'chapter': '08', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1605, 'subChapter': '02', 'chapter': '08', 'hazardous': 0, 'code': '01', 'description': 'Waste coating powders' },
        { 'id': 1606, 'subChapter': '02', 'chapter': '08', 'hazardous': 0, 'code': '02', 'description': 'Aqueous sludges containing ceramic materials' },
        { 'id': 1607, 'subChapter': '02', 'chapter': '08', 'hazardous': 0, 'code': '03', 'description': 'Aqueous suspensions containing ceramic materials' },
        { 'id': 1608, 'subChapter': '02', 'chapter': '08', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1609, 'subChapter': '03', 'chapter': '08', 'hazardous': 0, 'code': '07', 'description': 'Aqueous sludges containing ink' },
        { 'id': 1610, 'subChapter': '03', 'chapter': '08', 'hazardous': 0, 'code': '08', 'description': 'Aqueous liquid waste containing ink' },
        { 'id': 1611, 'subChapter': '03', 'chapter': '08', 'hazardous': 1, 'code': '12', 'description': 'Waste ink containing dangerous substances' },
        { 'id': 1612, 'subChapter': '03', 'chapter': '08', 'hazardous': 0, 'code': '13', 'description': 'Waste ink other than those mentioned in 08 03 12' },
        { 'id': 1613, 'subChapter': '03', 'chapter': '08', 'hazardous': 1, 'code': '14', 'description': 'Ink sludges containing dangerous substances' },
        { 'id': 1614, 'subChapter': '03', 'chapter': '08', 'hazardous': 0, 'code': '15', 'description': 'Ink sludges other than those mentioned in 08 03 14' },
        { 'id': 1615, 'subChapter': '03', 'chapter': '08', 'hazardous': 1, 'code': '16', 'description': 'Waste etching solutions' },
        { 'id': 1616, 'subChapter': '03', 'chapter': '08', 'hazardous': 1, 'code': '17', 'description': 'Waste printing toner containing dangerous substances' },
        { 'id': 1617, 'subChapter': '03', 'chapter': '08', 'hazardous': 0, 'code': '18', 'description': 'Waste printing toner other than those mentioned in 08 03 17' },
        { 'id': 1618, 'subChapter': '03', 'chapter': '08', 'hazardous': 1, 'code': '19', 'description': 'Disperse oil' },
        { 'id': 1619, 'subChapter': '03', 'chapter': '08', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1620, 'subChapter': '04', 'chapter': '08', 'hazardous': 1, 'code': '09', 'description': 'Waste adhesives and sealants containing organic solvents or other dangerous substances' },
        { 'id': 1621, 'subChapter': '04', 'chapter': '08', 'hazardous': 0, 'code': '10', 'description': 'Waste adhesives and sealants other than those mentioned in 08 04 09' },
        { 'id': 1622, 'subChapter': '04', 'chapter': '08', 'hazardous': 1, 'code': '11', 'description': 'Adhesive and sealant sludges containing organic solvents or other dangerous substances' },
        { 'id': 1623, 'subChapter': '04', 'chapter': '08', 'hazardous': 0, 'code': '12', 'description': 'Adhesive and sealant sludges other than those mentioned in 08 04 11' },
        { 'id': 1624, 'subChapter': '04', 'chapter': '08', 'hazardous': 1, 'code': '13', 'description': 'Aqueous sludges containing adhesives or sealants containing organic solvents or other dangerous substances' },
        { 'id': 1625, 'subChapter': '04', 'chapter': '08', 'hazardous': 0, 'code': '14', 'description': 'Aqueous sludges containing adhesives or sealants other than those mentioned in 08 04 13' },
        { 'id': 1626, 'subChapter': '04', 'chapter': '08', 'hazardous': 1, 'code': '15', 'description': 'Aqueous liquid waste containing adhesives or sealants containing organic solvents or other dangerous substances' },
        { 'id': 1627, 'subChapter': '04', 'chapter': '08', 'hazardous': 0, 'code': '16', 'description': 'Aqueous liquid waste containing adhesives or sealants other than those mentioned in 08 04 15' },
        { 'id': 1628, 'subChapter': '04', 'chapter': '08', 'hazardous': 1, 'code': '17', 'description': 'Rosin oil' },
        { 'id': 1629, 'subChapter': '04', 'chapter': '08', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1630, 'subChapter': '05', 'chapter': '08', 'hazardous': 1, 'code': '01', 'description': 'Waste isocyanates' },
        { 'id': 1631, 'subChapter': '01', 'chapter': '09', 'hazardous': 1, 'code': '01', 'description': 'Water-based developer and activator solutions' },
        { 'id': 1632, 'subChapter': '01', 'chapter': '09', 'hazardous': 1, 'code': '02', 'description': 'Water-based offset plate developer solutions' },
        { 'id': 1633, 'subChapter': '01', 'chapter': '09', 'hazardous': 1, 'code': '03', 'description': 'Solvent-based developer solutions' },
        { 'id': 1634, 'subChapter': '01', 'chapter': '09', 'hazardous': 1, 'code': '04', 'description': 'Fixer solutions' },
        { 'id': 1635, 'subChapter': '01', 'chapter': '09', 'hazardous': 1, 'code': '05', 'description': 'Bleach solutions and bleach fixer solutions' },
        { 'id': 1636, 'subChapter': '01', 'chapter': '09', 'hazardous': 1, 'code': '06', 'description': 'Wastes containing silver from on-site treatment of photographic wastes' },
        { 'id': 1637, 'subChapter': '01', 'chapter': '09', 'hazardous': 0, 'code': '07', 'description': 'Photographic film and paper containing silver or silver compounds' },
        { 'id': 1638, 'subChapter': '01', 'chapter': '09', 'hazardous': 0, 'code': '08', 'description': 'Photographic film and paper free of silver or silver compounds' },
        { 'id': 1639, 'subChapter': '01', 'chapter': '09', 'hazardous': 0, 'code': '10', 'description': 'Single-use cameras without batteries' },
        { 'id': 1640, 'subChapter': '01', 'chapter': '09', 'hazardous': 1, 'code': '11', 'description': 'Single-use cameras containing batteries included in 16 06 01, 16 06 02 or 16 06 03' },
        { 'id': 1641, 'subChapter': '01', 'chapter': '09', 'hazardous': 0, 'code': '12', 'description': 'Single-use cameras containing batteries other than those mentioned in 09 01 11' },
        { 'id': 1642, 'subChapter': '01', 'chapter': '09', 'hazardous': 1, 'code': '13', 'description': 'Aqueous liquid waste from on-site reclamation of silver other than those mentioned in 09 01 06' },
        { 'id': 1643, 'subChapter': '01', 'chapter': '09', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1644, 'subChapter': '01', 'chapter': '10', 'hazardous': 0, 'code': '01', 'description': 'Bottom ash, slag and boiler dust (excluding boiler dust mentioned in 10 01 04)' },
        { 'id': 1645, 'subChapter': '01', 'chapter': '10', 'hazardous': 0, 'code': '02', 'description': 'Coal fly ash' },
        { 'id': 1646, 'subChapter': '01', 'chapter': '10', 'hazardous': 0, 'code': '03', 'description': 'Fly ash from peat and untreated wood' },
        { 'id': 1647, 'subChapter': '01', 'chapter': '10', 'hazardous': 1, 'code': '04', 'description': 'Oil fly ash and boiler dust' },
        { 'id': 1648, 'subChapter': '01', 'chapter': '10', 'hazardous': 0, 'code': '05', 'description': 'Calcium-based reaction wastes from flue-gas desulphurisation in solid form' },
        { 'id': 1649, 'subChapter': '01', 'chapter': '10', 'hazardous': 0, 'code': '07', 'description': 'Calcium-based reaction wastes from flue-gas desulphurisation in sludge form' },
        { 'id': 1650, 'subChapter': '01', 'chapter': '10', 'hazardous': 1, 'code': '09', 'description': 'Sulphuric acid' },
        { 'id': 1651, 'subChapter': '01', 'chapter': '10', 'hazardous': 1, 'code': '13', 'description': 'Fly ash from emulsified hydrocarbons used as fuel' },
        { 'id': 1652, 'subChapter': '01', 'chapter': '10', 'hazardous': 1, 'code': '14', 'description': 'Bottom ash, slag and boiler dust from co-incineration containing dangerous substances' },
        { 'id': 1653, 'subChapter': '01', 'chapter': '10', 'hazardous': 0, 'code': '15', 'description': 'Bottom ash, slag and boiler dust from co-incineration other than those mentioned in 10 01 14' },
        { 'id': 1654, 'subChapter': '01', 'chapter': '10', 'hazardous': 1, 'code': '16', 'description': 'Fly ash from co-incineration containing dangerous substances' },
        { 'id': 1655, 'subChapter': '01', 'chapter': '10', 'hazardous': 0, 'code': '17', 'description': 'Fly ash from co-incineration other than those mentioned in 10 01 16' },
        { 'id': 1656, 'subChapter': '01', 'chapter': '10', 'hazardous': 1, 'code': '18', 'description': 'Wastes from gas cleaning containing dangerous substances' },
        { 'id': 1657, 'subChapter': '01', 'chapter': '10', 'hazardous': 0, 'code': '19', 'description': 'Wastes from gas cleaning other than those mentioned in 10 01 05, 10 01 07 and 10 01 18' },
        { 'id': 1658, 'subChapter': '01', 'chapter': '10', 'hazardous': 1, 'code': '20', 'description': 'Sludges from on-site effluent treatment containing dangerous substances' },
        { 'id': 1659, 'subChapter': '01', 'chapter': '10', 'hazardous': 0, 'code': '21', 'description': 'Sludges from on-site effluent treatment other than those mentioned in 10 01 20' },
        { 'id': 1660, 'subChapter': '01', 'chapter': '10', 'hazardous': 1, 'code': '22', 'description': 'Aqueous sludges from boiler cleansing containing dangerous substances' },
        { 'id': 1661, 'subChapter': '01', 'chapter': '10', 'hazardous': 0, 'code': '23', 'description': 'Aqueous sludges from boiler cleansing other than those mentioned in 10 01 22' },
        { 'id': 1662, 'subChapter': '01', 'chapter': '10', 'hazardous': 0, 'code': '24', 'description': 'Sands from fluidised beds' },
        { 'id': 1663, 'subChapter': '01', 'chapter': '10', 'hazardous': 0, 'code': '25', 'description': 'Wastes from fuel storage and preparation of coal-fired power plants' },
        { 'id': 1664, 'subChapter': '01', 'chapter': '10', 'hazardous': 0, 'code': '26', 'description': 'Wastes from cooling-water treatment' },
        { 'id': 1665, 'subChapter': '01', 'chapter': '10', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1666, 'subChapter': '02', 'chapter': '10', 'hazardous': 0, 'code': '01', 'description': 'Wastes from the processing of slag' },
        { 'id': 1667, 'subChapter': '02', 'chapter': '10', 'hazardous': 0, 'code': '02', 'description': 'Unprocessed slag' },
        { 'id': 1668, 'subChapter': '02', 'chapter': '10', 'hazardous': 1, 'code': '07', 'description': 'Solid wastes from gas treatment containing dangerous substances' },
        { 'id': 1669, 'subChapter': '02', 'chapter': '10', 'hazardous': 0, 'code': '08', 'description': 'Solid wastes from gas treatment other than those mentioned in 10 02 07' },
        { 'id': 1670, 'subChapter': '02', 'chapter': '10', 'hazardous': 0, 'code': '10', 'description': 'Mill scales' },
        { 'id': 1671, 'subChapter': '02', 'chapter': '10', 'hazardous': 1, 'code': '11', 'description': 'Wastes from cooling-water treatment containing oil' },
        { 'id': 1672, 'subChapter': '02', 'chapter': '10', 'hazardous': 0, 'code': '12', 'description': 'Wastes from cooling-water treatment other than those mentioned in 10 02 11' },
        { 'id': 1673, 'subChapter': '02', 'chapter': '10', 'hazardous': 1, 'code': '13', 'description': 'Sludges and filter cakes from gas treatment containing dangerous substances' },
        { 'id': 1674, 'subChapter': '02', 'chapter': '10', 'hazardous': 0, 'code': '14', 'description': 'Sludges and filter cakes from gas treatment other than those mentioned in 10 02 13' },
        { 'id': 1675, 'subChapter': '02', 'chapter': '10', 'hazardous': 0, 'code': '15', 'description': 'Other sludges and filter cakes' },
        { 'id': 1676, 'subChapter': '02', 'chapter': '10', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1677, 'subChapter': '03', 'chapter': '10', 'hazardous': 0, 'code': '02', 'description': 'Anode scraps' },
        { 'id': 1678, 'subChapter': '03', 'chapter': '10', 'hazardous': 1, 'code': '04', 'description': 'Primary production slags' },
        { 'id': 1679, 'subChapter': '03', 'chapter': '10', 'hazardous': 0, 'code': '05', 'description': 'Waste alumina' },
        { 'id': 1680, 'subChapter': '03', 'chapter': '10', 'hazardous': 1, 'code': '08', 'description': 'Salt slags from secondary production' },
        { 'id': 1681, 'subChapter': '03', 'chapter': '10', 'hazardous': 1, 'code': '09', 'description': 'Black drosses from secondary production' },
        { 'id': 1682, 'subChapter': '03', 'chapter': '10', 'hazardous': 1, 'code': '15', 'description': 'Skimmings that are flammable or emit, upon contact with water, flammable gases in dangerous quantities' },
        { 'id': 1683, 'subChapter': '03', 'chapter': '10', 'hazardous': 0, 'code': '16', 'description': 'Skimmings other than those mentioned in 10 03 15' },
        { 'id': 1684, 'subChapter': '03', 'chapter': '10', 'hazardous': 1, 'code': '17', 'description': 'Tar-containing wastes from anode manufacture' },
        { 'id': 1685, 'subChapter': '03', 'chapter': '10', 'hazardous': 0, 'code': '18', 'description': 'Carbon-containing wastes from anode manufacture other than those mentioned in 10 03 17' },
        { 'id': 1686, 'subChapter': '03', 'chapter': '10', 'hazardous': 1, 'code': '19', 'description': 'Flue-gas dust containing dangerous substances' },
        { 'id': 1687, 'subChapter': '03', 'chapter': '10', 'hazardous': 0, 'code': '20', 'description': 'Flue-gas dust other than those mentioned in 10 03 19' },
        { 'id': 1688, 'subChapter': '03', 'chapter': '10', 'hazardous': 1, 'code': '21', 'description': 'Other particulates and dust (including ball-mill dust) containing dangerous substances' },
        { 'id': 1689, 'subChapter': '03', 'chapter': '10', 'hazardous': 0, 'code': '22', 'description': 'Other particulates and dust (including ball-mill dust) other than those mentioned in 10 03 21' },
        { 'id': 1690, 'subChapter': '03', 'chapter': '10', 'hazardous': 1, 'code': '23', 'description': 'Solid wastes from gas treatment containing dangerous substances' },
        { 'id': 1691, 'subChapter': '03', 'chapter': '10', 'hazardous': 0, 'code': '24', 'description': 'Solid wastes from gas treatment other than those mentioned in 10 03 23' },
        { 'id': 1692, 'subChapter': '03', 'chapter': '10', 'hazardous': 1, 'code': '25', 'description': 'Sludges and filter cakes from gas treatment containing dangerous substances' },
        { 'id': 1693, 'subChapter': '03', 'chapter': '10', 'hazardous': 0, 'code': '26', 'description': 'Sludges and filter cakes from gas treatment other than those mentioned in 10 03 25' },
        { 'id': 1694, 'subChapter': '03', 'chapter': '10', 'hazardous': 1, 'code': '27', 'description': 'Wastes from cooling-water treatment containing oil' },
        { 'id': 1695, 'subChapter': '03', 'chapter': '10', 'hazardous': 0, 'code': '28', 'description': 'Wastes from cooling-water treatment other than those mentioned in 10 03 27' },
        { 'id': 1696, 'subChapter': '03', 'chapter': '10', 'hazardous': 1, 'code': '29', 'description': 'Wastes from treatment of salt slags and black drosses containing dangerous substances' },
        { 'id': 1697, 'subChapter': '03', 'chapter': '10', 'hazardous': 0, 'code': '30', 'description': 'Wastes from treatment of salt slags and black drosses other than those mentioned in 10 03 29' },
        { 'id': 1698, 'subChapter': '03', 'chapter': '10', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1699, 'subChapter': '04', 'chapter': '10', 'hazardous': 1, 'code': '01', 'description': 'Slags from primary and secondary production' },
        { 'id': 1700, 'subChapter': '04', 'chapter': '10', 'hazardous': 1, 'code': '02', 'description': 'Dross and skimmings from primary and secondary production' },
        { 'id': 1701, 'subChapter': '04', 'chapter': '10', 'hazardous': 1, 'code': '03', 'description': 'Calcium arsenate' },
        { 'id': 1702, 'subChapter': '04', 'chapter': '10', 'hazardous': 1, 'code': '04', 'description': 'Flue-gas dust' },
        { 'id': 1703, 'subChapter': '04', 'chapter': '10', 'hazardous': 1, 'code': '05', 'description': 'Other particulates and dust' },
        { 'id': 1704, 'subChapter': '04', 'chapter': '10', 'hazardous': 1, 'code': '06', 'description': 'Solid wastes from gas treatment' },
        { 'id': 1705, 'subChapter': '04', 'chapter': '10', 'hazardous': 1, 'code': '07', 'description': 'Sludges and filter cakes from gas treatment' },
        { 'id': 1706, 'subChapter': '04', 'chapter': '10', 'hazardous': 1, 'code': '09', 'description': 'Wastes from cooling-water treatment containing oil' },
        { 'id': 1707, 'subChapter': '04', 'chapter': '10', 'hazardous': 0, 'code': '10', 'description': 'Wastes from cooling-water treatment other than those mentioned in 10 04 09' },
        { 'id': 1708, 'subChapter': '04', 'chapter': '10', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1709, 'subChapter': '05', 'chapter': '10', 'hazardous': 0, 'code': '01', 'description': 'Slags from primary and secondary production' },
        { 'id': 1710, 'subChapter': '05', 'chapter': '10', 'hazardous': 1, 'code': '03', 'description': 'Flue-gas dust' },
        { 'id': 1711, 'subChapter': '05', 'chapter': '10', 'hazardous': 0, 'code': '04', 'description': 'Other particulates and dust' },
        { 'id': 1712, 'subChapter': '05', 'chapter': '10', 'hazardous': 1, 'code': '05', 'description': 'Solid waste from gas treatment' },
        { 'id': 1713, 'subChapter': '05', 'chapter': '10', 'hazardous': 1, 'code': '06', 'description': 'Sludges and filter cakes from gas treatment' },
        { 'id': 1714, 'subChapter': '05', 'chapter': '10', 'hazardous': 1, 'code': '08', 'description': 'Wastes from cooling-water treatment containing oil' },
        { 'id': 1715, 'subChapter': '05', 'chapter': '10', 'hazardous': 0, 'code': '09', 'description': 'Wastes from cooling-water treatment other than those mentioned in 10 05 08' },
        { 'id': 1716, 'subChapter': '05', 'chapter': '10', 'hazardous': 1, 'code': '10', 'description': 'Dross and skimmings that are flammable or emit, upon contact with water, flammable gases in dangerous quantities' },
        { 'id': 1717, 'subChapter': '05', 'chapter': '10', 'hazardous': 0, 'code': '11', 'description': 'Dross and skimmings other than those mentioned in 10 05 10' },
        { 'id': 1718, 'subChapter': '05', 'chapter': '10', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1719, 'subChapter': '06', 'chapter': '10', 'hazardous': 0, 'code': '01', 'description': 'Slags from primary and secondary production' },
        { 'id': 1720, 'subChapter': '06', 'chapter': '10', 'hazardous': 0, 'code': '02', 'description': 'Dross and skimmings from primary and secondary production' },
        { 'id': 1721, 'subChapter': '06', 'chapter': '10', 'hazardous': 1, 'code': '03', 'description': 'Flue-gas dust' },
        { 'id': 1722, 'subChapter': '06', 'chapter': '10', 'hazardous': 0, 'code': '04', 'description': 'Other particulates and dust' },
        { 'id': 1723, 'subChapter': '06', 'chapter': '10', 'hazardous': 1, 'code': '06', 'description': 'Solid wastes from gas treatment' },
        { 'id': 1724, 'subChapter': '06', 'chapter': '10', 'hazardous': 1, 'code': '07', 'description': 'Sludges and filter cakes from gas treatment' },
        { 'id': 1725, 'subChapter': '06', 'chapter': '10', 'hazardous': 1, 'code': '09', 'description': 'Wastes from cooling-water treatment containing oil' },
        { 'id': 1726, 'subChapter': '06', 'chapter': '10', 'hazardous': 0, 'code': '10', 'description': 'Wastes from cooling-water treatment other than those mentioned in 10 06 09' },
        { 'id': 1727, 'subChapter': '06', 'chapter': '10', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1728, 'subChapter': '07', 'chapter': '10', 'hazardous': 0, 'code': '01', 'description': 'Slags from primary and secondary production' },
        { 'id': 1729, 'subChapter': '07', 'chapter': '10', 'hazardous': 0, 'code': '02', 'description': 'Dross and skimmings from primary and secondary production' },
        { 'id': 1730, 'subChapter': '07', 'chapter': '10', 'hazardous': 0, 'code': '03', 'description': 'Solid wastes from gas treatment' },
        { 'id': 1731, 'subChapter': '07', 'chapter': '10', 'hazardous': 0, 'code': '04', 'description': 'Other particulates and dust' },
        { 'id': 1732, 'subChapter': '07', 'chapter': '10', 'hazardous': 0, 'code': '05', 'description': 'Sludges and filter cakes from gas treatment' },
        { 'id': 1733, 'subChapter': '07', 'chapter': '10', 'hazardous': 1, 'code': '07', 'description': 'Wastes from cooling-water treatment containing oil' },
        { 'id': 1734, 'subChapter': '07', 'chapter': '10', 'hazardous': 0, 'code': '08', 'description': 'Wastes from cooling-water treatment other than those mentioned in 10 07 07' },
        { 'id': 1735, 'subChapter': '07', 'chapter': '10', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1736, 'subChapter': '08', 'chapter': '10', 'hazardous': 0, 'code': '04', 'description': 'Particulates and dust' },
        { 'id': 1737, 'subChapter': '08', 'chapter': '10', 'hazardous': 1, 'code': '08', 'description': 'Salt slag from primary and secondary production' },
        { 'id': 1738, 'subChapter': '08', 'chapter': '10', 'hazardous': 0, 'code': '09', 'description': 'Other slags' },
        { 'id': 1739, 'subChapter': '08', 'chapter': '10', 'hazardous': 1, 'code': '10', 'description': 'Dross and skimmings that are flammable or emit, upon contact with water, flammable gases in dangerous quantities' },
        { 'id': 1740, 'subChapter': '08', 'chapter': '10', 'hazardous': 0, 'code': '11', 'description': 'Dross and skimmings other than those mentioned in 10 08 10' },
        { 'id': 1741, 'subChapter': '08', 'chapter': '10', 'hazardous': 1, 'code': '12', 'description': 'Tar-containing wastes from anode manufacture' },
        { 'id': 1742, 'subChapter': '08', 'chapter': '10', 'hazardous': 0, 'code': '13', 'description': 'Carbon-containing wastes from anode manufacture other than those mentioned in 10 08 12' },
        { 'id': 1743, 'subChapter': '08', 'chapter': '10', 'hazardous': 0, 'code': '14', 'description': 'Anode scrap' },
        { 'id': 1744, 'subChapter': '08', 'chapter': '10', 'hazardous': 1, 'code': '15', 'description': 'Flue-gas dust containing dangerous substances' },
        { 'id': 1745, 'subChapter': '08', 'chapter': '10', 'hazardous': 0, 'code': '16', 'description': 'Flue-gas dust other than those mentioned in 10 08 15' },
        { 'id': 1746, 'subChapter': '08', 'chapter': '10', 'hazardous': 1, 'code': '17', 'description': 'Sludges and filter cakes from flue-gas treatment containing dangerous substances' },
        { 'id': 1747, 'subChapter': '08', 'chapter': '10', 'hazardous': 0, 'code': '18', 'description': 'Sludges and filter cakes from flue-gas treatment other than those mentioned in 10 08 17' },
        { 'id': 1748, 'subChapter': '08', 'chapter': '10', 'hazardous': 1, 'code': '19', 'description': 'Wastes from cooling-water treatment containing oil' },
        { 'id': 1749, 'subChapter': '08', 'chapter': '10', 'hazardous': 0, 'code': '20', 'description': 'Wastes from cooling-water treatment other than those mentioned in 10 08 19' },
        { 'id': 1750, 'subChapter': '08', 'chapter': '10', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1751, 'subChapter': '09', 'chapter': '10', 'hazardous': 0, 'code': '03', 'description': 'Furnace slag' },
        { 'id': 1752, 'subChapter': '09', 'chapter': '10', 'hazardous': 1, 'code': '05', 'description': 'Casting cores and moulds which have not undergone pouring containing dangerous substances' },
        { 'id': 1753, 'subChapter': '09', 'chapter': '10', 'hazardous': 0, 'code': '06', 'description': 'Casting cores and moulds which have not undergone pouring other than those mentioned in 10 09 05' },
        { 'id': 1754, 'subChapter': '09', 'chapter': '10', 'hazardous': 1, 'code': '07', 'description': 'Casting cores and moulds which have undergone pouring containing dangerous substances' },
        { 'id': 1755, 'subChapter': '09', 'chapter': '10', 'hazardous': 0, 'code': '08', 'description': 'Casting cores and moulds which have undergone pouring other than those mentioned in 10 09 07' },
        { 'id': 1756, 'subChapter': '09', 'chapter': '10', 'hazardous': 1, 'code': '09', 'description': 'Flue-gas dust containing dangerous substances' },
        { 'id': 1757, 'subChapter': '09', 'chapter': '10', 'hazardous': 0, 'code': '10', 'description': 'Flue-gas dust other than those mentioned in 10 09 09' },
        { 'id': 1758, 'subChapter': '09', 'chapter': '10', 'hazardous': 1, 'code': '11', 'description': 'Other particulates containing dangerous substances' },
        { 'id': 1759, 'subChapter': '09', 'chapter': '10', 'hazardous': 0, 'code': '12', 'description': 'Other particulates other than those mentioned in 10 09 11' },
        { 'id': 1760, 'subChapter': '09', 'chapter': '10', 'hazardous': 1, 'code': '13', 'description': 'Waste binders containing dangerous substances' },
        { 'id': 1761, 'subChapter': '09', 'chapter': '10', 'hazardous': 0, 'code': '14', 'description': 'Waste binders other than those mentioned in 10 09 13' },
        { 'id': 1762, 'subChapter': '09', 'chapter': '10', 'hazardous': 1, 'code': '15', 'description': 'Waste crack-indicating agent containing dangerous substances' },
        { 'id': 1763, 'subChapter': '09', 'chapter': '10', 'hazardous': 0, 'code': '16', 'description': 'Waste crack-indicating agent other than those mentioned in 10 09 15' },
        { 'id': 1764, 'subChapter': '09', 'chapter': '10', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1765, 'subChapter': '10', 'chapter': '10', 'hazardous': 0, 'code': '03', 'description': 'Furnace slag' },
        { 'id': 1766, 'subChapter': '10', 'chapter': '10', 'hazardous': 1, 'code': '05', 'description': 'Casting cores and moulds which have not undergone pouring, containing dangerous substances' },
        { 'id': 1767, 'subChapter': '10', 'chapter': '10', 'hazardous': 0, 'code': '06', 'description': 'Casting cores and moulds which have not undergone pouring, other than those mentioned in 10 10 05' },
        { 'id': 1768, 'subChapter': '10', 'chapter': '10', 'hazardous': 1, 'code': '07', 'description': 'Casting cores and moulds which have undergone pouring, containing dangerous substances' },
        { 'id': 1769, 'subChapter': '10', 'chapter': '10', 'hazardous': 0, 'code': '08', 'description': 'Casting cores and moulds which have undergone pouring, other than those mentioned in 10 10 07' },
        { 'id': 1770, 'subChapter': '10', 'chapter': '10', 'hazardous': 1, 'code': '09', 'description': 'Flue-gas dust containing dangerous substances' },
        { 'id': 1771, 'subChapter': '10', 'chapter': '10', 'hazardous': 0, 'code': '10', 'description': 'Flue-gas dust other than those mentioned in 10 10 09' },
        { 'id': 1772, 'subChapter': '10', 'chapter': '10', 'hazardous': 1, 'code': '11', 'description': 'Other particulates containing dangerous substances' },
        { 'id': 1773, 'subChapter': '10', 'chapter': '10', 'hazardous': 0, 'code': '12', 'description': 'Other particulates other than those mentioned in 10 10 11' },
        { 'id': 1774, 'subChapter': '10', 'chapter': '10', 'hazardous': 1, 'code': '13', 'description': 'Waste binders containing dangerous substances' },
        { 'id': 1775, 'subChapter': '10', 'chapter': '10', 'hazardous': 0, 'code': '14', 'description': 'Waste binders other than those mentioned in 10 10 13' },
        { 'id': 1776, 'subChapter': '10', 'chapter': '10', 'hazardous': 1, 'code': '15', 'description': 'Waste crack-indicating agent containing dangerous substances' },
        { 'id': 1777, 'subChapter': '10', 'chapter': '10', 'hazardous': 0, 'code': '16', 'description': 'Waste crack-indicating agent other than those mentioned in 10 10 15' },
        { 'id': 1778, 'subChapter': '10', 'chapter': '10', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1779, 'subChapter': '11', 'chapter': '10', 'hazardous': 0, 'code': '03', 'description': 'Waste glass-based fibrous materials' },
        { 'id': 1780, 'subChapter': '11', 'chapter': '10', 'hazardous': 0, 'code': '05', 'description': 'Particulates and dust' },
        { 'id': 1781, 'subChapter': '11', 'chapter': '10', 'hazardous': 1, 'code': '09', 'description': 'Waste preparation mixture before thermal processing, containing dangerous substances' },
        { 'id': 1782, 'subChapter': '11', 'chapter': '10', 'hazardous': 0, 'code': '10', 'description': 'Waste preparation mixture before thermal processing, other than those mentioned in 10 11 09' },
        { 'id': 1783, 'subChapter': '11', 'chapter': '10', 'hazardous': 1, 'code': '11', 'description': 'Waste glass in small particles and glass powder containing heavy metals (for example from cathode ray tubes)' },
        { 'id': 1784, 'subChapter': '11', 'chapter': '10', 'hazardous': 0, 'code': '12', 'description': 'Waste glass other than those mentioned in 10 11 11' },
        { 'id': 1785, 'subChapter': '11', 'chapter': '10', 'hazardous': 1, 'code': '13', 'description': 'Glass-polishing and -grinding sludge containing dangerous substances' },
        { 'id': 1786, 'subChapter': '11', 'chapter': '10', 'hazardous': 0, 'code': '14', 'description': 'Glass-polishing and -grinding sludge other than those mentioned in 10 11 13' },
        { 'id': 1787, 'subChapter': '11', 'chapter': '10', 'hazardous': 1, 'code': '15', 'description': 'Solid wastes from flue-gas treatment containing dangerous substances' },
        { 'id': 1788, 'subChapter': '11', 'chapter': '10', 'hazardous': 0, 'code': '16', 'description': 'Solid wastes from flue-gas treatment other than those mentioned in 10 11 15' },
        { 'id': 1789, 'subChapter': '11', 'chapter': '10', 'hazardous': 1, 'code': '17', 'description': 'Sludges and filter cakes from flue-gas treatment containing dangerous substances' },
        { 'id': 1790, 'subChapter': '11', 'chapter': '10', 'hazardous': 0, 'code': '18', 'description': 'Sludges and filter cakes from flue-gas treatment other than those mentioned in 10 11 17' },
        { 'id': 1791, 'subChapter': '11', 'chapter': '10', 'hazardous': 1, 'code': '19', 'description': 'Solid wastes from on-site effluent treatment containing dangerous substances' },
        { 'id': 1792, 'subChapter': '11', 'chapter': '10', 'hazardous': 0, 'code': '20', 'description': 'Solid wastes from on-site effluent treatment other than those mentioned in 10 11 19' },
        { 'id': 1793, 'subChapter': '11', 'chapter': '10', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1794, 'subChapter': '12', 'chapter': '10', 'hazardous': 0, 'code': '01', 'description': 'Waste preparation mixture before thermal processing' },
        { 'id': 1795, 'subChapter': '12', 'chapter': '10', 'hazardous': 0, 'code': '03', 'description': 'Particulates and dust' },
        { 'id': 1796, 'subChapter': '12', 'chapter': '10', 'hazardous': 0, 'code': '05', 'description': 'Sludges and filter cakes from gas treatment' },
        { 'id': 1797, 'subChapter': '12', 'chapter': '10', 'hazardous': 0, 'code': '06', 'description': 'Discarded moulds' },
        { 'id': 1798, 'subChapter': '12', 'chapter': '10', 'hazardous': 0, 'code': '08', 'description': 'Waste ceramics, bricks, tiles and construction products (after thermal processing)' },
        { 'id': 1799, 'subChapter': '12', 'chapter': '10', 'hazardous': 1, 'code': '09', 'description': 'Solid wastes from gas treatment containing dangerous substances' },
        { 'id': 1800, 'subChapter': '12', 'chapter': '10', 'hazardous': 0, 'code': '10', 'description': 'Solid wastes from gas treatment other than those mentioned in 10 12 09' },
        { 'id': 1801, 'subChapter': '12', 'chapter': '10', 'hazardous': 1, 'code': '11', 'description': 'Wastes from glazing containing heavy metals' },
        { 'id': 1802, 'subChapter': '12', 'chapter': '10', 'hazardous': 0, 'code': '12', 'description': 'Wastes from glazing other than those mentioned in 10 12 11' },
        { 'id': 1803, 'subChapter': '12', 'chapter': '10', 'hazardous': 0, 'code': '13', 'description': 'Sludge from on-site effluent treatment' },
        { 'id': 1804, 'subChapter': '12', 'chapter': '10', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1805, 'subChapter': '13', 'chapter': '10', 'hazardous': 0, 'code': '01', 'description': 'Waste preparation mixture before thermal processing' },
        { 'id': 1806, 'subChapter': '13', 'chapter': '10', 'hazardous': 0, 'code': '04', 'description': 'Wastes from calcination and hydration of lime' },
        { 'id': 1807, 'subChapter': '13', 'chapter': '10', 'hazardous': 0, 'code': '06', 'description': 'Particulates and dust (except 10 13 12 and 10 13 13)' },
        { 'id': 1808, 'subChapter': '13', 'chapter': '10', 'hazardous': 0, 'code': '07', 'description': 'Sludges and filter cakes from gas treatment' },
        { 'id': 1809, 'subChapter': '13', 'chapter': '10', 'hazardous': 1, 'code': '09', 'description': 'Wastes from asbestos-cement manufacture containing asbestos' },
        { 'id': 1810, 'subChapter': '13', 'chapter': '10', 'hazardous': 0, 'code': '10', 'description': 'Wastes from asbestos-cement manufacture other than those mentioned in 10 13 09' },
        { 'id': 1811, 'subChapter': '13', 'chapter': '10', 'hazardous': 0, 'code': '11', 'description': 'Wastes from cement-based composite materials other than those mentioned in 10 13 09 and 10 13 10' },
        { 'id': 1812, 'subChapter': '13', 'chapter': '10', 'hazardous': 1, 'code': '12', 'description': 'Solid wastes from gas treatment containing dangerous substances' },
        { 'id': 1813, 'subChapter': '13', 'chapter': '10', 'hazardous': 0, 'code': '13', 'description': 'Solid wastes from gas treatment other than those mentioned in 10 13 12' },
        { 'id': 1814, 'subChapter': '13', 'chapter': '10', 'hazardous': 0, 'code': '14', 'description': 'Waste concrete and concrete sludge' },
        { 'id': 1815, 'subChapter': '13', 'chapter': '10', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1816, 'subChapter': '14', 'chapter': '10', 'hazardous': 1, 'code': '01', 'description': 'Waste from gas cleaning containing mercury' },
        { 'id': 1817, 'subChapter': '01', 'chapter': '11', 'hazardous': 1, 'code': '05', 'description': 'Pickling acids' },
        { 'id': 1818, 'subChapter': '01', 'chapter': '11', 'hazardous': 1, 'code': '06', 'description': 'Acids not otherwise specified' },
        { 'id': 1819, 'subChapter': '01', 'chapter': '11', 'hazardous': 1, 'code': '07', 'description': 'Pickling bases' },
        { 'id': 1820, 'subChapter': '01', 'chapter': '11', 'hazardous': 1, 'code': '08', 'description': 'Phosphatising sludges' },
        { 'id': 1821, 'subChapter': '01', 'chapter': '11', 'hazardous': 1, 'code': '09', 'description': 'Sludges and filter cakes containing dangerous substances' },
        { 'id': 1822, 'subChapter': '01', 'chapter': '11', 'hazardous': 0, 'code': '10', 'description': 'Sludges and filter cakes other than those mentioned in 11 01 09' },
        { 'id': 1823, 'subChapter': '01', 'chapter': '11', 'hazardous': 1, 'code': '11', 'description': 'Aqueous rinsing liquids containing dangerous substances' },
        { 'id': 1824, 'subChapter': '01', 'chapter': '11', 'hazardous': 0, 'code': '12', 'description': 'Aqueous rinsing liquids other than those mentioned in 11 01 11' },
        { 'id': 1825, 'subChapter': '01', 'chapter': '11', 'hazardous': 1, 'code': '13', 'description': 'Degreasing wastes containing dangerous substances' },
        { 'id': 1826, 'subChapter': '01', 'chapter': '11', 'hazardous': 0, 'code': '14', 'description': 'Degreasing wastes other than those mentioned in 11 01 13' },
        { 'id': 1827, 'subChapter': '01', 'chapter': '11', 'hazardous': 1, 'code': '15', 'description': 'Eluate and sludges from membrane systems or ion exchange systems containing dangerous substances' },
        { 'id': 1828, 'subChapter': '01', 'chapter': '11', 'hazardous': 1, 'code': '16', 'description': 'Saturated or spent ion exchange resins' },
        { 'id': 1829, 'subChapter': '01', 'chapter': '11', 'hazardous': 1, 'code': '98', 'description': 'Other wastes containing dangerous substances' },
        { 'id': 1830, 'subChapter': '01', 'chapter': '11', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1831, 'subChapter': '02', 'chapter': '11', 'hazardous': 1, 'code': '02', 'description': 'Sludges from zinc hydrometallurgy (including jarosite, goethite)' },
        { 'id': 1832, 'subChapter': '02', 'chapter': '11', 'hazardous': 0, 'code': '03', 'description': 'Wastes from the production of anodes for aqueous electrolytical processes' },
        { 'id': 1833, 'subChapter': '02', 'chapter': '11', 'hazardous': 1, 'code': '05', 'description': 'Wastes from copper hydrometallurgical processes containing dangerous substances' },
        { 'id': 1834, 'subChapter': '02', 'chapter': '11', 'hazardous': 0, 'code': '06', 'description': 'Wastes from copper hydrometallurgical processes other than those mentioned in 11 02 05' },
        { 'id': 1835, 'subChapter': '02', 'chapter': '11', 'hazardous': 1, 'code': '07', 'description': 'Other wastes containing dangerous substances' },
        { 'id': 1836, 'subChapter': '02', 'chapter': '11', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1837, 'subChapter': '03', 'chapter': '11', 'hazardous': 1, 'code': '01', 'description': 'Wastes containing cyanide' },
        { 'id': 1838, 'subChapter': '03', 'chapter': '11', 'hazardous': 1, 'code': '02', 'description': 'Other wastes' },
        { 'id': 1839, 'subChapter': '05', 'chapter': '11', 'hazardous': 0, 'code': '01', 'description': 'Hard zinc' },
        { 'id': 1840, 'subChapter': '05', 'chapter': '11', 'hazardous': 0, 'code': '02', 'description': 'Zinc ash' },
        { 'id': 1841, 'subChapter': '05', 'chapter': '11', 'hazardous': 1, 'code': '03', 'description': 'Solid wastes from gas treatment' },
        { 'id': 1842, 'subChapter': '05', 'chapter': '11', 'hazardous': 1, 'code': '04', 'description': 'Spent flux' },
        { 'id': 1843, 'subChapter': '05', 'chapter': '11', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1844, 'subChapter': '01', 'chapter': '12', 'hazardous': 0, 'code': '01', 'description': 'Ferrous metal filings and turnings' },
        { 'id': 1845, 'subChapter': '01', 'chapter': '12', 'hazardous': 0, 'code': '02', 'description': 'Ferrous metal dust and particles' },
        { 'id': 1846, 'subChapter': '01', 'chapter': '12', 'hazardous': 0, 'code': '03', 'description': 'Non-ferrous metal filings and turnings' },
        { 'id': 1847, 'subChapter': '01', 'chapter': '12', 'hazardous': 0, 'code': '04', 'description': 'Non-ferrous metal dust and particles' },
        { 'id': 1848, 'subChapter': '01', 'chapter': '12', 'hazardous': 0, 'code': '05', 'description': 'Plastics shavings and turnings' },
        { 'id': 1849, 'subChapter': '01', 'chapter': '12', 'hazardous': 1, 'code': '06', 'description': 'Mineral-based machining oils containing halogens (except emulsions and solutions)' },
        { 'id': 1850, 'subChapter': '01', 'chapter': '12', 'hazardous': 1, 'code': '07', 'description': 'Mineral-based machining oils free of halogens (except emulsions and solutions)' },
        { 'id': 1851, 'subChapter': '01', 'chapter': '12', 'hazardous': 1, 'code': '08', 'description': 'Machining emulsions and solutions containing halogens' },
        { 'id': 1852, 'subChapter': '01', 'chapter': '12', 'hazardous': 1, 'code': '09', 'description': 'Machining emulsions and solutions free of halogens' },
        { 'id': 1853, 'subChapter': '01', 'chapter': '12', 'hazardous': 1, 'code': '10', 'description': 'Synthetic machining oils' },
        { 'id': 1854, 'subChapter': '01', 'chapter': '12', 'hazardous': 1, 'code': '12', 'description': 'Spent waxes and fats' },
        { 'id': 1855, 'subChapter': '01', 'chapter': '12', 'hazardous': 0, 'code': '13', 'description': 'Welding wastes' },
        { 'id': 1856, 'subChapter': '01', 'chapter': '12', 'hazardous': 1, 'code': '14', 'description': 'Machining sludges containing dangerous substances' },
        { 'id': 1857, 'subChapter': '01', 'chapter': '12', 'hazardous': 0, 'code': '15', 'description': 'Machining sludges other than those mentioned in 12 01 14' },
        { 'id': 1858, 'subChapter': '01', 'chapter': '12', 'hazardous': 1, 'code': '16', 'description': 'Waste blasting material containing dangerous substances' },
        { 'id': 1859, 'subChapter': '01', 'chapter': '12', 'hazardous': 0, 'code': '17', 'description': 'Waste blasting material other than those mentioned in 12 01 16' },
        { 'id': 1860, 'subChapter': '01', 'chapter': '12', 'hazardous': 1, 'code': '18', 'description': 'Metal sludge (grinding, honing and lapping sludge) containing oil' },
        { 'id': 1861, 'subChapter': '01', 'chapter': '12', 'hazardous': 1, 'code': '19', 'description': 'Readily biodegradable machining oil' },
        { 'id': 1862, 'subChapter': '01', 'chapter': '12', 'hazardous': 1, 'code': '20', 'description': 'Spent grinding bodies and grinding materials containing dangerous substances' },
        { 'id': 1863, 'subChapter': '01', 'chapter': '12', 'hazardous': 0, 'code': '21', 'description': 'Spent grinding bodies and grinding materials other than those mentioned in 12 01 20' },
        { 'id': 1864, 'subChapter': '01', 'chapter': '12', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1865, 'subChapter': '03', 'chapter': '12', 'hazardous': 1, 'code': '01', 'description': 'Aqueous washing liquids' },
        { 'id': 1866, 'subChapter': '03', 'chapter': '12', 'hazardous': 1, 'code': '02', 'description': 'Steam degreasing wastes' },
        { 'id': 1867, 'subChapter': '01', 'chapter': '13', 'hazardous': 1, 'code': '01', 'description': 'Hydraulic oils, containing PCBs' },
        { 'id': 1868, 'subChapter': '01', 'chapter': '13', 'hazardous': 1, 'code': '04', 'description': 'Chlorinated emulsions' },
        { 'id': 1869, 'subChapter': '01', 'chapter': '13', 'hazardous': 1, 'code': '05', 'description': 'Non-chlorinated emulsions' },
        { 'id': 1870, 'subChapter': '01', 'chapter': '13', 'hazardous': 1, 'code': '09', 'description': 'Mineral-based chlorinated hydraulic oils' },
        { 'id': 1871, 'subChapter': '01', 'chapter': '13', 'hazardous': 1, 'code': '10', 'description': 'Mineral based non-chlorinated hydraulic oils' },
        { 'id': 1872, 'subChapter': '01', 'chapter': '13', 'hazardous': 1, 'code': '11', 'description': 'Synthetic hydraulic oils' },
        { 'id': 1873, 'subChapter': '01', 'chapter': '13', 'hazardous': 1, 'code': '12', 'description': 'Readily biodegradable hydraulic oils' },
        { 'id': 1874, 'subChapter': '01', 'chapter': '13', 'hazardous': 1, 'code': '13', 'description': 'Other hydraulic oils' },
        { 'id': 1875, 'subChapter': '02', 'chapter': '13', 'hazardous': 1, 'code': '04', 'description': 'Mineral-based chlorinated engine, gear and lubricating oils' },
        { 'id': 1876, 'subChapter': '02', 'chapter': '13', 'hazardous': 1, 'code': '05', 'description': 'Mineral-based non-chlorinated engine, gear and lubricating oils' },
        { 'id': 1877, 'subChapter': '02', 'chapter': '13', 'hazardous': 1, 'code': '06', 'description': 'Synthetic engine, gear and lubricating oils' },
        { 'id': 1878, 'subChapter': '02', 'chapter': '13', 'hazardous': 1, 'code': '07', 'description': 'Readily biodegradable engine, gear and lubricating oils' },
        { 'id': 1879, 'subChapter': '02', 'chapter': '13', 'hazardous': 1, 'code': '08', 'description': 'Other engine, gear and lubricating oils' },
        { 'id': 1880, 'subChapter': '03', 'chapter': '13', 'hazardous': 1, 'code': '01', 'description': 'Insulating or heat transmission oils containing PCBs' },
        { 'id': 1881, 'subChapter': '03', 'chapter': '13', 'hazardous': 1, 'code': '06', 'description': 'Mineral-based chlorinated insulating and heat transmission oils other than those mentioned in 13 03 01' },
        { 'id': 1882, 'subChapter': '03', 'chapter': '13', 'hazardous': 1, 'code': '07', 'description': 'Mineral-based non-chlorinated insulating and heat transmission oils' },
        { 'id': 1883, 'subChapter': '03', 'chapter': '13', 'hazardous': 1, 'code': '08', 'description': 'Synthetic insulating and heat transmission oils' },
        { 'id': 1884, 'subChapter': '03', 'chapter': '13', 'hazardous': 1, 'code': '09', 'description': 'Readily biodegradable insulating and heat transmission oils' },
        { 'id': 1885, 'subChapter': '03', 'chapter': '13', 'hazardous': 1, 'code': '10', 'description': 'Other insulating and heat transmission oils' },
        { 'id': 1886, 'subChapter': '04', 'chapter': '13', 'hazardous': 1, 'code': '01', 'description': 'Bilge oils from inland navigation' },
        { 'id': 1887, 'subChapter': '04', 'chapter': '13', 'hazardous': 1, 'code': '02', 'description': 'Bilge oils from jetty sewers' },
        { 'id': 1888, 'subChapter': '04', 'chapter': '13', 'hazardous': 1, 'code': '03', 'description': 'Bilge oils from other navigation' },
        { 'id': 1889, 'subChapter': '05', 'chapter': '13', 'hazardous': 1, 'code': '01', 'description': 'Solids from grit chambers and oil/water separators' },
        { 'id': 1890, 'subChapter': '05', 'chapter': '13', 'hazardous': 1, 'code': '02', 'description': 'Sludges from oil/water separators' },
        { 'id': 1891, 'subChapter': '05', 'chapter': '13', 'hazardous': 1, 'code': '03', 'description': 'Interceptor sludges' },
        { 'id': 1892, 'subChapter': '05', 'chapter': '13', 'hazardous': 1, 'code': '06', 'description': 'Oil from oil/water separators' },
        { 'id': 1893, 'subChapter': '05', 'chapter': '13', 'hazardous': 1, 'code': '07', 'description': 'Oily water from oil/water separators' },
        { 'id': 1894, 'subChapter': '05', 'chapter': '13', 'hazardous': 1, 'code': '08', 'description': 'Mixtures of wastes from grit chambers and oil/water separators' },
        { 'id': 1895, 'subChapter': '07', 'chapter': '13', 'hazardous': 1, 'code': '01', 'description': 'Fuel oil and diesel' },
        { 'id': 1896, 'subChapter': '07', 'chapter': '13', 'hazardous': 1, 'code': '02', 'description': 'Petrol' },
        { 'id': 1897, 'subChapter': '07', 'chapter': '13', 'hazardous': 1, 'code': '03', 'description': 'Other fuels (including mixtures)' },
        { 'id': 1898, 'subChapter': '08', 'chapter': '13', 'hazardous': 1, 'code': '01', 'description': 'Desalter sludges or emulsions' },
        { 'id': 1899, 'subChapter': '08', 'chapter': '13', 'hazardous': 1, 'code': '02', 'description': 'Other emulsions' },
        { 'id': 1900, 'subChapter': '08', 'chapter': '13', 'hazardous': 1, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1901, 'subChapter': '06', 'chapter': '14', 'hazardous': 1, 'code': '01', 'description': 'Chlorofluorocarbons, HCFC, HFC' },
        { 'id': 1902, 'subChapter': '06', 'chapter': '14', 'hazardous': 1, 'code': '02', 'description': 'Other halogenated solvents and solvent mixtures' },
        { 'id': 1903, 'subChapter': '06', 'chapter': '14', 'hazardous': 1, 'code': '03', 'description': 'Other solvents and solvent mixtures' },
        { 'id': 1904, 'subChapter': '06', 'chapter': '14', 'hazardous': 1, 'code': '04', 'description': 'Sludges or solid wastes containing halogenated solvents' },
        { 'id': 1905, 'subChapter': '06', 'chapter': '14', 'hazardous': 1, 'code': '05', 'description': 'Sludges or solid wastes containing other solvents' },
        { 'id': 1906, 'subChapter': '01', 'chapter': '15', 'hazardous': 0, 'code': '01', 'description': 'Paper and cardboard packaging' },
        { 'id': 1907, 'subChapter': '01', 'chapter': '15', 'hazardous': 0, 'code': '02', 'description': 'Plastic packaging' },
        { 'id': 1908, 'subChapter': '01', 'chapter': '15', 'hazardous': 0, 'code': '03', 'description': 'Wooden packaging' },
        { 'id': 1909, 'subChapter': '01', 'chapter': '15', 'hazardous': 0, 'code': '04', 'description': 'Metallic packaging' },
        { 'id': 1910, 'subChapter': '01', 'chapter': '15', 'hazardous': 0, 'code': '05', 'description': 'Composite packaging' },
        { 'id': 1911, 'subChapter': '01', 'chapter': '15', 'hazardous': 0, 'code': '06', 'description': 'Mixed packaging' },
        { 'id': 1912, 'subChapter': '01', 'chapter': '15', 'hazardous': 0, 'code': '07', 'description': 'Glass packaging' },
        { 'id': 1913, 'subChapter': '01', 'chapter': '15', 'hazardous': 0, 'code': '09', 'description': 'Textile packaging' },
        { 'id': 1914, 'subChapter': '01', 'chapter': '15', 'hazardous': 1, 'code': '10', 'description': 'Packaging containing residues of or contaminated by dangerous substances' },
        { 'id': 1915, 'subChapter': '01', 'chapter': '15', 'hazardous': 1, 'code': '11', 'description': 'Metallic packaging containing a dangerous solid porous matrix (e.g asbestos), including empty pressure containers' },
        { 'id': 1916, 'subChapter': '02', 'chapter': '15', 'hazardous': 1, 'code': '02', 'description': 'Absorbents, filter materials, wiping cloths and protective clothing contaminated by dangerous substances' },
        { 'id': 1917, 'subChapter': '02', 'chapter': '15', 'hazardous': 0, 'code': '03', 'description': 'Absorbents, filter materials, wiping cloths and protective clothing other than those mentioned in 15 02 02' },
        { 'id': 1918, 'subChapter': '01', 'chapter': '16', 'hazardous': 0, 'code': '03', 'description': 'End-of-life tyres' },
        { 'id': 1919, 'subChapter': '01', 'chapter': '16', 'hazardous': 1, 'code': '04', 'description': 'End-of-life vehicles' },
        { 'id': 1920, 'subChapter': '01', 'chapter': '16', 'hazardous': 0, 'code': '06', 'description': 'End-of-life vehicles, containing neither liquids nor other hazardous components' },
        { 'id': 1921, 'subChapter': '01', 'chapter': '16', 'hazardous': 1, 'code': '07', 'description': 'Oil filters' },
        { 'id': 1922, 'subChapter': '01', 'chapter': '16', 'hazardous': 1, 'code': '08', 'description': 'Components containing mercury' },
        { 'id': 1923, 'subChapter': '01', 'chapter': '16', 'hazardous': 1, 'code': '09', 'description': 'Components containing PCBs' },
        { 'id': 1924, 'subChapter': '01', 'chapter': '16', 'hazardous': 1, 'code': '10', 'description': 'Explosive components (for example air bags)' },
        { 'id': 1925, 'subChapter': '01', 'chapter': '16', 'hazardous': 1, 'code': '11', 'description': 'Brake pads containing asbestos' },
        { 'id': 1926, 'subChapter': '01', 'chapter': '16', 'hazardous': 0, 'code': '12', 'description': 'Brake pads other than those mentioned in 16 01 11' },
        { 'id': 1927, 'subChapter': '01', 'chapter': '16', 'hazardous': 1, 'code': '13', 'description': 'Brake fluids' },
        { 'id': 1928, 'subChapter': '01', 'chapter': '16', 'hazardous': 1, 'code': '14', 'description': 'Antifreeze fluids containing dangerous substances' },
        { 'id': 1929, 'subChapter': '01', 'chapter': '16', 'hazardous': 0, 'code': '15', 'description': 'Antifreeze fluids other than those mentioned in 16 01 14' },
        { 'id': 1930, 'subChapter': '01', 'chapter': '16', 'hazardous': 0, 'code': '16', 'description': 'Tanks for liquefied gas' },
        { 'id': 1931, 'subChapter': '01', 'chapter': '16', 'hazardous': 0, 'code': '17', 'description': 'Ferrous metal' },
        { 'id': 1932, 'subChapter': '01', 'chapter': '16', 'hazardous': 0, 'code': '18', 'description': 'Non-ferrous metal' },
        { 'id': 1933, 'subChapter': '01', 'chapter': '16', 'hazardous': 0, 'code': '19', 'description': 'Plastic' },
        { 'id': 1934, 'subChapter': '01', 'chapter': '16', 'hazardous': 0, 'code': '20', 'description': 'Glass' },
        { 'id': 1935, 'subChapter': '01', 'chapter': '16', 'hazardous': 1, 'code': '21', 'description': 'Hazardous components other than those mentioned in 16 01 07 to 16 01 11 and 16 01 13 and 16 01 14' },
        { 'id': 1936, 'subChapter': '01', 'chapter': '16', 'hazardous': 0, 'code': '22', 'description': 'Components not otherwise specified' },
        { 'id': 1937, 'subChapter': '01', 'chapter': '16', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1938, 'subChapter': '02', 'chapter': '16', 'hazardous': 1, 'code': '09', 'description': 'Transformers and capacitors containing PCBs' },
        { 'id': 1939, 'subChapter': '02', 'chapter': '16', 'hazardous': 1, 'code': '10', 'description': 'Discarded equipment containing or contaminated by PCBs other than those mentioned in 16 02 09' },
        { 'id': 1940, 'subChapter': '02', 'chapter': '16', 'hazardous': 1, 'code': '11', 'description': 'Discarded equipment containing chlorofluorocarbons, HCFC, HFC' },
        { 'id': 1941, 'subChapter': '02', 'chapter': '16', 'hazardous': 1, 'code': '12', 'description': 'Discarded equipment containing free asbestos' },
        { 'id': 1942, 'subChapter': '02', 'chapter': '16', 'hazardous': 1, 'code': '13', 'description': 'Discarded equipment containing hazardous components   other than those mentioned in 16 02 09 to 16 02 12' },
        { 'id': 1943, 'subChapter': '02', 'chapter': '16', 'hazardous': 0, 'code': '14', 'description': 'Discarded equipment other than those mentioned in 16 02 09 to 16 02 13' },
        { 'id': 1944, 'subChapter': '02', 'chapter': '16', 'hazardous': 1, 'code': '15', 'description': 'Hazardous components removed from discarded equipment' },
        { 'id': 1945, 'subChapter': '02', 'chapter': '16', 'hazardous': 0, 'code': '16', 'description': 'Components removed from discarded equipment other than those mentioned in 16 02 15' },
        { 'id': 1946, 'subChapter': '03', 'chapter': '16', 'hazardous': 1, 'code': '03', 'description': 'Inorganic wastes containing dangerous substances' },
        { 'id': 1947, 'subChapter': '03', 'chapter': '16', 'hazardous': 0, 'code': '04', 'description': 'Inorganic wastes other than those mentioned in 16 03 03' },
        { 'id': 1948, 'subChapter': '03', 'chapter': '16', 'hazardous': 1, 'code': '05', 'description': 'Organic wastes containing dangerous substances' },
        { 'id': 1949, 'subChapter': '03', 'chapter': '16', 'hazardous': 0, 'code': '06', 'description': 'Organic wastes other than those mentioned in 16 03 05' },
        { 'id': 1950, 'subChapter': '04', 'chapter': '16', 'hazardous': 1, 'code': '01', 'description': 'Waste ammunition' },
        { 'id': 1951, 'subChapter': '04', 'chapter': '16', 'hazardous': 1, 'code': '02', 'description': 'Fireworks wastes' },
        { 'id': 1952, 'subChapter': '04', 'chapter': '16', 'hazardous': 1, 'code': '03', 'description': 'Other waste explosives' },
        { 'id': 1953, 'subChapter': '05', 'chapter': '16', 'hazardous': 1, 'code': '04', 'description': 'Gases in pressure containers (including halons) containing dangerous substances' },
        { 'id': 1954, 'subChapter': '05', 'chapter': '16', 'hazardous': 0, 'code': '05', 'description': 'Gases in pressure containers other than those mentioned in 16 05 04' },
        { 'id': 1955, 'subChapter': '05', 'chapter': '16', 'hazardous': 1, 'code': '06', 'description': 'Laboratory chemicals, consisting of or containing dangerous substances, including mixtures of laboratory chemicals' },
        { 'id': 1956, 'subChapter': '05', 'chapter': '16', 'hazardous': 1, 'code': '07', 'description': 'Discarded inorganic chemicals consisting of or containing dangerous substances' },
        { 'id': 1957, 'subChapter': '05', 'chapter': '16', 'hazardous': 1, 'code': '08', 'description': 'Discarded organic chemicals consisting of or containing dangerous substances' },
        { 'id': 1958, 'subChapter': '05', 'chapter': '16', 'hazardous': 0, 'code': '09', 'description': 'Discarded chemicals other than those mentioned in 16 05 06, 16 05 07 or 16 05 08' },
        { 'id': 1959, 'subChapter': '06', 'chapter': '16', 'hazardous': 1, 'code': '01', 'description': 'Lead batteries' },
        { 'id': 1960, 'subChapter': '06', 'chapter': '16', 'hazardous': 1, 'code': '02', 'description': 'Ni-Cd batteries' },
        { 'id': 1961, 'subChapter': '06', 'chapter': '16', 'hazardous': 1, 'code': '03', 'description': 'Mercury-containing batteries' },
        { 'id': 1962, 'subChapter': '06', 'chapter': '16', 'hazardous': 0, 'code': '04', 'description': 'Alkaline batteries (except 16 06 03)' },
        { 'id': 1963, 'subChapter': '06', 'chapter': '16', 'hazardous': 0, 'code': '05', 'description': 'Other batteries and accumulators' },
        { 'id': 1964, 'subChapter': '06', 'chapter': '16', 'hazardous': 1, 'code': '06', 'description': 'Separately collected electrolyte from batteries and accumulators' },
        { 'id': 1965, 'subChapter': '07', 'chapter': '16', 'hazardous': 1, 'code': '08', 'description': 'Wastes containing oil' },
        { 'id': 1966, 'subChapter': '07', 'chapter': '16', 'hazardous': 1, 'code': '09', 'description': 'Wastes containing other dangerous substances' },
        { 'id': 1967, 'subChapter': '07', 'chapter': '16', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 1968, 'subChapter': '08', 'chapter': '16', 'hazardous': 0, 'code': '01', 'description': 'Spent catalysts containing gold, silver, rhenium, rhodium, palladium, iridium or platinum (except 16 08 07)' },
        { 'id': 1969, 'subChapter': '08', 'chapter': '16', 'hazardous': 1, 'code': '02', 'description': 'Spent catalysts containing dangerous transition metals  or dangerous transition metal compounds' },
        { 'id': 1970, 'subChapter': '08', 'chapter': '16', 'hazardous': 0, 'code': '03', 'description': 'Spent catalysts containing transition metals or transition metal compounds not otherwise specified' },
        { 'id': 1971, 'subChapter': '08', 'chapter': '16', 'hazardous': 0, 'code': '04', 'description': 'Spent fluid catalytic cracking catalysts (except 16 08 07)' },
        { 'id': 1972, 'subChapter': '08', 'chapter': '16', 'hazardous': 1, 'code': '05', 'description': 'Spent catalysts containing phosphoric acid' },
        { 'id': 1973, 'subChapter': '08', 'chapter': '16', 'hazardous': 1, 'code': '06', 'description': 'Spent liquids used as catalysts' },
        { 'id': 1974, 'subChapter': '08', 'chapter': '16', 'hazardous': 1, 'code': '07', 'description': 'Spent catalysts contaminated with dangerous substances' },
        { 'id': 1975, 'subChapter': '09', 'chapter': '16', 'hazardous': 1, 'code': '01', 'description': 'Permanganates, for example potassium permanganate' },
        { 'id': 1976, 'subChapter': '09', 'chapter': '16', 'hazardous': 1, 'code': '02', 'description': 'Chromates, for example potassium chromate, potassium or sodium dichromate' },
        { 'id': 1977, 'subChapter': '09', 'chapter': '16', 'hazardous': 1, 'code': '03', 'description': 'Peroxides, for example hydrogen peroxide' },
        { 'id': 1978, 'subChapter': '09', 'chapter': '16', 'hazardous': 1, 'code': '04', 'description': 'Oxidising substances, not otherwise specified' },
        { 'id': 1979, 'subChapter': '10', 'chapter': '16', 'hazardous': 1, 'code': '01', 'description': 'Aqueous liquid wastes containing dangerous substances' },
        { 'id': 1980, 'subChapter': '10', 'chapter': '16', 'hazardous': 0, 'code': '02', 'description': 'Aqueous liquid wastes other than those mentioned in 16 10 01' },
        { 'id': 1981, 'subChapter': '10', 'chapter': '16', 'hazardous': 1, 'code': '03', 'description': 'Aqueous concentrates containing dangerous substances' },
        { 'id': 1982, 'subChapter': '10', 'chapter': '16', 'hazardous': 0, 'code': '04', 'description': 'Aqueous concentrates other than those mentioned in 16 10 03' },
        { 'id': 1983, 'subChapter': '11', 'chapter': '16', 'hazardous': 1, 'code': '01', 'description': 'Carbon-based linings and refractories from metallurgical processes containing dangerous substances' },
        { 'id': 1984, 'subChapter': '11', 'chapter': '16', 'hazardous': 0, 'code': '02', 'description': 'Carbon-based linings and refractories from metallurgical processes others than those mentioned in 16 11 01' },
        { 'id': 1985, 'subChapter': '11', 'chapter': '16', 'hazardous': 1, 'code': '03', 'description': 'Other linings and refractories from metallurgical processes containing dangerous substances' },
        { 'id': 1986, 'subChapter': '11', 'chapter': '16', 'hazardous': 0, 'code': '04', 'description': 'Other linings and refractories from metallurgical processes other than those mentioned in 16 11 03' },
        { 'id': 1987, 'subChapter': '11', 'chapter': '16', 'hazardous': 1, 'code': '05', 'description': 'Linings and refractories from non-metallurgical processes containing dangerous substances' },
        { 'id': 1988, 'subChapter': '11', 'chapter': '16', 'hazardous': 0, 'code': '06', 'description': 'Linings and refractories from non-metallurgical processes others than those mentioned in 16 11 05' },
        { 'id': 1989, 'subChapter': '01', 'chapter': '17', 'hazardous': 0, 'code': '01', 'description': 'Concrete' },
        { 'id': 1990, 'subChapter': '01', 'chapter': '17', 'hazardous': 0, 'code': '02', 'description': 'Bricks' },
        { 'id': 1991, 'subChapter': '01', 'chapter': '17', 'hazardous': 0, 'code': '03', 'description': 'Tiles and ceramics' },
        { 'id': 1992, 'subChapter': '01', 'chapter': '17', 'hazardous': 1, 'code': '06', 'description': 'Mixtures of, or separate fractions of concrete, bricks, tiles and ceramics containing dangerous substances' },
        { 'id': 1993, 'subChapter': '01', 'chapter': '17', 'hazardous': 0, 'code': '07', 'description': 'Mixtures of concrete, bricks, tiles and ceramics other than those mentioned in 17 01 06' },
        { 'id': 1994, 'subChapter': '02', 'chapter': '17', 'hazardous': 0, 'code': '01', 'description': 'Wood' },
        { 'id': 1995, 'subChapter': '02', 'chapter': '17', 'hazardous': 0, 'code': '02', 'description': 'Glass' },
        { 'id': 1996, 'subChapter': '02', 'chapter': '17', 'hazardous': 0, 'code': '03', 'description': 'Plastic' },
        { 'id': 1997, 'subChapter': '02', 'chapter': '17', 'hazardous': 1, 'code': '04', 'description': 'Glass, plastic and wood containing or contaminated with dangerous substances' },
        { 'id': 1998, 'subChapter': '03', 'chapter': '17', 'hazardous': 1, 'code': '01', 'description': 'Bituminous mixtures containing coal tar' },
        { 'id': 1999, 'subChapter': '03', 'chapter': '17', 'hazardous': 0, 'code': '02', 'description': 'Bituminous mixtures other than those mentioned in 17 03 01' },
        { 'id': 2000, 'subChapter': '03', 'chapter': '17', 'hazardous': 1, 'code': '03', 'description': 'Coal tar and tarred products' },
        { 'id': 2001, 'subChapter': '04', 'chapter': '17', 'hazardous': 0, 'code': '01', 'description': 'Copper, bronze, brass' },
        { 'id': 2002, 'subChapter': '04', 'chapter': '17', 'hazardous': 0, 'code': '02', 'description': 'Aluminium' },
        { 'id': 2003, 'subChapter': '04', 'chapter': '17', 'hazardous': 0, 'code': '03', 'description': 'Lead' },
        { 'id': 2004, 'subChapter': '04', 'chapter': '17', 'hazardous': 0, 'code': '04', 'description': 'Zinc' },
        { 'id': 2005, 'subChapter': '04', 'chapter': '17', 'hazardous': 0, 'code': '05', 'description': 'Iron and steel' },
        { 'id': 2006, 'subChapter': '04', 'chapter': '17', 'hazardous': 0, 'code': '06', 'description': 'Tin' },
        { 'id': 2007, 'subChapter': '04', 'chapter': '17', 'hazardous': 0, 'code': '07', 'description': 'Mixed metals' },
        { 'id': 2008, 'subChapter': '04', 'chapter': '17', 'hazardous': 1, 'code': '09', 'description': 'Metal waste contaminated with dangerous substances' },
        { 'id': 2009, 'subChapter': '04', 'chapter': '17', 'hazardous': 1, 'code': '10', 'description': 'Cables containing oil, coal tar and other dangerous substances' },
        { 'id': 2010, 'subChapter': '04', 'chapter': '17', 'hazardous': 0, 'code': '11', 'description': 'Cables other than those mentioned in 17 04 10' },
        { 'id': 2011, 'subChapter': '05', 'chapter': '17', 'hazardous': 1, 'code': '03', 'description': 'Soil and stones containing dangerous substances' },
        { 'id': 2012, 'subChapter': '05', 'chapter': '17', 'hazardous': 0, 'code': '04', 'description': 'Soil and stones other than those mentioned in 17 05 03' },
        { 'id': 2013, 'subChapter': '05', 'chapter': '17', 'hazardous': 1, 'code': '05', 'description': 'Dredging spoil containing dangerous substances' },
        { 'id': 2014, 'subChapter': '05', 'chapter': '17', 'hazardous': 0, 'code': '06', 'description': 'Dredging spoil other than those mentioned in 17 05 05' },
        { 'id': 2015, 'subChapter': '05', 'chapter': '17', 'hazardous': 1, 'code': '07', 'description': 'Track ballast containing dangerous substances' },
        { 'id': 2016, 'subChapter': '05', 'chapter': '17', 'hazardous': 0, 'code': '08', 'description': 'Track ballast other than those mentioned in 17 05 07' },
        { 'id': 2017, 'subChapter': '06', 'chapter': '17', 'hazardous': 1, 'code': '01', 'description': 'Insulation materials containing asbestos' },
        { 'id': 2018, 'subChapter': '06', 'chapter': '17', 'hazardous': 1, 'code': '03', 'description': 'Other insulation materials consisting of or containing dangerous substances' },
        { 'id': 2019, 'subChapter': '06', 'chapter': '17', 'hazardous': 0, 'code': '04', 'description': 'Insulation materials other than those mentioned in 17 06 01 and 17 06 03' },
        { 'id': 2020, 'subChapter': '06', 'chapter': '17', 'hazardous': 1, 'code': '05', 'description': 'Construction materials containing asbestos' },
        { 'id': 2021, 'subChapter': '08', 'chapter': '17', 'hazardous': 1, 'code': '01', 'description': 'Gypsum-based construction materials contaminated with dangerous substances' },
        { 'id': 2022, 'subChapter': '08', 'chapter': '17', 'hazardous': 0, 'code': '02', 'description': 'Gypsum-based construction materials other than those mentioned in 17 08 01' },
        { 'id': 2023, 'subChapter': '09', 'chapter': '17', 'hazardous': 1, 'code': '01', 'description': 'Construction and demolition wastes containing mercury' },
        { 'id': 2024, 'subChapter': '09', 'chapter': '17', 'hazardous': 1, 'code': '02', 'description': 'Construction and demolition wastes containing PCBs' },
        { 'id': 2025, 'subChapter': '09', 'chapter': '17', 'hazardous': 1, 'code': '03', 'description': 'Other construction and demolition wastes (including mixed wastes) containing dangerous substances' },
        { 'id': 2026, 'subChapter': '09', 'chapter': '17', 'hazardous': 0, 'code': '04', 'description': 'Mixed construction and demolition wastes other than those mentioned in 17 09 01, 17 09 02 and 17 09 03' },
        { 'id': 2027, 'subChapter': '01', 'chapter': '18', 'hazardous': 0, 'code': '01', 'description': 'Sharps (except 18 01 03)' },
        { 'id': 2028, 'subChapter': '01', 'chapter': '18', 'hazardous': 0, 'code': '02', 'description': 'Body parts and organs including blood bags and blood preserves (except 18 01 03)' },
        { 'id': 2029, 'subChapter': '01', 'chapter': '18', 'hazardous': 1, 'code': '03', 'description': 'Wastes whose collection and disposal is subject to special requirements in order to prevent infection' },
        { 'id': 2030, 'subChapter': '01', 'chapter': '18', 'hazardous': 0, 'code': '04', 'description': 'Wastes whose collection and disposal is not subject to special requirements in order to prevent infection ' },
        { 'id': 2031, 'subChapter': '01', 'chapter': '18', 'hazardous': 1, 'code': '06', 'description': 'Chemicals consisting of or containing dangerous substances' },
        { 'id': 2032, 'subChapter': '01', 'chapter': '18', 'hazardous': 0, 'code': '07', 'description': 'Chemicals other than those mentioned in 18 01 06' },
        { 'id': 2033, 'subChapter': '01', 'chapter': '18', 'hazardous': 1, 'code': '08', 'description': 'Cytotoxic and cytostatic medicines' },
        { 'id': 2034, 'subChapter': '01', 'chapter': '18', 'hazardous': 0, 'code': '09', 'description': 'Medicines other than those mentioned in 18 01 08' },
        { 'id': 2035, 'subChapter': '01', 'chapter': '18', 'hazardous': 1, 'code': '10', 'description': 'Amalgam waste from dental care' },
        { 'id': 2036, 'subChapter': '02', 'chapter': '18', 'hazardous': 0, 'code': '01', 'description': 'Sharps (except 18 02 02)' },
        { 'id': 2037, 'subChapter': '02', 'chapter': '18', 'hazardous': 1, 'code': '02', 'description': 'Wastes whose collection and disposal is subject to special requirements in order to prevent infection' },
        { 'id': 2038, 'subChapter': '02', 'chapter': '18', 'hazardous': 0, 'code': '03', 'description': 'Wastes whose collection and disposal is not subject to special requirements in order to prevent infection' },
        { 'id': 2039, 'subChapter': '02', 'chapter': '18', 'hazardous': 1, 'code': '05', 'description': 'Chemicals consisting of or containing dangerous substances' },
        { 'id': 2040, 'subChapter': '02', 'chapter': '18', 'hazardous': 0, 'code': '06', 'description': 'Chemicals other than those mentioned in 18 02 05' },
        { 'id': 2041, 'subChapter': '02', 'chapter': '18', 'hazardous': 1, 'code': '07', 'description': 'Cytotoxic and cytostatic medicines' },
        { 'id': 2042, 'subChapter': '02', 'chapter': '18', 'hazardous': 0, 'code': '08', 'description': 'Medicines other than those mentioned in 18 02 07' },
        { 'id': 2043, 'subChapter': '01', 'chapter': '19', 'hazardous': 0, 'code': '02', 'description': 'Ferrous materials removed from bottom ash' },
        { 'id': 2044, 'subChapter': '01', 'chapter': '19', 'hazardous': 1, 'code': '05', 'description': 'Filter cake from gas treatment' },
        { 'id': 2045, 'subChapter': '01', 'chapter': '19', 'hazardous': 1, 'code': '06', 'description': 'Aqueous liquid wastes from gas treatment and other aqueous liquid wastes' },
        { 'id': 2046, 'subChapter': '01', 'chapter': '19', 'hazardous': 1, 'code': '07', 'description': 'Solid wastes from gas treatment' },
        { 'id': 2047, 'subChapter': '01', 'chapter': '19', 'hazardous': 1, 'code': '10', 'description': 'Spent activated carbon from flue-gas treatment' },
        { 'id': 2048, 'subChapter': '01', 'chapter': '19', 'hazardous': 1, 'code': '11', 'description': 'Bottom ash and slag containing dangerous substances' },
        { 'id': 2049, 'subChapter': '01', 'chapter': '19', 'hazardous': 0, 'code': '12', 'description': 'Bottom ash and slag other than those mentioned in 19 01 11' },
        { 'id': 2050, 'subChapter': '01', 'chapter': '19', 'hazardous': 1, 'code': '13', 'description': 'Fly ash containing dangerous substances' },
        { 'id': 2051, 'subChapter': '01', 'chapter': '19', 'hazardous': 0, 'code': '14', 'description': 'Fly ash other than those mentioned in 19 01 13' },
        { 'id': 2052, 'subChapter': '01', 'chapter': '19', 'hazardous': 1, 'code': '15', 'description': 'Boiler dust containing dangerous substances' },
        { 'id': 2053, 'subChapter': '01', 'chapter': '19', 'hazardous': 0, 'code': '16', 'description': 'Boiler dust other than those mentioned in 19 01 15' },
        { 'id': 2054, 'subChapter': '01', 'chapter': '19', 'hazardous': 1, 'code': '17', 'description': 'Pyrolysis wastes containing dangerous substances' },
        { 'id': 2055, 'subChapter': '01', 'chapter': '19', 'hazardous': 0, 'code': '18', 'description': 'Pyrolysis wastes other than those mentioned in 19 01 17' },
        { 'id': 2056, 'subChapter': '01', 'chapter': '19', 'hazardous': 0, 'code': '19', 'description': 'Sands from fluidised beds' },
        { 'id': 2057, 'subChapter': '01', 'chapter': '19', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 2058, 'subChapter': '02', 'chapter': '19', 'hazardous': 0, 'code': '03', 'description': 'Premixed wastes composed only of non-hazardous wastes' },
        { 'id': 2059, 'subChapter': '02', 'chapter': '19', 'hazardous': 1, 'code': '04', 'description': 'Premixed wastes composed of at least one hazardous waste' },
        { 'id': 2060, 'subChapter': '02', 'chapter': '19', 'hazardous': 1, 'code': '05', 'description': 'Sludges from physico/chemical treatment containing dangerous substances' },
        { 'id': 2061, 'subChapter': '02', 'chapter': '19', 'hazardous': 0, 'code': '06', 'description': 'Sludges from physico/chemical treatment other than those mentioned in 19 02 05' },
        { 'id': 2062, 'subChapter': '02', 'chapter': '19', 'hazardous': 1, 'code': '07', 'description': 'Oil and concentrates from separation' },
        { 'id': 2063, 'subChapter': '02', 'chapter': '19', 'hazardous': 1, 'code': '08', 'description': 'Liquid combustible wastes containing dangerous substances' },
        { 'id': 2064, 'subChapter': '02', 'chapter': '19', 'hazardous': 1, 'code': '09', 'description': 'Solid combustible wastes containing dangerous substances' },
        { 'id': 2065, 'subChapter': '02', 'chapter': '19', 'hazardous': 0, 'code': '10', 'description': 'Combustible wastes other than those mentioned in 19 02 08 and 19 02 09' },
        { 'id': 2066, 'subChapter': '02', 'chapter': '19', 'hazardous': 1, 'code': '11', 'description': 'Other wastes containing dangerous substances' },
        { 'id': 2067, 'subChapter': '02', 'chapter': '19', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 2068, 'subChapter': '03', 'chapter': '19', 'hazardous': 1, 'code': '04', 'description': 'Wastes marked as hazardous, partly   stabilised' },
        { 'id': 2069, 'subChapter': '03', 'chapter': '19', 'hazardous': 0, 'code': '05', 'description': 'Stabilised wastes other than those mentioned in 19 03 04' },
        { 'id': 2070, 'subChapter': '03', 'chapter': '19', 'hazardous': 1, 'code': '06', 'description': 'Wastes marked as hazardous, solidified' },
        { 'id': 2071, 'subChapter': '03', 'chapter': '19', 'hazardous': 0, 'code': '07', 'description': 'Solidified wastes other than those mentioned in 19 03 06' },
        { 'id': 2072, 'subChapter': '04', 'chapter': '19', 'hazardous': 0, 'code': '01', 'description': 'Vitrified waste' },
        { 'id': 2073, 'subChapter': '04', 'chapter': '19', 'hazardous': 1, 'code': '02', 'description': 'Fly ash and other flue-gas treatment wastes' },
        { 'id': 2074, 'subChapter': '04', 'chapter': '19', 'hazardous': 1, 'code': '03', 'description': 'Non-vitrified solid phase' },
        { 'id': 2075, 'subChapter': '04', 'chapter': '19', 'hazardous': 0, 'code': '04', 'description': 'Aqueous liquid wastes from vitrified waste tempering' },
        { 'id': 2076, 'subChapter': '05', 'chapter': '19', 'hazardous': 0, 'code': '01', 'description': 'Non-composted fraction of municipal and similar wastes' },
        { 'id': 2077, 'subChapter': '05', 'chapter': '19', 'hazardous': 0, 'code': '02', 'description': 'Non-composted fraction of animal and vegetable waste' },
        { 'id': 2078, 'subChapter': '05', 'chapter': '19', 'hazardous': 0, 'code': '03', 'description': 'Off-specification compost' },
        { 'id': 2079, 'subChapter': '05', 'chapter': '19', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 2080, 'subChapter': '06', 'chapter': '19', 'hazardous': 0, 'code': '03', 'description': 'Liquor from anaerobic treatment of municipal waste' },
        { 'id': 2081, 'subChapter': '06', 'chapter': '19', 'hazardous': 0, 'code': '04', 'description': 'Digestate from anaerobic treatment of municipal waste' },
        { 'id': 2082, 'subChapter': '06', 'chapter': '19', 'hazardous': 0, 'code': '05', 'description': 'Liquor from anaerobic treatment of animal and vegetable waste' },
        { 'id': 2083, 'subChapter': '06', 'chapter': '19', 'hazardous': 0, 'code': '06', 'description': 'Digestate from anaerobic treatment of animal and vegetable waste' },
        { 'id': 2084, 'subChapter': '06', 'chapter': '19', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 2085, 'subChapter': '07', 'chapter': '19', 'hazardous': 1, 'code': '02', 'description': 'Landfill leachate containing dangerous substances' },
        { 'id': 2086, 'subChapter': '07', 'chapter': '19', 'hazardous': 0, 'code': '03', 'description': 'Landfill leachate other than those mentioned in 19 07 02' },
        { 'id': 2087, 'subChapter': '08', 'chapter': '19', 'hazardous': 0, 'code': '01', 'description': 'Screenings' },
        { 'id': 2088, 'subChapter': '08', 'chapter': '19', 'hazardous': 0, 'code': '02', 'description': 'Waste from desanding' },
        { 'id': 2089, 'subChapter': '08', 'chapter': '19', 'hazardous': 0, 'code': '05', 'description': 'Sludges from treatment of urban waste water' },
        { 'id': 2090, 'subChapter': '08', 'chapter': '19', 'hazardous': 1, 'code': '06', 'description': 'Saturated or spent ion exchange resins' },
        { 'id': 2091, 'subChapter': '08', 'chapter': '19', 'hazardous': 1, 'code': '07', 'description': 'Solutions and sludges from regeneration of ion exchangers' },
        { 'id': 2092, 'subChapter': '08', 'chapter': '19', 'hazardous': 1, 'code': '08', 'description': 'Membrane system waste containing heavy metals' },
        { 'id': 2093, 'subChapter': '08', 'chapter': '19', 'hazardous': 0, 'code': '09', 'description': 'Grease and oil mixture from oil/water separation containing edible oil and fats' },
        { 'id': 2094, 'subChapter': '08', 'chapter': '19', 'hazardous': 1, 'code': '10', 'description': 'Grease and oil mixture from oil/water separation other than those mentioned in 19 08 09' },
        { 'id': 2095, 'subChapter': '08', 'chapter': '19', 'hazardous': 1, 'code': '11', 'description': 'Sludges containing dangerous substances from biological treatment of industrial waste water' },
        { 'id': 2096, 'subChapter': '08', 'chapter': '19', 'hazardous': 0, 'code': '12', 'description': 'Sludges from biological treatment of industrial waste water other than those mentioned in 19 08 11' },
        { 'id': 2097, 'subChapter': '08', 'chapter': '19', 'hazardous': 1, 'code': '13', 'description': 'Sludges containing dangerous substances from other treatment of industrial waste water' },
        { 'id': 2098, 'subChapter': '08', 'chapter': '19', 'hazardous': 0, 'code': '14', 'description': 'Sludges from other treatment of industrial waste water other than those mentioned in 19 08 13' },
        { 'id': 2099, 'subChapter': '08', 'chapter': '19', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 2100, 'subChapter': '09', 'chapter': '19', 'hazardous': 0, 'code': '01', 'description': 'Solid waste from primary filtration and screenings' },
        { 'id': 2101, 'subChapter': '09', 'chapter': '19', 'hazardous': 0, 'code': '02', 'description': 'Sludges from water clarification' },
        { 'id': 2102, 'subChapter': '09', 'chapter': '19', 'hazardous': 0, 'code': '03', 'description': 'Sludges from decarbonation' },
        { 'id': 2103, 'subChapter': '09', 'chapter': '19', 'hazardous': 0, 'code': '04', 'description': 'Spent activated carbon' },
        { 'id': 2104, 'subChapter': '09', 'chapter': '19', 'hazardous': 0, 'code': '05', 'description': 'Saturated or spent ion exchange resins' },
        { 'id': 2105, 'subChapter': '09', 'chapter': '19', 'hazardous': 0, 'code': '06', 'description': 'Solutions and sludges from regeneration of ion exchangers' },
        { 'id': 2106, 'subChapter': '09', 'chapter': '19', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 2107, 'subChapter': '10', 'chapter': '19', 'hazardous': 0, 'code': '01', 'description': 'Iron and steel waste' },
        { 'id': 2108, 'subChapter': '10', 'chapter': '19', 'hazardous': 0, 'code': '02', 'description': 'Non-ferrous waste' },
        { 'id': 2109, 'subChapter': '10', 'chapter': '19', 'hazardous': 1, 'code': '03', 'description': 'Fluff-light fraction and dust containing dangerous substances' },
        { 'id': 2110, 'subChapter': '10', 'chapter': '19', 'hazardous': 0, 'code': '04', 'description': 'Fluff-light fraction and dust other than those mentioned in 19 10 03' },
        { 'id': 2111, 'subChapter': '10', 'chapter': '19', 'hazardous': 1, 'code': '05', 'description': 'Other fractions containing dangerous substances' },
        { 'id': 2112, 'subChapter': '10', 'chapter': '19', 'hazardous': 0, 'code': '06', 'description': 'Other fractions other than those mentioned in 19 10 05' },
        { 'id': 2113, 'subChapter': '11', 'chapter': '19', 'hazardous': 1, 'code': '01', 'description': 'Spent filter clays' },
        { 'id': 2114, 'subChapter': '11', 'chapter': '19', 'hazardous': 1, 'code': '02', 'description': 'Acid tars' },
        { 'id': 2115, 'subChapter': '11', 'chapter': '19', 'hazardous': 1, 'code': '03', 'description': 'Aqueous liquid wastes' },
        { 'id': 2116, 'subChapter': '11', 'chapter': '19', 'hazardous': 1, 'code': '04', 'description': 'Wastes from cleaning of fuel with bases' },
        { 'id': 2117, 'subChapter': '11', 'chapter': '19', 'hazardous': 1, 'code': '05', 'description': 'Sludges from on-site effluent treatment containing dangerous substances' },
        { 'id': 2118, 'subChapter': '11', 'chapter': '19', 'hazardous': 0, 'code': '06', 'description': 'Sludges from on-site effluent treatment other than those mentioned in 19 11 05' },
        { 'id': 2119, 'subChapter': '11', 'chapter': '19', 'hazardous': 1, 'code': '07', 'description': 'Wastes from flue-gas cleaning' },
        { 'id': 2120, 'subChapter': '11', 'chapter': '19', 'hazardous': 0, 'code': '99', 'description': 'Wastes not otherwise specified' },
        { 'id': 2121, 'subChapter': '12', 'chapter': '19', 'hazardous': 0, 'code': '01', 'description': 'Paper and cardboard' },
        { 'id': 2122, 'subChapter': '12', 'chapter': '19', 'hazardous': 0, 'code': '02', 'description': 'Ferrous metal' },
        { 'id': 2123, 'subChapter': '12', 'chapter': '19', 'hazardous': 0, 'code': '03', 'description': 'Non-ferrous metal' },
        { 'id': 2124, 'subChapter': '12', 'chapter': '19', 'hazardous': 0, 'code': '04', 'description': 'Plastic and rubber' },
        { 'id': 2125, 'subChapter': '12', 'chapter': '19', 'hazardous': 0, 'code': '05', 'description': 'Glass' },
        { 'id': 2126, 'subChapter': '12', 'chapter': '19', 'hazardous': 1, 'code': '06', 'description': 'Wood containing dangerous substances' },
        { 'id': 2127, 'subChapter': '12', 'chapter': '19', 'hazardous': 0, 'code': '07', 'description': 'Wood other than that mentioned in 19 12 06' },
        { 'id': 2128, 'subChapter': '12', 'chapter': '19', 'hazardous': 0, 'code': '08', 'description': 'Textiles' },
        { 'id': 2129, 'subChapter': '12', 'chapter': '19', 'hazardous': 0, 'code': '09', 'description': 'Minerals (for example sand, stones)' },
        { 'id': 2130, 'subChapter': '12', 'chapter': '19', 'hazardous': 0, 'code': '10', 'description': 'Combustible waste (refuse derived fuel)' },
        { 'id': 2131, 'subChapter': '12', 'chapter': '19', 'hazardous': 1, 'code': '11', 'description': 'Other wastes (including mixtures of materials) from mechanical treatment of waste containing dangerous substances' },
        { 'id': 2132, 'subChapter': '12', 'chapter': '19', 'hazardous': 0, 'code': '12', 'description': 'Other wastes (incl. mixtures of materials) from mechanical treatment of wastes other than those mentioned in 19 12 11' },
        { 'id': 2133, 'subChapter': '13', 'chapter': '19', 'hazardous': 1, 'code': '01', 'description': 'Solid wastes from soil remediation containing dangerous substances' },
        { 'id': 2134, 'subChapter': '13', 'chapter': '19', 'hazardous': 0, 'code': '02', 'description': 'Solid wastes from soil remediation other than those mentioned in 19 13 01' },
        { 'id': 2135, 'subChapter': '13', 'chapter': '19', 'hazardous': 1, 'code': '03', 'description': 'Sludges from soil remediation containing dangerous substances' },
        { 'id': 2136, 'subChapter': '13', 'chapter': '19', 'hazardous': 0, 'code': '04', 'description': 'Sludges from soil remediation other than those mentioned in 19 13 03' },
        { 'id': 2137, 'subChapter': '13', 'chapter': '19', 'hazardous': 1, 'code': '05', 'description': 'Sludges from groundwater remediation containing dangerous substances' },
        { 'id': 2138, 'subChapter': '13', 'chapter': '19', 'hazardous': 0, 'code': '06', 'description': 'Sludges from groundwater remediation other than those mentioned in 19 13 05' },
        { 'id': 2139, 'subChapter': '13', 'chapter': '19', 'hazardous': 1, 'code': '07', 'description': 'Aqueous liquid wastes and aqueous concentrates from groundwater remediation containing dangerous substances' },
        { 'id': 2140, 'subChapter': '13', 'chapter': '19', 'hazardous': 0, 'code': '08', 'description': 'Aqueous liquid wastes and aqueous concentrates from groundwater remediation other than those mentioned in 19 13 07' },
        { 'id': 2141, 'subChapter': '01', 'chapter': '20', 'hazardous': 0, 'code': '01', 'description': 'Paper and cardboard' },
        { 'id': 2142, 'subChapter': '01', 'chapter': '20', 'hazardous': 0, 'code': '02', 'description': 'Glass' },
        { 'id': 2143, 'subChapter': '01', 'chapter': '20', 'hazardous': 0, 'code': '08', 'description': 'Biodegradable kitchen and canteen waste' },
        { 'id': 2144, 'subChapter': '01', 'chapter': '20', 'hazardous': 0, 'code': '10', 'description': 'Clothes' },
        { 'id': 2145, 'subChapter': '01', 'chapter': '20', 'hazardous': 0, 'code': '11', 'description': 'Textiles' },
        { 'id': 2146, 'subChapter': '01', 'chapter': '20', 'hazardous': 1, 'code': '13', 'description': 'Solvents' },
        { 'id': 2147, 'subChapter': '01', 'chapter': '20', 'hazardous': 1, 'code': '14', 'description': 'Acids' },
        { 'id': 2148, 'subChapter': '01', 'chapter': '20', 'hazardous': 1, 'code': '15', 'description': 'Alkalines' },
        { 'id': 2149, 'subChapter': '01', 'chapter': '20', 'hazardous': 1, 'code': '17', 'description': 'Photochemicals' },
        { 'id': 2150, 'subChapter': '01', 'chapter': '20', 'hazardous': 1, 'code': '19', 'description': 'Pesticides' },
        { 'id': 2151, 'subChapter': '01', 'chapter': '20', 'hazardous': 1, 'code': '21', 'description': 'Fluorescent tubes and other mercury-containing waste' },
        { 'id': 2152, 'subChapter': '01', 'chapter': '20', 'hazardous': 1, 'code': '23', 'description': 'Discarded equipment containing chlorofluorocarbons' },
        { 'id': 2153, 'subChapter': '01', 'chapter': '20', 'hazardous': 0, 'code': '25', 'description': 'Edible oil and fat' },
        { 'id': 2154, 'subChapter': '01', 'chapter': '20', 'hazardous': 1, 'code': '26', 'description': 'Oil and fat other than those mentioned in 20 01 25' },
        { 'id': 2155, 'subChapter': '01', 'chapter': '20', 'hazardous': 1, 'code': '27', 'description': 'Paint, inks, adhesives and resins containing dangerous substances' },
        { 'id': 2156, 'subChapter': '01', 'chapter': '20', 'hazardous': 0, 'code': '28', 'description': 'Paint, inks, adhesives and resins other than those mentioned in 20 01 27' },
        { 'id': 2157, 'subChapter': '01', 'chapter': '20', 'hazardous': 1, 'code': '29', 'description': 'Detergents containing dangerous substances' },
        { 'id': 2158, 'subChapter': '01', 'chapter': '20', 'hazardous': 0, 'code': '30', 'description': 'Detergents other than those mentioned in 20 01 29' },
        { 'id': 2159, 'subChapter': '01', 'chapter': '20', 'hazardous': 1, 'code': '31', 'description': 'Cytotoxic and cytostatic medicines' },
        { 'id': 2160, 'subChapter': '01', 'chapter': '20', 'hazardous': 0, 'code': '32', 'description': 'Medicines other than those mentioned in 20 01 31' },
        { 'id': 2161, 'subChapter': '01', 'chapter': '20', 'hazardous': 1, 'code': '33', 'description': 'Batteries and accumulators included in 16 06 01, 16 06 02 or 16 06 03 (inc where mixed with other batteries)' },
        { 'id': 2162, 'subChapter': '01', 'chapter': '20', 'hazardous': 0, 'code': '34', 'description': 'Batteries and accumulators other than those mentioned in 20 01 33' },
        { 'id': 2163, 'subChapter': '01', 'chapter': '20', 'hazardous': 1, 'code': '35', 'description': 'Discarded electrical equipment other than those mentioned in 20 01 21 and 20 01 23 containing hazardous components' },
        { 'id': 2164, 'subChapter': '01', 'chapter': '20', 'hazardous': 0, 'code': '36', 'description': 'Discarded electrical and electronic equipment other than those mentioned in 20 01 21, 20 01 23 and 20 01 35' },
        { 'id': 2165, 'subChapter': '01', 'chapter': '20', 'hazardous': 1, 'code': '37', 'description': 'Wood containing dangerous substances' },
        { 'id': 2166, 'subChapter': '01', 'chapter': '20', 'hazardous': 0, 'code': '38', 'description': 'Wood other than that mentioned in 20 01 37' },
        { 'id': 2167, 'subChapter': '01', 'chapter': '20', 'hazardous': 0, 'code': '39', 'description': 'Plastics' },
        { 'id': 2168, 'subChapter': '01', 'chapter': '20', 'hazardous': 0, 'code': '40', 'description': 'Metals' },
        { 'id': 2169, 'subChapter': '01', 'chapter': '20', 'hazardous': 0, 'code': '41', 'description': 'Wastes from chimney sweeping' },
        { 'id': 2170, 'subChapter': '01', 'chapter': '20', 'hazardous': 0, 'code': '99', 'description': 'Other fractions not otherwise specified' },
        { 'id': 2171, 'subChapter': '02', 'chapter': '20', 'hazardous': 0, 'code': '01', 'description': 'Biodegradable waste' },
        { 'id': 2172, 'subChapter': '02', 'chapter': '20', 'hazardous': 0, 'code': '02', 'description': 'Soil and stones' },
        { 'id': 2173, 'subChapter': '02', 'chapter': '20', 'hazardous': 0, 'code': '03', 'description': 'Other non-biodegradable wastes' },
        { 'id': 2174, 'subChapter': '03', 'chapter': '20', 'hazardous': 0, 'code': '01', 'description': 'Mixed municipal waste' },
        { 'id': 2175, 'subChapter': '03', 'chapter': '20', 'hazardous': 0, 'code': '02', 'description': 'Waste from markets' },
        { 'id': 2176, 'subChapter': '03', 'chapter': '20', 'hazardous': 0, 'code': '03', 'description': 'Street-cleaning residues' },
        { 'id': 2177, 'subChapter': '03', 'chapter': '20', 'hazardous': 0, 'code': '04', 'description': 'Septic tank sludge' },
        { 'id': 2178, 'subChapter': '03', 'chapter': '20', 'hazardous': 0, 'code': '06', 'description': 'Waste from sewage cleaning' },
        { 'id': 2179, 'subChapter': '03', 'chapter': '20', 'hazardous': 0, 'code': '07', 'description': 'Bulky waste' },
        { 'id': 2180, 'subChapter': '03', 'chapter': '20', 'hazardous': 0, 'code': '99', 'description': 'Municipal wastes not otherwise specified' }
    ],

    recoveryCodes: [
        { id: 1, code: 'R1', description: 'Use principally as a fuel or other means to generate energy' },
        { id: 2, code: 'R2', description: 'Solvent reclamation/regeneration' },
        { id: 3, code: 'R3', description: 'Recycling/reclamation of organic substances which are not used as solvents (including composting and other biological transformation processes)' },
        { id: 4, code: 'R4', description: 'Recycling/reclamation of metals and metal compounds' },
        { id: 5, code: 'R5', description: 'Recycling/reclamation of other inorganic materials' },
        { id: 6, code: 'R6', description: 'Regeneration of acids or bases' },
        { id: 7, code: 'R7', description: 'Recovery of components used for pollution abatement' },
        { id: 8, code: 'R8', description: 'Recovery of components from catalysts' },
        { id: 9, code: 'R9', description: 'Oil re-refining or other reuses of oil' },
        { id: 10, code: 'R10', description: 'Land treatment resulting in benefit to agriculture or ecological improvement' },
        { id: 11, code: 'R11', description: 'Use of wastes obtained from any of the operations numbered R1 to R10' },
        { id: 12, code: 'R12', description: 'Exchange of wastes for submission to any of the operations numbered R1 to R11' },
        { id: 13, code: 'R13', description: 'Storage of wastes pending any of the operations numbered R1 to R12 (excluding temporary storage pending collection on the site where it is produced)' }
    ],

    disposalCodes: [
        { id: 1, code: 'D1', description: 'Deposit into or onto land  e.g. landfill' },
        { id: 2, code: 'D2', description: 'Land treatment  e.g. biodegradation of liquid or sludgy discards in soils' },
        { id: 3, code: 'D3', description: 'Deep injection  e.g. injection of pumpable discards into wells  salt domes or naturally occurring repositories' },
        { id: 4, code: 'D4', description: 'Surface impoundment  e.g. placement of liquid or sludgy discards into pits  ponds or lagoons' },
        { id: 5, code: 'D5', description: 'Specially engineered landfill  e.g. placement into lined discrete cells which are capped and isolated from one another and the environment' },
        { id: 6, code: 'D6', description: 'Release into a water body except seas/oceans' },
        { id: 7, code: 'D7', description: 'Release into seas/oceans including sea-bed insertion' },
        { id: 8, code: 'D8', description: 'Biological treatment resulting in final compounds or mixtures which are discarded by any of the operations numbered D1 to D12' },
        { id: 9, code: 'D9', description: 'Physico-chemical treatment resulting in final compounds or mixtures which are discarded by any of the operations numbered D1 to D12  e.g. evaporation drying calcination ' },
        { id: 10, code: 'D10', description: 'Incineration on land' },
        { id: 11, code: 'D11', description: 'Incineration at sea' },
        { id: 12, code: 'D12', description: 'Permanent storage  e.g. emplacement of containers in a mine' },
        { id: 13, code: 'D13', description: 'Blending or mixing prior to submission to any of the operations numbered D1 to D12' },
        { id: 14, code: 'D14', description: 'Repackaging prior to submission to any of the operations numbered D1 to D13' },
        { id: 15, code: 'D15', description: 'Storage pending any of the operations numbered D1 to D14 (excluding temporary storage pending collection on the site where it is produced)' }
    ],

    /*
     * From here on in the data is set-sets
     */
    noseActivityClasses: [
        {
            'id': 4,
            'name': 'ENERGY INDUSTRIES'
        },
        {
            'id': 5,
            'name': 'MINERAL INDUSTRIES'
        },
        {
            'id': 2,
            'name': 'OTHER ACTIVITIES'
        },
        {
            'id': 3,
            'name': 'PRODUCTION AND PROCESSING OF METALS'
        },
        {
            'id': 1,
            'name': 'THE CHEMICAL INDUSTRY'
        },
        {
            'id': 6,
            'name': 'WASTE MANAGEMENT'
        }
    ],

    noseActivities: [
        {
            'id': 2,
            'name': 'Activities involving asbestos'
        },
        {
            'id': 12,
            'name': 'Applying coatings containing tributyltin or triphenyltin compounds in certain boatyards'
        },
        {
            'id': 15,
            'name': 'Burning waste fuels'
        },
        {
            'id': 11,
            'name': 'Carbon activities'
        },
        {
            'id': 19,
            'name': 'Coal or lignite gasification and liquefaction plants'
        },
        {
            'id': 5,
            'name': 'Combustion activities >50MW'
        },
        {
            'id': 9,
            'name': 'Disposal of waste by incineration'
        },
        {
            'id': 8,
            'name': 'Disposal of waste by landfill'
        },
        {
            'id': 20,
            'name': 'Disposal of waste other than by incineration or landfill and production of fuel from waste'
        },
        {
            'id': 3,
            'name': 'Disposal or recycling of animal carcasses and animal waste'
        },
        {
            'id': 18,
            'name': 'Ferrous and non-ferrous metal production'
        },
        {
            'id': 14,
            'name': 'Inorganic chemicals, chemical fertiliser production, plant health products & biocides and explosives production'
        },
        {
            'id': 4,
            'name': 'Intensive farming'
        },
        {
            'id': 21,
            'name': 'Mineral oil and gas refineries'
        },
        {
            'id': 23,
            'name': 'Operating coke ovens'
        },
        {
            'id': 17,
            'name': 'Organic chemicals'
        },
        {
            'id': 6,
            'name': 'Other processing of animal or vegetable material'
        },
        {
            'id': 1,
            'name': 'Paper, pulp and board manufacturing'
        },
        {
            'id': 10,
            'name': 'Pharmaceutical production and manufacturing activities involving carbon disulphide or ammonia'
        },
        {
            'id': 24,
            'name': 'Pre-treatment or dyeing fibres or textiles'
        },
        {
            'id': 22,
            'name': 'Production of cement and lime, manufacturing glass & glass fibre, other mineral fibres and ceramic production'
        },
        {
            'id': 28,
            'name': 'Recovery of waste'
        },
        {
            'id': 26,
            'name': 'Slaughterhouses and treating and processing materials intended for food production including milk'
        },
        {
            'id': 16,
            'name': 'Surface treating metals and plastic materials'
        },
        {
            'id': 27,
            'name': 'Tanning of hides and skins'
        },
        {
            'id': 25,
            'name': 'Tar and bitumen activities'
        },
        {
            'id': 13,
            'name': 'Timber activities'
        },
        {
            'id': 7,
            'name': 'Treating textiles'
        }
    ],

    noseProcesses: [
        {
            'id': 26,
            'name': '101.01 Combustion plants > 300 MW'
        },
        {
            'id': 31,
            'name': '101.02 Combustion plants > 50 and < 300 MW'
        },
        {
            'id': 17,
            'name': '101.03 Combustion plants < 50MW'
        },
        {
            'id': 8,
            'name': '101.04 Gas turbines'
        },
        {
            'id': 15,
            'name': '101.05 Stationary engines'
        },
        {
            'id': 27,
            'name': '104.08 Coke oven furnaces'
        },
        {
            'id': 14,
            'name': '104.08 Petroleum product processing'
        },
        {
            'id': 10,
            'name': '104.08 Solid fuel transformation'
        },
        {
            'id': 4,
            'name': '104.11 Manufacture of plaster, asphalt, concrete, cement, glass, fibres, bricks, tiles or ceramic products'
        },
        {
            'id': 20,
            'name': '104.12 Primary and secondary processes in the manufacture of metal and fabricated metal products or sinter plants (involving fuel combustion).'
        },
        {
            'id': 33,
            'name': '105.01 Surface treatment of metals and plastics'
        },
        {
            'id': 3,
            'name': '105.03 Manufacture of food products and beverages'
        },
        {
            'id': 19,
            'name': '105.04 Manufacture of textiles and textile products'
        },
        {
            'id': 11,
            'name': '105.05 Processes in the manufacture of leather and leather products'
        },
        {
            'id': 1,
            'name': '105.06 Processes in the manufacture of wood and wood products'
        },
        {
            'id': 5,
            'name': '105.07 Manufacture of pulp, paper and paper products'
        },
        {
            'id': 24,
            'name': '105.08 Petroleum product processing'
        },
        {
            'id': 12,
            'name': '105.09 Manufacture of carbon or graphite'
        },
        {
            'id': 7,
            'name': '105.09 Manufacture of inorganic chemicals, NPK fertilisers, pesticides or explosives'
        },
        {
            'id': 16,
            'name': '105.09 Manufacture of organic chemicals'
        },
        {
            'id': 9,
            'name': '105.11 Manufacture of asbestos and asbestos-based products'
        },
        {
            'id': 2,
            'name': '105.12 Processes in the manufacture of metals and fabricated metal products or sinter plants (not involving fuel combustion)'
        },
        {
            'id': 34,
            'name': '105.14 Recycling of animal carcasses/waste'
        },
        {
            'id': 23,
            'name': '105.14 Regeneration/recovery of waste materials'
        },
        {
            'id': 30,
            'name': '107.01 Paint application'
        },
        {
            'id': 13,
            'name': '107.03 Manufacture of pharmaceutical and other solvent-based products'
        },
        {
            'id': 28,
            'name': '107.03 Manufacture or processing of solvent-based organic products'
        },
        {
            'id': 22,
            'name': '107.03 Textile finishing'
        },
        {
            'id': 29,
            'name': '109.03 Incineration of animal carcasses and animal waste'
        },
        {
            'id': 6,
            'name': '109.03 Waste incineration'
        },
        {
            'id': 25,
            'name': '109.06 Landfilling'
        },
        {
            'id': 21,
            'name': '109.07 Other waste treatment, transfer etc'
        },
        {
            'id': 32,
            'name': '110.04 Enteric fermentation'
        },
        {
            'id': 18,
            'name': '110.05 Manure management'
        }
    ],

    noseHierarchy: [
        {
            'activityClassId': 1,
            'activityId': 10,
            'processId': 32
        },
        {
            'activityClassId': 1,
            'activityId': 14,
            'processId': 24
        },
        {
            'activityClassId': 1,
            'activityId': 17,
            'processId': 12
        },
        {
            'activityClassId': 1,
            'activityId': 17,
            'processId': 33
        },
        {
            'activityClassId': 2,
            'activityId': 1,
            'processId': 22
        },
        {
            'activityClassId': 2,
            'activityId': 3,
            'processId': 7
        },
        {
            'activityClassId': 2,
            'activityId': 3,
            'processId': 9
        },
        {
            'activityClassId': 2,
            'activityId': 3,
            'processId': 16
        },
        {
            'activityClassId': 2,
            'activityId': 11,
            'processId': 29
        },
        {
            'activityClassId': 2,
            'activityId': 4,
            'processId': 4
        },
        {
            'activityClassId': 2,
            'activityId': 4,
            'processId': 2
        },
        {
            'activityClassId': 2,
            'activityId': 25,
            'processId': 30
        },
        {
            'activityClassId': 2,
            'activityId': 12,
            'processId': 14
        },
        {
            'activityClassId': 2,
            'activityId': 26,
            'processId': 23
        },
        {
            'activityClassId': 2,
            'activityId': 13,
            'processId': 17
        },
        {
            'activityClassId': 2,
            'activityId': 27,
            'processId': 28
        },
        {
            'activityClassId': 2,
            'activityId': 6,
            'processId': 23
        },
        {
            'activityClassId': 2,
            'activityId': 6,
            'processId': 16
        },
        {
            'activityClassId': 2,
            'activityId': 7,
            'processId': 6
        },
        {
            'activityClassId': 2,
            'activityId': 24,
            'processId': 1
        },
        {
            'activityClassId': 3,
            'activityId': 16,
            'processId': 15
        },
        {
            'activityClassId': 3,
            'activityId': 18,
            'processId': 19
        },
        {
            'activityClassId': 3,
            'activityId': 18,
            'processId': 5
        },
        {
            'activityClassId': 4,
            'activityId': 19,
            'processId': 27
        },
        {
            'activityClassId': 4,
            'activityId': 21,
            'processId': 10
        },
        {
            'activityClassId': 4,
            'activityId': 5,
            'processId': 26
        },
        {
            'activityClassId': 4,
            'activityId': 5,
            'processId': 11
        },
        {
            'activityClassId': 4,
            'activityId': 5,
            'processId': 18
        },
        {
            'activityClassId': 4,
            'activityId': 5,
            'processId': 31
        },
        {
            'activityClassId': 4,
            'activityId': 15,
            'processId': 34
        },
        {
            'activityClassId': 4,
            'activityId': 23,
            'processId': 3
        },
        {
            'activityClassId': 5,
            'activityId': 2,
            'processId': 25
        },
        {
            'activityClassId': 5,
            'activityId': 22,
            'processId': 20
        },
        {
            'activityClassId': 6,
            'activityId': 20,
            'processId': 13
        },
        {
            'activityClassId': 6,
            'activityId': 8,
            'processId': 7
        },
        {
            'activityClassId': 6,
            'activityId': 28,
            'processId': 8
        },
        {
            'activityClassId': 6,
            'activityId': 9,
            'processId': 21
        }
    ],

    naceSections: [
        {
            'id': 1,
            'code': 'A',
            'description': 'AGRICULTURE, FORESTRY AND FISHING',
            'details': 'This section includes the exploitation of vegetal and animal natural resources, comprising the activities of growing of crops, raising and breeding of animals, harvesting of timber and other plants, animals or animal products from a farm or their natural habitats.'
        },
        {
            'id': 2,
            'code': 'B',
            'description': 'MINING AND QUARRYING',
            'details': 'Mining and quarrying include the extraction of minerals occurring naturally as solids (coal and ores), liquids (petroleum) or gases (natural gas). Extraction can be achieved by different methods such as underground or surface mining, well operation, seabed mining etc.\n\nThis section includes supplementary activities aimed at preparing the crude materials for marketing, for example, crushing, grinding, cleaning, drying, sorting, concentrating ores, liquefaction of natural gas and agglomeration of solid fuels. These operations are often accomplished by the units that extracted the resource and/or others located nearby.\n\nMining activities are classified into divisions, groups and classes on the basis of the principal mineral produced. Divisions 05, 06 are concerned with mining and quarrying of fossil fuels (coal, lignite, petroleum, gas); divisions 07, 08 concern metal ores, various minerals and quarry products. \n\nSome of the technical operations of this section, particularly related to the extraction of hydrocarbons, may also be carried out for third parties by specialised units as an industrial service which is reflected in division 09.'
        },
        {
            'id': 3,
            'code': 'C',
            'description': 'MANUFACTURING',
            'details': 'This section includes the physical or chemical transformation of materials, substances, or components into new products, although this cannot be used as the single universal criterion for defining manufacturing (see remark on processing of waste below). The materials, substances, or components transformed are raw materials that are products of agriculture, forestry, fishing, mining or quarrying as well as products of other manufacturing activities. Substantial alteration, renovation or reconstruction of goods is generally considered to be manufacturing.\n\nThe output of a manufacturing process may be finished in the sense that it is ready for utilisation or consumption, or it may be semi-finished in the sense that it is to become an input for further manufacturing. For example, the output of alumina refining is the input used in the primary production of aluminium; primary aluminium is the input to aluminium wire drawing; and aluminium wire is the input for the manufacture of fabricated wire products.\n\nManufacture of specialised components and parts of, and accessories and attachments to, machinery and equipment is, as a general rule, classified in the same class as the manufacture of the machinery and equipment for which the parts and accessories are intended. Manufacture of unspecialised components and parts of machinery and equipment, e.g. engines, pistons, electric motors, electrical assemblies, valves, gears, roller bearings, is classified in the appropriate class of manufacturing, without regard to the machinery and equipment in which these items may be included. However, making specialised components and accessories by moulding or extruding plastics materials is included in group 22.2.\n\nAssembly of the component parts of manufactured products is considered manufacturing. This includes the assembly of manufactured products from either self-produced or purchased components. \n\nThe recovery of waste, i.e. the processing of waste into secondary raw materials is classified in group 38.3 (Materials recovery). While this may involve physical or chemical transformations, this is not considered to be a part of manufacturing. The primary purpose of these activities is considered to be the treatment or processing of waste and they are therefore classified in Section E (Water supply; sewerage, waste management and remediation activities). However, the manufacture of new final products (as opposed to secondary raw materials) is classified in manufacturing, even if these processes use waste as an input. For example, the production of silver from film waste is considered to be a manufacturing process.\n\nSpecialised maintenance and repair of industrial, commercial and similar machinery and equipment is, in general, classified in division 33 (Repair, maintenance and installation of machinery and equipment). However, the repair of computers and personal and household goods is classified in division 95 (Repair of computers and personal and household goods), while the repair of motor vehicles is classified in division 45 (Wholesale and retail trade and repair of motor vehicles and motorcycles). \n\nThe installation of machinery and equipment, when carried out as a specialised activity, is classified in 33.20. \n\nRemark: The boundaries of manufacturing and the other sectors of the classification system can be somewhat blurry. As a general rule, the activities in the manufacturing section involve the transformation of materials into new products. Their output is a new product. However, the definition of what constitutes a new product can be somewhat subjective. As clarification, the following activities are considered manufacturing in NACE:\n- fresh fish processing (oyster shucking, fish filleting), not done on a fishing boat (see 10.20)\n- milk pasteurising and bottling (see 10.51)\n- leather converting (see 15.11)\n- wood preserving (see 16.10)\n- printing and related activities (see 18.1)\n- tyre retreading (see 22.11)\n- ready-mixed concrete production (see 23.63)\n- electroplating, plating, and metal heat treating (see 25.61)\n- rebuilding or remanufacture of machinery (e.g. automobile engines, see 29.10)\n\nConversely, there are activities that, although sometimes involving transformation processes, are classified in other sections of NACE; in other words, they are not classified as manufacturing. They include:\n- logging, classified in section A (Agriculture, forestry and fishing);\n- beneficiating of agricultural products, classified in section A (Agriculture, forestry and fishing); \n- preparation of food for immediate consumption on the premises is classified to division 56 (Food and beverage service activities);\n- beneficiating of ores and other minerals, classified in section B (Mining and quarrying); \n- construction of structures and fabricating operations performed at the site of construction, classified in section F (Construction);\n- activities of breaking bulk and redistribution in smaller lots, including packaging, repackaging, or bottling products, such as liquors or chemicals; sorting of scrap; mixing paints to customer order; and cutting metals to customer order; treatment not resulting into a different good is classified to section G (Wholesale and retail trade; repair of motor vehicles and motorcycles).'
        },
        {
            'id': 4,
            'code': 'D',
            'description': 'ELECTRICITY, GAS, STEAM AND AIR CONDITIONING SUPPLY',
            'details': 'This section includes the activity of providing electric power, natural gas, steam, hot water and the like through a permanent infrastructure (network) of lines, mains and pipes. The dimension of the network is not decisive; also included are the distribution of electricity, gas, steam, hot water and the like in industrial parks or residential buildings.\n\nThis section therefore includes the operation of electric and gas utilities, which generate, control and distribute electric power or gas.'
        },
        {
            'id': 5,
            'code': 'E',
            'description': 'WATER SUPPLY; SEWERAGE, WASTE MANAGEMENT AND REMEDIATION ACTIVITIES',
            'details': 'This section includes activities related to the management (including collection, treatment and disposal) of various forms of waste, such as solid or non-solid industrial or household waste, as well as contaminated sites. The output of the waste or sewage treatment process can either be disposed of or become an input into other production processes.'
        },
        {
            'id': 6,
            'code': 'F',
            'description': 'CONSTRUCTION',
            'details': 'This section includes general construction and specialised construction activities for buildings and civil engineering works. It includes new work, repair, additions and alterations, the erection of prefabricated buildings or structures on the site and also construction of a temporary nature. \n\nGeneral construction is the construction of entire dwellings, office buildings, stores and other public and utility buildings, farm buildings etc., or the construction of civil engineering works such as motorways, streets, bridges, tunnels, railways, airfields, harbours and other water projects, irrigation systems, sewerage systems, industrial facilities, pipelines and electric lines, sports facilities etc. \n\nThis work can be carried out on own account or on a fee or contract basis. Portions of the work and sometimes even the whole practical work can be subcontracted out. A unit that carries the overall responsibility for a construction project is classified here.\n\nAlso included is the repair of buildings and engineering works.\n\nThis section includes the complete construction of buildings (division 41), the complete construction of civil engineering works (division 42), as well as specialised construction activities, if carried out only as a part of the construction process (division 43).\n\nThe rental of construction equipment with operator is classified with the specific construction activity carried out with this equipment.'
        },
        {
            'id': 7,
            'code': 'G',
            'description': 'WHOLESALE AND RETAIL TRADE; REPAIR OF MOTOR VEHICLES AND MOTORCYCLES',
            'details': 'This section includes wholesale and retail sale (i.e. sale without transformation) of any type of goods, and rendering services incidental to the sale of merchandise. Wholesaling and retailing are the final steps in the distribution of merchandise. Also included in this section are the repair of motor vehicles and motorcycles.\n\nSale without transformation is considered to include the usual operations (or manipulations) associated with trade, for example sorting, grading and assembling of goods, mixing (blending) of goods (for example sand), bottling (with or without preceding bottle cleaning), packing, breaking bulk and repacking for distribution in smaller lots, storage (whether or not frozen or chilled).\n\nDivision 45 includes all activities related to the sale and repair of motor vehicles and motorcycles, while divisions 46 and 47 include all other sale activities. The distinction between division 46 (wholesale) and division 47 (retail sale) is based on the predominant type of customer.\n\nWholesale is the resale (sale without transformation) of new and used goods to retailers, business-to-business trade, such as to industrial, commercial, institutional or professional users, or resale to other wholesalers, or involves acting as an agent or broker in buying merchandise for, or selling merchandise to, such persons or companies. The principal types of businesses included are merchant wholesalers, i.e. wholesalers who take title to the goods they sell, such as wholesale merchants or jobbers, industrial distributors, exporters, importers, and cooperative buying associations, sales branches and sales offices (but not retail stores) that are maintained by manufacturing or mining units apart from their plants or mines for the purpose of marketing their products and that do not merely take orders to be filled by direct shipments from the plants or mines. Also included are merchandise and commodity brokers, commission merchants and agents and assemblers, buyers and cooperative associations engaged in the marketing of farm products. \n\nWholesalers frequently physically assemble, sort and grade goods in large lots, break bulk, repack and redistribute in smaller lots, for example pharmaceuticals; store, refrigerate, deliver and install goods, engage in sales promotion for their customers and label design.\n\nRetailing is the resale (sale without transformation) of new and used goods mainly to the general public for personal or household consumption or utilisation, in shops, department stores, stalls, mail-order houses, door-to-door sales persons, hawkers, consumer cooperatives, auction houses etc. Most retailers take title to the goods they sell, but some act as agents for a principal and sell either on consignment or on a commission basis.'
        },
        {
            'id': 8,
            'code': 'H',
            'description': 'TRANSPORTATION AND STORAGE',
            'details': 'This section includes the provision of passenger or freight transport, whether scheduled or not, by rail, pipeline, road, water or air and associated activities such as terminal and parking facilities, cargo handling, storage etc. Included in this section is the rental of transport equipment with driver or operator. Also included are postal and courier activities.'
        },
        {
            'id': 9,
            'code': 'I',
            'description': 'ACCOMMODATION AND FOOD SERVICE ACTIVITIES',
            'details': 'This section includes the provision of short-stay accommodation for visitors and other travellers and the provision of complete meals and drinks fit for immediate consumption. The amount and type of supplementary services provided within this section can vary widely.'
        },
        {
            'id': 10,
            'code': 'J',
            'description': 'INFORMATION AND COMMUNICATION',
            'details': 'This section includes the production and distribution of information and cultural products, the provision of the means to transmit or distribute these products, as well as data or communications, information technology activities and the processing of data and other information service activities.\n\nThe main components of this section are publishing activities (division 58), including software publishing, motion picture and sound recording activities (division 59), radio and TV broadcasting and programming activities (division 60), telecommunications activities (division 61), information technology activities (division 62) and other information service activities (division 63).\n\nPublishing includes the acquisition of copyrights for content (information products) and making this content available to the general public by engaging in (or arranging for) the reproduction and distribution of this content in various forms. All the feasible forms of publishing (in print, electronic or audio form, on the Internet, as multimedia products such as CD-ROM reference books etc.) are included in this section.\n\nActivities related to production and distribution of TV programming span divisions 59, 60 and 61, reflecting different stages in this process. Individual components, such as movies, television series etc. are produced by activities in division 59, while the creation of a complete television channel programme, from components produced in division 59 or other components (such as live news programming) is included in division 60. Division 60 also includes the broadcasting of this programme by the producer. The distribution of the complete television programme by third parties, i.e. without any alteration of the content, is included in division 61. This distribution in division 61 can be done through broadcasting, satellite or cable systems.'
        },
        {
            'id': 11,
            'code': 'K',
            'description': 'FINANCIAL AND INSURANCE ACTIVITIES',
            'details': 'This section includes financial service activities, including insurance, reinsurance and pension funding activities and activities to support financial services.'
        },
        {
            'id': 12,
            'code': 'L',
            'description': 'REAL ESTATE ACTIVITIES',
            'details': 'This section includes acting as lessors, agents and/or brokers in one or more of the following: selling or buying real estate, rental real estate, providing other real estate services such as appraising real estate or acting as real estate escrow agents. Activities in this section may be carried out on own or leased property and may be done on a fee or contract basis. \n\nThis section includes real estate property managers.'
        },
        {
            'id': 13,
            'code': 'M',
            'description': 'PROFESSIONAL, SCIENTIFIC AND TECHNICAL ACTIVITIES',
            'details': 'This section includes specialised professional, scientific and technical activities. These activities require a high degree of training, and make specialised knowledge and skills available to users.'
        },
        {
            'id': 14,
            'code': 'N',
            'description': 'ADMINISTRATIVE AND SUPPORT SERVICE ACTIVITIES',
            'details': 'This section includes a variety of activities that support general business operations. These activities differ from those in section M, since their primary purpose is not the transfer of specialised knowledge.'
        },
        {
            'id': 15,
            'code': 'O',
            'description': 'PUBLIC ADMINISTRATION AND DEFENCE; COMPULSORY SOCIAL SECURITY',
            'details': 'This section includes activities of a governmental nature, normally carried out by the public administration. This includes the enactment and judicial interpretation of laws and their pursuant regulation, as well as the administration of programmes based on them, legislative activities, taxation, national defence, public order and safety, immigration services, foreign affairs and the administration of government programmes. \n\nThe legal or institutional status is not, in itself, the determining factor for an activity to belong in this section, rather than the activity being of a nature specified in the previous paragraph. This means that activities classified elsewhere in NACE do not fall under this section, even if carried out by public entities. For example, administration of the school system (i.e. regulations, checks, curricula) falls under this section, but teaching itself does not (see section P), and a prison or military hospital is classified to health (see section Q). Similarly, some activities described in this section may be carried out by non-government units.'
        },
        {
            'id': 16,
            'code': 'P',
            'description': 'EDUCATION',
            'details': 'This section includes education at any level or for any profession. The instructions may be oral or written and may be provided by radio, television, Internet or via correspondence. \n\nIt includes education by the different institutions in the regular school system at its different levels as well as adult education, literacy programmes etc. Also included are military schools and academies, prison schools etc. at their respective levels. The section includes public as well as private education.\n\nFor each level of initial education, the classes include special education for physically or mentally handicapped pupils. \n\nThe breakdown of the categories in this section is based on the level of education offered as defined by the levels of ISCED 1997. The activities of educational institutions providing courses on ISCED level 0 are classified in 85.10, on ISCED level 1 in 85.20, on ISCED levels 2-3 in group 85.3, on ISCED level 4 in 85.41 and on ISCED level 5-6 in 85.42.'
        },
        {
            'id': 17,
            'code': 'Q',
            'description': 'HUMAN HEALTH AND SOCIAL WORK ACTIVITIES',
            'details': 'This section includes the provision of health and social work activities. Activities include a wide range of activities, starting from health care provided by trained medical professionals in hospitals and other facilities, over residential care activities that still involve a degree of health care activities to social work activities without any involvement of health care professionals.'
        },
        {
            'id': 18,
            'code': 'R',
            'description': 'ARTS, ENTERTAINMENT AND RECREATION',
            'details': 'This section includes a wide range of activities to meet varied cultural, entertainment and recreational interests of the general public, including live performances, operation of museum sites, gambling, sports and recreation activities.'
        },
        {
            'id': 19,
            'code': 'S',
            'description': 'OTHER SERVICE ACTIVITIES',
            'details': 'This section (as a residual category) includes the activities of membership organisations, the repair of computers and personal and household goods and a variety of personal service activities not covered elsewhere in the classification.'
        },
        {
            'id': 20,
            'code': 'T',
            'description': 'ACTIVITIES OF HOUSEHOLDS AS EMPLOYERS; UNDIFFERENTIATED GOODS- AND SERVICES-PRODUCING ACTIVITIES OF HOUSEHOLDS FOR OWN USE'
        },
        {
            'id': 21,
            'code': 'U',
            'description': 'ACTIVITIES OF EXTRATERRITORIAL ORGANISATIONS AND BODIES'
        }
    ],

    naceDivisions: [
        {
            'id': 1,
            'code': '01',
            'description': 'Crop and animal production, hunting and related service activities',
            'details': 'This division includes two basic activities, namely the production of crop products and production of animal products, covering also the forms of organic agriculture, the growing of genetically modified crops and the raising of genetically modified animals. This division includes growing of crops in open fields as well in greenhouses.\n \nGroup 01.5 (Mixed farming) breaks with the usual principles for identifying main activity. It accepts that many agricultural holdings have reasonably balanced crop and animal production, and that it would be arbitrary to classify them in one category or the other.'
        },
        {
            'id': 2,
            'code': '02',
            'description': 'Forestry and logging',
            'details': 'This division includes the production of roundwood as well as the extraction and gathering of wild growing non-wood forest products. Besides the production of timber, forestry activities result in products that undergo little processing, such as firewood, charcoal and roundwood used in an unprocessed form (e.g. pit-props, pulpwood etc.). These activities can be carried out in natural or planted forests.'
        },
        {
            'id': 3,
            'code': '03',
            'description': 'Fishing and aquaculture',
            'details': 'This division includes capture fishery and aquaculture, covering the use of fishery resources from marine, brackish or freshwater environments, with the goal of capturing or gathering fish, crustaceans, molluscs and other marine organisms and products (e.g. aquatic plants, pearls, sponges etc).'
        },
        {
            'id': 4,
            'code': '05',
            'description': 'Mining of coal and lignite',
            'details': 'This division includes the extraction of solid mineral fuels through underground or open-cast mining and includes operations (e.g. grading, cleaning, compressing and other steps necessary for transportation etc.) leading to a marketable product.'
        },
        {
            'id': 5,
            'code': '06',
            'description': 'Extraction of crude petroleum and natural gas',
            'details': 'This division includes the production of crude petroleum, the mining and extraction of oil from oil shale and oil sands and the production of natural gas and recovery of hydrocarbon liquids. This division includes the activities of operating and/or developing oil and gas field properties. Such activities may include drilling, completing and equipping wells; operating separators, emulsion breakers, desalting equipment and field gathering lines for crude petroleum; and all other activities in the preparation of oil and gas up to the point of shipment from the producing property.'
        },
        {
            'id': 6,
            'code': '07',
            'description': 'Mining of metal ores',
            'details': 'This division includes mining for metallic minerals (ores), performed through underground or open-cast extraction, seabed mining etc.'
        },
        {
            'id': 7,
            'code': '08',
            'description': 'Other mining and quarrying',
            'details': 'This division includes extraction from a mine or quarry, but also dredging of alluvial deposits, rock crushing and the use of salt marshes. The products are used most notably in construction (e.g. sands, stones etc.), manufacture of materials (e.g. clay, gypsum, calcium etc.), manufacture of chemicals etc.'
        },
        {
            'id': 8,
            'code': '09',
            'description': 'Mining support service activities',
            'details': 'This division includes specialised support services incidental to mining provided on a fee or contract basis. It includes exploration services through traditional prospecting methods such as taking core samples and making geological observations as well as drilling, test-drilling or redrilling for oil wells, metallic and non-metallic minerals. Other typical services cover building oil and gas well foundations, cementing oil and gas well casings, cleaning, bailing and swabbing oil and gas wells, draining and pumping mines, overburden removal services at mines, etc.'
        },
        {
            'id': 9,
            'code': '10',
            'description': 'Manufacture of food products',
            'details': "This division includes the processing of the products of agriculture, forestry and fishing into food for humans or animals, and includes the production of various intermediate products that are not directly food products. The activity often generates associated products of greater or lesser value (for example, hides from slaughtering, or oilcake from oil production).\n\nThis division is organised by activities dealing with different kinds of products: meat, fish, fruit and vegetables, fats and oils, milk products, grain mill products, animal feeds and other food products. Production can be carried out for own account, as well as for third parties, as in custom slaughtering.\n\nSome activities are considered manufacturing (for example, those performed in bakeries, pastry shops, and prepared meat shops etc. which sell their own production) even though there is retail sale of the products in the producers' own shop. However, where the processing is minimal and does not lead to a real transformation, the unit is classified to wholesale and retail trade (section G).\n\nPreparation of food for immediate consumption on the premises is classified to division 56 (Food and beverage service activities).\n\nProduction of animal feeds from slaughter waste or by-products is classified in 10.9, while processing food and beverage waste into secondary raw material is classified to 38.3, and disposal of food and beverage waste in 38.21."
        },
        {
            'id': 10,
            'code': '11',
            'description': 'Manufacture of beverages',
            'details': 'This division includes the manufacture of beverages, such as non-alcoholic beverages and mineral water, manufacture of alcoholic beverages mainly through fermentation, beer and wine, and the manufacture of distilled alcoholic beverages.'
        },
        {
            'id': 11,
            'code': '12',
            'description': 'Manufacture of tobacco products',
            'details': 'This division includes the processing of an agricultural product, tobacco, into a form suitable for final consumption.'
        },
        {
            'id': 12,
            'code': '13',
            'description': 'Manufacture of textiles',
            'details': 'This division includes preparation and spinning of textile fibres as well as textile weaving, finishing of textiles and wearing apparel, manufacture of made-up textile articles, except apparel (e.g. household linen, blankets, rugs, cordage etc.). Growing of natural fibres is covered under division 01, while manufacture of synthetic fibres is a chemical process classified in class 20.60. Manufacture of wearing apparel is covered in division 14.'
        },
        {
            'id': 13,
            'code': '14',
            'description': 'Manufacture of wearing apparel',
            'details': 'This division includes all tailoring (ready-to-wear or made-to-measure), in all materials (e.g. leather, fabric, knitted and crocheted fabrics etc.), of all items of clothing (e.g. outerwear, underwear for men, women or children; work, city or casual clothing etc.) and accessories. There is no distinction made between clothing for adults and clothing for children, or between modern and traditional clothing.'
        },
        {
            'id': 14,
            'code': '15',
            'description': 'Manufacture of leather and related products',
            'details': 'This division includes dressing and dyeing of fur and the transformation of hides into leather by tanning or curing and fabricating the leather into products for final consumption.'
        },
        {
            'id': 15,
            'code': '16',
            'description': 'Manufacture of wood and of products of wood and cork, except furniture; manufacture of articles of straw and plaiting materials',
            'details': 'This division includes the manufacture of wood products, such as lumber, plywood, veneers, wood containers, wood flooring, wood trusses, and prefabricated wood buildings. The production processes include sawing, planing, shaping, laminating, and assembling of wood products starting from logs that are cut into bolts, or lumber that may then be cut further, or shaped by lathes or other shaping tools. The lumber or other transformed wood shapes may also be subsequently planed or smoothed, and assembled into finished products, such as wood containers.\n\nWith the exception of sawmilling, this division is subdivided mainly based on the specific products manufactured.'
        },
        {
            'id': 16,
            'code': '17',
            'description': 'Manufacture of paper and paper products',
            'details': 'This division includes the manufacture of pulp, paper and converted paper products. The manufacture of these products is grouped together because they constitute a series of vertically connected processes. More than one activity is often carried out in a single unit. \n\nThere are essentially three activities: The manufacture of pulp involves separating the cellulose fibres from other matter in wood, or dissolving and de-inking of used paper, and mixing in small amounts of reagents to reinforce the binding of the fibres. The manufacture of paper involves releasing pulp onto a moving wire mesh so as to form a continuous sheet. Converted paper products are made from paper and other materials by various techniques. \n\nThe paper articles may be printed (e.g. wallpaper, gift wrap etc.), as long as the printing of information is not the main purpose.\n\nThe production of pulp, paper and paperboard in bulk is included in group 17.1, while the remaining classes include the production of further-processed paper and paper products.'
        },
        {
            'id': 17,
            'code': '18',
            'description': 'Printing and reproduction of recorded media',
            'details': "This division includes printing of products, such as newspapers, books, periodicals, business forms, greeting cards, and other materials, and associated support activities, such as bookbinding, plate-making services, and data imaging. The support activities included here are an integral part of the printing industry, and a product (a printing plate, a bound book, or a computer disk or file) that is an integral part of the printing industry is almost always provided by these operations.\n\nProcesses used in printing include a variety of methods for transferring an image from a plate, screen or computer file to a medium, such as paper, plastics, metal, textile articles, or wood. The most prominent of these methods entails the transfer of the image from a plate or screen to the medium through lithographic, gravure, screen or flexographic printing. Often a computer file is used to directly ''drive'' the printing mechanism to create the image or electrostatic and other types of equipment (digital or non-impact printing).\n\nThough printing and publishing can be carried out by the same unit (a newspaper, for example), it is less and less the case that these distinct activities are carried out in the same physical location."
        },
        {
            'id': 18,
            'code': '19',
            'description': 'Manufacture of coke and refined petroleum products',
            'details': 'This division includes the transformation of crude petroleum and coal into usable products. The dominant process is petroleum refining, which involves the separation of crude petroleum into component products through such techniques as cracking and distillation. \n\nThis division includes the manufacture of gases such as ethane, propane and butane as products of petroleum refineries.'
        },
        {
            'id': 19,
            'code': '20',
            'description': 'Manufacture of chemicals and chemical products',
            'details': 'This division includes the transformation of organic and inorganic raw materials by a chemical process and the formation of products. It distinguishes the production of basic chemicals that constitute the first industry group from the production of intermediate and end products produced by further processing of basic chemicals that make up the remaining industry classes.'
        },
        {
            'id': 20,
            'code': '21',
            'description': 'Manufacture of basic pharmaceutical products and pharmaceutical preparations',
            'details': 'This division includes the manufacture of basic pharmaceutical products and pharmaceutical preparations.'
        },
        {
            'id': 21,
            'code': '22',
            'description': 'Manufacture of rubber and plastic products',
            'details': 'This division includes the manufacture of rubber and plastics products. \n\nThis division is characterised by the raw materials used in the manufacturing process. However, this does not imply that the manufacture of all products made of these materials is classified here.'
        },
        {
            'id': 22,
            'code': '23',
            'description': 'Manufacture of other non-metallic mineral products',
            'details': 'This division includes manufacturing activities related to a single substance of mineral origin. This division includes the manufacture of glass and glass products (e.g. flat glass, hollow glass, fibres, technical glassware etc.), ceramic products, tiles and baked clay products, and cement and plaster, from raw materials to finished articles.'
        },
        {
            'id': 23,
            'code': '24',
            'description': 'Manufacture of basic metals',
            'details': 'This division includes the activities of smelting and/or refining ferrous and non-ferrous metals from ore, pig or scrap, using electrometallurgic and other process metallurgic techniques.'
        },
        {
            'id': 24,
            'code': '25',
            'description': 'Manufacture of fabricated metal products, except machinery and equipment',
            'details': 'This division includes the manufacture of "pure" metal products (such as parts, containers and structures), usually with a static, immovable function, as opposed to the following divisions 26-30, which cover the manufacture of combinations or assemblies of such metal products (sometimes with other materials) into more complex units that, unless they are purely electrical, electronic or optical, work with moving parts.'
        },
        {
            'id': 25,
            'code': '26',
            'description': 'Manufacture of computer, electronic and optical products',
            'details': 'This division includes the manufacture of computers, computer peripherals, communications equipment, and similar electronic products, as well as the manufacture of components for such products. Production processes of this division are characterised by the design and use of integrated circuits and the application of highly specialised miniaturisation technologies.'
        },
        {
            'id': 26,
            'code': '27',
            'description': 'Manufacture of electrical equipment',
            'details': 'This division includes the manufacture of products that generate, distribute and use electrical power.'
        },
        {
            'id': 27,
            'code': '28',
            'description': 'Manufacture of machinery and equipment n.e.c.',
            'details': 'This division includes the manufacture of machinery and equipment that act independently on materials either mechanically or thermally or perform operations on materials (such as handling, spraying, weighing or packing), including their mechanical components that produce and apply force, and any specially manufactured primary parts. This includes the manufacture of fixed and mobile or hand-held devices, regardless of whether they are designed for industrial, building and civil engineering, agricultural or home use. The manufacture of special equipment for passenger or freight transport within demarcated premises also belongs within this division.\n\nThis division distinguishes between the manufacture of special-purpose machinery, i.e. machinery for exclusive use in a NACE industry or a small cluster of NACE industries, and general-purpose machinery, i.e. machinery that is being used in a wide range of NACE industries.'
        },
        {
            'id': 28,
            'code': '29',
            'description': 'Manufacture of motor vehicles, trailers and semi-trailers',
            'details': 'This division includes the manufacture of motor vehicles for transporting passengers or freight. The manufacture of various parts and accessories, as well as the manufacture of trailers and semi-trailers, is included here. \n\nThe maintenance and repair of vehicles produced in this division are classified in 45.20.'
        },
        {
            'id': 29,
            'code': '30',
            'description': 'Manufacture of other transport equipment',
            'details': 'This division includes the manufacture of transportation equipment such as ship building and boat manufacturing, the manufacture of railroad rolling stock and locomotives, air and spacecraft and the manufacture of parts thereof.'
        },
        {
            'id': 30,
            'code': '31',
            'description': 'Manufacture of furniture',
            'details': 'This division includes the manufacture of furniture and related products of any material except stone, concrete and ceramic. The processes used in the manufacture of furniture are standard methods of forming materials and assembling components, including cutting, moulding and laminating. The design of the article, for both aesthetic and functional qualities, is an important aspect of the production process.\n\nSome of the processes used in furniture manufacturing are similar to processes that are used in other segments of manufacturing. For example, cutting and assembly occurs in the production of wood trusses that are classified in division 16 (Manufacture of wood and wood products). However, the multiple processes distinguish wood furniture manufacturing from wood product manufacturing. Similarly, metal furniture manufacturing uses techniques that are also employed in the manufacture of roll-formed products classified in division 25 (Manufacture of fabricated metal products). The moulding process for plastics furniture is similar to the moulding of other plastics products. However, the manufacture of plastics furniture tends to be a specialised activity.'
        },
        {
            'id': 31,
            'code': '32',
            'description': 'Other manufacturing',
            'details': 'This division includes the manufacture of a variety of goods not covered in other parts of the classification. Since this is a residual division, production processes, input materials and use of the produced goods can vary widely and usual criteria for grouping classes into divisions have not been applied here.'
        },
        {
            'id': 32,
            'code': '33',
            'description': 'Repair and installation of machinery and equipment',
            'details': 'This division includes the specialised repair of goods produced in the manufacturing sector with the aim to restore machinery, equipment and other products to working order. The provision of general or routine maintenance (i.e. servicing) on such products to ensure they work efficiently and to prevent breakdown and unnecessary repairs is included. \n\nThis division does only include specialised repair and maintenance activities. A substantial amount of repair is also done by manufacturers of machinery, equipment and other goods, in which case the classification of units engaged in these repair and manufacturing activities is done according to the value-added principle which would often assign these combined activities to the manufacture of the good. The same principle is applied for combined trade and repair. \n\nThe rebuilding or remanufacture of machinery and equipment is considered a manufacturing activity and included in other divisions of this section.\n\nRepair and maintenance of goods that are utilised as capital goods as well as consumer goods is typically classified as repair and maintenance of household goods (e.g. office and household furniture repair, see 95.24).'
        },
        {
            'id': 33,
            'code': '35',
            'description': 'Electricity, gas, steam and air conditioning supply'
        },
        {
            'id': 34,
            'code': '36',
            'description': 'Water collection, treatment and supply',
            'details': 'This division includes the collection, treatment and distribution of water for domestic and industrial needs. Collection of water from various sources, as well as distribution by various means is included.'
        },
        {
            'id': 35,
            'code': '37',
            'description': 'Sewerage',
            'details': 'This division includes the operation of sewer systems or sewage treatment facilities that collect, treat, and dispose of sewage.'
        },
        {
            'id': 36,
            'code': '38',
            'description': 'Waste collection, treatment and disposal activities; materials recovery',
            'details': 'This division includes the collection, treatment, and disposal of waste materials.'
        },
        {
            'id': 37,
            'code': '39',
            'description': 'Remediation activities and other waste management services',
            'details': 'This division includes the provision of remediation services, i.e. the cleanup of contaminated buildings and sites, soil, surface or ground water.'
        },
        {
            'id': 38,
            'code': '41',
            'description': 'Construction of buildings',
            'details': 'This division includes general construction of buildings of all kinds. It includes new work, repair, additions and alterations, the erection of pre-fabricated buildings or structures on the site and also construction of temporary nature. \n\nIncluded is the construction of entire dwellings, office buildings, stores and other public and utility buildings, farm buildings, etc.'
        },
        {
            'id': 39,
            'code': '42',
            'description': 'Civil engineering',
            'details': 'This division includes general construction for civil engineering objects. It includes new work, repair, additions and alterations, the erection of pre-fabricated structures on the site and also construction of temporary nature. \n\nIncluded is the construction of heavy constructions such as motorways, streets, bridges, tunnels, railways, airfields, harbours and other water projects, irrigation systems, sewerage systems, industrial facilities, pipelines and electric lines, outdoor sports facilities, etc. This work can be carried out on own account or on a fee or contract basis. Portions of the work and sometimes even the whole practical work can be subcontracted out.'
        },
        {
            'id': 40,
            'code': '43',
            'description': 'Specialised construction activities',
            'details': 'This division includes specialised construction activities (special trades), i.e. the construction of parts of buildings and civil engineering works or preparation therefore. These activities are usually specialised in one aspect common to different structures, requiring specialised skills or equipment, such as pile-driving, foundation work, carcass work, concrete work, brick laying, stone setting, scaffolding, roof covering, etc. The erection of steel structures is included, provided that the parts are not produced by the same unit. Specialised construction activities are mostly carried out under subcontract, but especially in repair construction it is done directly for the owner of the property.\n\nIncluded is the installation of all kind of utilities that make the construction function as such. These activities are usually performed at the site of the construction, although parts of the job may be carried out in a special shop. Included are activities such as plumbing, installation of heating and air-conditioning systems, antennas, alarm systems and other electrical work, sprinkler systems, elevators and escalators, etc. Also included are insulation work (water, heat, sound), sheet metal work, commercial refrigerating work, the installation of illumination and signalling systems for roads, railways, airports, harbours, etc. Also repair of the same type as the above mentioned activities is included. \n\nBuilding completion activities encompass activities that contribute to the completion or finishing of a construction such as glazing, plastering, painting, floor and wall tiling or covering with other materials like parquet, carpets, wallpaper, etc., floor sanding, finish carpentry, acoustical work, cleaning of the exterior, etc. Also repair of the same type as the above mentioned activities is included.\n\nThe rental of equipment with operator is classified with the associated construction activity.'
        },
        {
            'id': 41,
            'code': '45',
            'description': 'Wholesale and retail trade and repair of motor vehicles and motorcycles',
            'details': 'This division includes all activities (except manufacture and rental) related to motor vehicles and motorcycles, including lorries and trucks, such as the wholesale and retail sale of new and second-hand vehicles, the repair and maintenance of vehicles and the wholesale and retail sale of parts and accessories for motor vehicles and motorcycles. Also included are activities of commission agents involved in wholesale or retail sale of vehicles.'
        },
        {
            'id': 42,
            'code': '46',
            'description': 'Wholesale trade, except of motor vehicles and motorcycles',
            'details': 'This division includes wholesale trade on own account or on a fee or contract basis (commission trade) related to domestic wholesale trade as well as international wholesale trade (import/export).'
        },
        {
            'id': 43,
            'code': '47',
            'description': 'Retail trade, except of motor vehicles and motorcycles',
            'details': 'This division includes the resale (sale without transformation) of new and used goods mainly to the general public for personal or household consumption or utilisation, by shops, department stores, stalls, mail-order houses, door-to-door sales persons, hawkers, consumer cooperatives etc.\n\nRetail trade is classified first by type of sale outlet (retail trade in stores: groups 47.1 to 47.7; retail trade not in stores: groups 47.8 and 47.9). Retail trade in stores includes the retail sale of used goods (class 47.79). For retail sale in stores, there exists a further distinction between specialised retail sale (groups 47.2 to 47.7) and non-specialised retail sale (group 47.1). The above groups are further subdivided by the range of products sold. Sale not via stores is subdivided according to the forms of trade, such as retail sale via stalls and markets (group 47.8) and other non-store retail sale, e.g. mail order, door-to-door, by vending machines etc. (group 47.9).\n\nThe goods sold in this division are limited to goods usually referred to as consumer goods or retail goods. Therefore goods not normally entering the retail trade, such as cereal grains, ores, industrial machinery etc. are excluded.'
        },
        {
            'id': 44,
            'code': '49',
            'description': 'Land transport and transport via pipelines',
            'details': 'This division includes the transport of passengers and freight via road and rail, as well as freight transport via pipelines.'
        },
        {
            'id': 45,
            'code': '50',
            'description': 'Water transport',
            'details': 'This division includes the transport of passengers or freight over water, whether scheduled or not. Also included are the operation of towing or pushing boats, excursion, cruise or sightseeing boats, ferries, water taxis etc. Although the location is an indicator for the separation between sea and inland water transport, the deciding factor is the type of vessel used. Transport on sea-going vessels is classified in groups 50.1 and 50.2, while transport using other vessels is classified in groups 50.3 and 50.4.'
        },
        {
            'id': 46,
            'code': '51',
            'description': 'Air transport',
            'details': 'This division includes the transport of passengers or freight by air or via space.'
        },
        {
            'id': 47,
            'code': '52',
            'description': 'Warehousing and support activities for transportation',
            'details': 'This division includes warehousing and support activities for transportation, such as operating of transport infrastructure (e.g. airports, harbours, tunnels, bridges, etc.), the activities of transport agencies and cargo handling.'
        },
        {
            'id': 48,
            'code': '53',
            'description': 'Postal and courier activities',
            'details': 'This division includes postal and courier activities, such as pickup, transport and delivery of letters and parcels under various arrangements.'
        },
        {
            'id': 49,
            'code': '55',
            'description': 'Accommodation',
            'details': 'This division includes the provision of short-stay accommodation for visitors and other travellers.'
        },
        {
            'id': 50,
            'code': '56',
            'description': 'Food and beverage service activities',
            'details': 'This division includes food and beverage serving activities providing complete meals or drinks fit for immediate consumption, whether in traditional restaurants, self-service or take-away restaurants, whether as permanent or temporary stands with or without seating. Decisive is the fact that meals fit for immediate consumption are offered, not the kind of facility providing them.'
        },
        {
            'id': 51,
            'code': '58',
            'description': 'Publishing activities',
            'details': 'This division includes the publishing of books, brochures, leaflets, dictionaries, encyclopaedias, atlases, maps and charts; publishing of newspapers, journals and periodicals; directory and mailing list and other publishing, as well as software publishing.\n\nPublishing includes the acquisition of copyrights to content (information products) and making this content available to the general public by engaging in (or arranging for) the reproduction and distribution of this content in various forms. All the feasible forms of publishing (in print, electronic or audio form, on the Internet, as multimedia products such as CD-ROM reference books etc.), except publishing of motion pictures, are included in this division.'
        },
        {
            'id': 52,
            'code': '59',
            'description': 'Motion picture, video and television programme production, sound recording and music publishing activities',
            'details': 'This division includes production of theatrical and non-theatrical motion pictures whether on film, video tape or disc for direct projection in theatres or for broadcasting on television; supporting activities such as film editing, cutting, dubbing etc.; distribution of motion pictures and other film productions to other industries; as well as motion picture or other film productions projection. Buying and selling of motion picture or other film productions distribution rights is also included.'
        },
        {
            'id': 53,
            'code': '60',
            'description': 'Programming and broadcasting activities',
            'details': 'This division includes the activities of creating content or acquiring the right to distribute content and subsequently broadcasting that content, such as radio, television and data programs of entertainment, news, talk, and the like. Also included is data broadcasting, typically integrated with radio or TV broadcasting. The broadcasting can be performed using different technologies, over-the-air, via satellite, via a cable network or via Internet.'
        },
        {
            'id': 54,
            'code': '61',
            'description': 'Telecommunications',
            'details': 'This division includes the activities of providing telecommunications and related service activities, that is transmitting voice, data, text, sound and video. The transmission facilities that carry out these activities may be based on a single technology or a combination of technologies. The commonality of activities classified in this division is the transmission of content, without being involved in its creation. The breakdown in this division is based on the type of infrastructure operated.\n\nIn the case of transmission of television signals this may include the bundling of complete programming channels (produced in division 60) in to programme packages for distribution.'
        },
        {
            'id': 55,
            'code': '62',
            'description': 'Computer programming, consultancy and related activities',
            'details': "This division includes the following activities of providing expertise in the field of information technologies: writing, modifying, testing and supporting software; planning and designing computer systems that integrate computer hardware, software and communication technologies; on-site management and operation of clients' computer systems and/or data processing facilities; and other professional and technical computer-related activities."
        },
        {
            'id': 56,
            'code': '63',
            'description': 'Information service activities',
            'details': 'This division includes the activities of web search portals, data processing and hosting activities, as well as other activities that primarily supply information.'
        },
        {
            'id': 57,
            'code': '64',
            'description': 'Financial service activities, except insurance and pension funding',
            'details': 'This division includes the activities of obtaining and redistributing funds other than for the purpose of insurance or pension funding or compulsory social security.\n\nNote: National institutional arrangements are likely to play a significant role in determining the classification within this division.'
        },
        {
            'id': 58,
            'code': '65',
            'description': 'Insurance, reinsurance and pension funding, except compulsory social security',
            'details': 'This division includes the underwriting annuities and insurance policies and investing premiums to build up a portfolio of financial assets to be used against future claims. Provision of direct insurance and reinsurance are included.'
        },
        {
            'id': 59,
            'code': '66',
            'description': 'Activities auxiliary to financial services and insurance activities',
            'details': 'This division includes the provision of services involved in or closely related to financial service activities, but not themselves providing financial services. The primary breakdown of this division is according to the type of financial transaction or funding served.'
        },
        {
            'id': 60,
            'code': '68',
            'description': 'Real estate activities'
        },
        {
            'id': 61,
            'code': '69',
            'description': 'Legal and accounting activities',
            'details': "This division includes legal representation of one party's interest against another party, whether or not before courts or other judicial bodies by, or under supervision of, persons who are members of the bar, such as advice and representation in civil cases, advice and representation in criminal actions, advice and representation in connection with labour disputes."
        },
        {
            'id': 62,
            'code': '70',
            'description': 'Activities of head offices; management consultancy activities',
            'details': 'This division includes the provision of advice and assistance to businesses and other organisations on management issues, such as strategic and organisational planning; financial planning and budgeting; marketing objectives and policies; human resource policies, practices, and planning; production scheduling; and control planning.'
        },
        {
            'id': 63,
            'code': '71',
            'description': 'Architectural and engineering activities; technical testing and analysis',
            'details': 'This division includes the provision of architectural services, engineering services, drafting services, building inspection services and surveying and mapping services.'
        },
        {
            'id': 64,
            'code': '72',
            'description': 'Scientific research and development ',
            'details': 'This division includes the activities of three types of research and development: 1) basic research: experimental or theoretical work undertaken primarily to acquire new knowledge of the underlying foundations of phenomena and observable facts, without particular application or use in view, 2) applied research: original investigation undertaken in order to acquire new knowledge, directed primarily towards a specific practical aim or objective and 3) experimental development: systematic work, drawing on existing knowledge gained from research and/or practical experience, directed to producing new materials, products and devices, to installing new processes, systems and services, and to improving substantially those already produced or installed.\n\nResearch and experimental development activities in this division are subdivided into two categories: natural sciences and engineering; social sciences and the humanities.'
        },
        {
            'id': 65,
            'code': '73',
            'description': 'Advertising and market research',
            'details': 'This division includes the creation of advertising campaigns and placement of such advertising in periodicals, newspapers, radio and television, or other media as well as the design of display structures and sites.'
        },
        {
            'id': 66,
            'code': '74',
            'description': 'Other professional, scientific and technical activities',
            'details': 'This division includes the provision of professional scientific and technical services (except legal and accounting activities; architecture and engineering activities; technical testing and analysis; management and management consultancy activities; research and development and advertising activities).'
        },
        {
            'id': 67,
            'code': '75',
            'description': 'Veterinary activities',
            'details': 'This division includes the provision of animal health care and control activities for farm animals or pet animals. These activities are carried out by qualified veterinarians in veterinary hospitals as well as when visiting farms, kennels or homes, in own consulting and surgery rooms or elsewhere.'
        },
        {
            'id': 68,
            'code': '77',
            'description': 'Rental and leasing activities',
            'details': 'This division includes the rental and leasing of tangible and non-financial intangible assets, including a wide array of tangible goods, such as automobiles, computers, consumer goods, and industrial machinery and equipment, to customers in return for a periodic rental or lease payment. It is subdivided into: (1) the rental of motor vehicles, (2) the rental of recreational and sports equipment and personal and household equipment, (3) the leasing of other machinery and equipment of the kind often used for business operations, including other transport equipment and (4) the leasing of intellectual property products and similar products. \n\nOnly the provision of operating leases is included in this division.'
        },
        {
            'id': 69,
            'code': '78',
            'description': 'Employment activities',
            'details': "This division includes activities of listing employment vacancies and referring or placing applicants for employment, where the individuals referred or placed are not employees of the employment agencies, supplying workers to clients' businesses for limited periods of time to supplement the working force of the client, and the activities of providing other human resources.\n\nThis division includes:\n- executive search and placement activities\n- activities of theatrical casting agencies"
        },
        {
            'id': 70,
            'code': '79',
            'description': 'Travel agency, tour operator and other reservation service and related activities',
            'details': 'This division includes the activity of agencies, primarily engaged in selling travel, tour, transportation and accommodation services to the general public and commercial clients and the activity of arranging and assembling tours that are sold through travel agencies or directly by agents such as tour operators; and other travel-related services including reservation services.'
        },
        {
            'id': 71,
            'code': '80',
            'description': 'Security and investigation activities',
            'details': 'This division includes security-related services such as: investigation and detective services; guard and patrol services; picking up and delivering money, receipts, or other valuable items with personnel and equipment to protect such properties while in transit; operation of electronic security alarm systems, such as burglar and fire alarms, where the activity focuses on remote monitoring these systems, but often involves also sale, installation and repair services. If the latter components are provided separate, they are excluded from this division and classified in retail sale, construction etc.'
        },
        {
            'id': 72,
            'code': '81',
            'description': 'Services to buildings and landscape activities',
            'details': "This division includes the provision of a number of general support services, such as the provision of a combination of support services within a client's facilities, the interior and exterior cleaning of buildings of all types, cleaning of industrial machinery, cleaning of trains, buses, planes, etc., cleaning of the inside of road and sea tankers, disinfecting and exterminating activities for buildings, ships, trains, etc., bottle cleaning, street sweeping, snow and ice removal, provision of landscape care and maintenance services and provision of these services along with the design of landscape plans and/or the construction (i.e. installation) of walkways, retaining walls, decks, fences, ponds, and similar structures."
        },
        {
            'id': 73,
            'code': '82',
            'description': 'Office administrative, office support and other business support activities',
            'details': 'This division includes the provision of a range of day-to-day office administrative services, as well as ongoing routine business support functions for others, on a contract or fee basis.'
        },
        {
            'id': 74,
            'code': '84',
            'description': 'Public administration and defence; compulsory social security'
        },
        {
            'id': 75,
            'code': '85',
            'description': 'Education'
        },
        {
            'id': 76,
            'code': '86',
            'description': 'Human health activities',
            'details': 'This division includes activities of short- or long-term hospitals, general or specialty medical, surgical, psychiatric and substance abuse hospitals, sanatoria, preventoria, medical nursing homes, asylums, mental hospital institutions, rehabilitation centres, leprosaria and other human health institutions which have accommodation facilities and which engage in providing diagnostic and medical treatment to inpatients with any of a wide variety of medical conditions.'
        },
        {
            'id': 77,
            'code': '87',
            'description': 'Residential care activities',
            'details': 'This division includes the provision of residential care combined with either nursing, supervisory or other types of care as required by the residents. Facilities are a significant part of the production process and the care provided is a mix of health and social services with the health services being largely some level of nursing services.'
        },
        {
            'id': 78,
            'code': '88',
            'description': 'Social work activities without accommodation',
            'details': 'This division includes the provision of a variety of social assistance services directly to clients. The activities in this division do not include accommodation services, except on a temporary basis.'
        },
        {
            'id': 79,
            'code': '90',
            'description': 'Creative, arts and entertainment activities',
            'details': 'This division includes the operation of facilities and provision of services to meet the cultural and entertainment interests of their customers. This includes the production and promotion of, and participation in, live performances, events or exhibits intended for public viewing; the provision of artistic, creative or technical skills for the production of artistic products and live performances.'
        },
        {
            'id': 80,
            'code': '91',
            'description': 'Libraries, archives, museums and other cultural activities',
            'details': 'This division includes the activities of libraries and archives; the operation of museums of all kinds, botanical and zoological gardens; the operation of historical sites and nature reserves activities.'
        },
        {
            'id': 81,
            'code': '92',
            'description': 'Gambling and betting activities',
            'details': 'This division includes the operation of gambling facilities such as casinos, bingo halls and video gaming terminals and the provision of gambling services, such as lotteries and off-track betting.'
        },
        {
            'id': 82,
            'code': '93',
            'description': 'Sports activities and amusement and recreation activities',
            'details': 'This division includes the provision of recreational, amusement and sports activities (except museums activities, preservation of historical sites, botanical and zoological gardens and nature reserves activities; and gambling and betting activities).'
        },
        {
            'id': 83,
            'code': '94',
            'description': 'Activities of membership organisations',
            'details': 'This division includes activities of organisations representing interests of special groups or promoting ideas to the general public. These organisations usually have a constituency of members, but their activities may involve and benefit non-members as well. The primary breakdown of this division is determined by the purpose that these organisations serve, namely interests of employers, self-employed individuals and the scientific community (group 94.1), interests of employees (group 94.2) or promotion of religious, political, cultural, educational or recreational ideas and activities (group 94.9).'
        },
        {
            'id': 84,
            'code': '95',
            'description': 'Repair of computers and personal and household goods',
            'details': 'This division includes the repair and maintenance of computers peripheral equipment such as desktops, laptops, computer terminals, storage devices and printers.'
        },
        {
            'id': 85,
            'code': '96',
            'description': 'Other personal service activities',
            'details': 'This division includes all service activities not mentioned elsewhere in the classification. Notably it includes types of services such as washing and (dry-)cleaning of textiles and fur products, hairdressing and other beauty treatment, funeral and related activities.'
        },
        {
            'id': 86,
            'code': '97',
            'description': 'Activities of households as employers of domestic personnel'
        },
        {
            'id': 87,
            'code': '98',
            'description': 'Undifferentiated goods- and services-producing activities of private households for own use',
            'details': 'This division includes the undifferentiated subsistence goods-producing and services-producing activities of households. \n\nHouseholds should be classified here only if it is impossible to identify a primary activity for the subsistence activities of the household. If the household engages in market activities, it should be classified according to the primary market activity carried out.'
        },
        {
            'id': 88,
            'code': '99',
            'description': 'Activities of extraterritorial organisations and bodies'
        }
    ],

    naceGroups: [
        {
            'id': 1,
            'code': '01.1',
            'description': 'Growing of non-perennial crops',
            'details': 'This group includes the growing of non-perennial crops, i.e. plants that do not last for more than two growing seasons. Included is the growing of these plants for the purpose of seed production.'
        },
        {
            'id': 2,
            'code': '01.2',
            'description': 'Growing of perennial crops',
            'details': 'This group includes the growing of perennial crops, i.e. plants that lasts for more than two growing seasons, either dying back after each season or growing continuously. Included is the growing of these plants for the purpose of seed production.'
        },
        {
            'id': 3,
            'code': '01.3',
            'description': 'Plant propagation'
        },
        {
            'id': 4,
            'code': '01.4',
            'description': 'Animal production',
            'details': 'This group includes raising (farming) and breeding of all animals, except aquatic animals.'
        },
        {
            'id': 5,
            'code': '01.5',
            'description': 'Mixed farming'
        }
    ],

    naceClasses: [
        {
            'id': 1,
            'code': '01.11',
            'description': 'Growing of cereals (except rice), leguminous crops and oil seeds',
            'details': 'This class includes all forms of growing of cereals, leguminous crops and oil seeds in open fields. The growing of these crops is often combined within agricultural units.\n\nThis class includes:\n- growing of cereals such as:\n  . wheat\n  . grain maize\n  . sorghum\n  . barley\n  . rye\n  . oats\n  . millets\n  . other cereals n.e.c.\n- growing of leguminous crops such as:\n  . beans\n  . broad beans\n  . chick peas\n  . cow peas\n  . lentils\n  . lupines\n  . peas\n  . pigeon peas\n  . other leguminous crops\n- growing of oil seeds such as:\n  . soya beans\n  . groundnuts\n  . castor bean\n  . linseed\n  . mustard seed\n  . niger seed\n  . rapeseed\n  . safflower seed\n  . sesame seed\n  . sunflower seed\n  . other oil seeds'
        },
        {
            'id': 2,
            'code': '01.12',
            'description': 'Growing of rice',
            'details': 'This class includes:\n- growing of rice (including organic farming and the growing of genetically modified rice)'
        },
        {
            'id': 3,
            'code': '01.13',
            'description': 'Growing of vegetables and melons, roots and tubers',
            'details': 'This class includes:\n- growing of leafy or stem vegetables such as:\n  . artichokes\n  . asparagus\n  . cabbages\n  . cauliflower and broccoli\n  . lettuce and chicory\n  . spinach\n  . other leafy or stem vegetables\n- growing of fruit bearing vegetables such as:\n  . cucumbers and gherkins\n  . eggplants (aubergines)\n  . tomatoes\n  . watermelons\n  . cantaloupes\n  . other melons and fruit-bearing vegetables\n- growing of root, bulb or tuberous vegetables such as:\n  . carrots\n  . turnips\n  . garlic\n  . onions (incl. shallots)\n  . leeks and other alliaceous vegetables\n  . other root, bulb or tuberous vegetables\n- growing of mushrooms and truffles\n- growing of vegetable seeds, including sugar beet seeds, excluding other beet seeds\n- growing of sugar beet\n- growing of other vegetables\n- growing of roots and tubers such as:\n  . potatoes\n  . sweet potatoes\n  . cassava\n  . yams\n  . other roots and tubers'
        },
        {
            'id': 4,
            'code': '01.14',
            'description': 'Growing of sugar cane'
        },
        {
            'id': 5,
            'code': '01.15',
            'description': 'Growing of tobacco',
            'details': 'This class includes:\n- growing of unmanufactured tobacco'
        },
        {
            'id': 6,
            'code': '01.16',
            'description': 'Growing of fibre crops',
            'details': 'This class includes:\n- growing of cotton\n- growing of jute, kenaf and other textile bast fibres\n- growing of flax and true hemp\n- growing of sisal and other textile fibre of the genus agave\n- growing of abaca, ramie and other vegetable textile fibres\n- growing of other fibre crops'
        },
        {
            'id': 7,
            'code': '01.19',
            'description': 'Growing of other non-perennial crops',
            'details': 'This class includes the growing of all other non-perennial crops:\n- growing of swedes, mangolds, fodder roots, clover, alfalfa, sainfoin, fodder maize and other grasses, forage kale and similar forage products \n- growing of beet seeds (excluding sugar beet seeds) and seeds of forage plants\n- growing of flowers\n- production of cut flowers and flower buds\n- growing of flower seeds'
        },
        {
            'id': 8,
            'code': '01.21',
            'description': 'Growing of grapes',
            'details': 'This class includes:\n- growing of wine grapes and table grapes in vineyards'
        }
    ],

    naceHierarchy: [
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 4,
            'classId': 20
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 4,
            'classId': 19
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 4,
            'classId': 18
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 4,
            'classId': 24
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 4,
            'classId': 23
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 4,
            'classId': 22
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 4,
            'classId': 21
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 4,
            'classId': 25
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 5,
            'classId': 26
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 2,
            'classId': 8
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 2,
            'classId': 12
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 2,
            'classId': 11
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 2,
            'classId': 10
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 2,
            'classId': 9
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 2,
            'classId': 16
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 2,
            'classId': 15
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 2,
            'classId': 14
        }
    ],

    eprtrSectors: [
        {
            'id': 1,
            'code': '1',
            'description': 'Energy sector'
        },
        {
            'id': 2,
            'code': '2',
            'description': 'Production and processing of metals'
        },
        {
            'id': 3,
            'code': '3',
            'description': 'Mineral industry'
        },
        {
            'id': 4,
            'code': '4',
            'description': 'Chemical industry'
        },
        {
            'id': 5,
            'code': '5',
            'description': 'Waste and wastewater management'
        },
        {
            'id': 6,
            'code': '6',
            'description': 'Paper and wood production and processing'
        },
        {
            'id': 7,
            'code': '7',
            'description': 'Intensive livestock production and aquaculture'
        },
        {
            'id': 8,
            'code': '8',
            'description': 'Animal and vegetable products from the food and beverage sector'
        },
        {
            'id': 9,
            'code': '9',
            'description': 'Other activities'
        }
    ],

    eprtrActivities: [
        {
            'id': 12,
            'code': '1. (a)',
            'description': 'Mineral oil and gas refineries'
        },
        {
            'id': 44,
            'code': '1. (b)',
            'description': 'Installations for gasification and liquefaction'
        },
        {
            'id': 20,
            'code': '1. (c)',
            'description': 'Thermal power stations and other combustion installations',
            'threshold': 'With a heat input of 50 megawatts (MW)'
        },
        {
            'id': 43,
            'code': '1. (d)',
            'description': 'Coke ovens'
        },
        {
            'id': 19,
            'code': '1. (e)',
            'description': 'Coal rolling mills',
            'threshold': 'With a capacity of 1 tonne per hour'
        },
        {
            'id': 30,
            'code': '1. (f)',
            'description': 'Installations for the manufacture of coal products and solid smokeless fuel'
        },
        {
            'id': 23,
            'code': '2. (a)',
            'description': 'Metal ore (including sulphide ore) roasting or sintering installations'
        },
        {
            'id': 3,
            'code': '2. (b)',
            'description': 'Installations for the production of pig iron or steel (primary or secondary melting) including continuous casting',
            'threshold': 'With a capacity of 2,5 tonnes per hour'
        },
        {
            'id': 21,
            'code': '2. (c)',
            'description': 'Installations for the processing of ferrous metals: (i) Hot-rolling mills, (ii) Smitheries with hammers, (iii) Application of protective fused metal coats',
            'threshold': '(i) With a capacity of 20 tonnes of crude steel per hour, (ii) With an energy of 50 kilojoules per hammer, where the calorific power used exceeds 20 MW, (iii) With an input of 2 tonnes of crude steel per hour'
        },
        {
            'id': 1,
            'code': '2. (d)',
            'description': 'Ferrous metal foundries With a production capacity of 20 tonnes per day',
            'threshold': 'With a production capacity of 20 tonnes per day'
        },
        {
            'id': 28,
            'code': '2. (e)',
            'description': 'Installations: (i) For the production of non-ferrous crude metals from ore, concentrates or secondary raw materials by metallurgical, chemical or electrolytic processes; (ii) For the smelting, including the alloying, of non-ferrous metals, including recovered products (refining, foundry casting, etc.) (i) n/a, (ii) With a melting capacity of 4 tonnes per day for lead and cadmium or 20 tonnes per day for all other metals'
        },
        {
            'id': 6,
            'code': '2. (f)',
            'description': 'Installations for surface treatment of metals and plastic materials using an electrolytic or chemical process',
            'threshold': 'Where the volume of the treatment vats equals 30 m3'
        },
        {
            'id': 31,
            'code': '3. (a)',
            'description': 'Underground mining and related operations'
        },
        {
            'id': 10,
            'code': '3. (b)',
            'description': 'Opencast mining and quarrying',
            'threshold': 'Where the surface of the area effectively under extractive operation equals 25 hectares'
        },
        {
            'id': 34,
            'code': '3. (c)',
            'description': 'Installations for the production of: (i) Cement clinker in rotary kilns, (ii) Lime in rotary kilns, (iii) Cement clinker or lime in other furnaces',
            'threshold': '(i) With a production capacity of 500 tonnes per day, (ii) With a production capacity of 50 tonnes per day, (iii) With a production capacity of 50 tonnes per day'
        },
        {
            'id': 14,
            'code': '3. (d)',
            'description': 'Installations for the production of asbestos and the manufacture of asbestos-based products'
        },
        {
            'id': 36,
            'code': '3. (e)',
            'description': 'Installations for the manufacture of glass, including glass fibre',
            'threshold': 'With a melting capacity of 20 tonnes per day'
        },
        {
            'id': 17,
            'code': '3. (f)',
            'description': 'Installations for melting mineral substances, including the production of mineral fibres',
            'threshold': 'With a melting capacity of 20 tonnes per day'
        },
        {
            'id': 39,
            'code': '3. (g)',
            'description': 'Installations for the manufacture of ceramic products by firing, in particular roofing tiles, bricks, refractory bricks, tiles, stoneware or porcelain',
            'threshold': 'With a production capacity of 75 tonnes per day, or with a kiln capacity of 4 m3 and with a setting density per kiln of 300 kg/m3'
        },
        {
            'id': 15,
            'code': '4. (a)',
            'description': 'Chemical installations for the production on an industrial scale of basic organic chemicals, such as: (i) Simple hydrocarbons, (ii) Oxygen-containing hydrocarbons, (iii) Sulphurous hydrocarbons, (iv) Nitrogenous hydrocarbons, (v) Phosphorus-containing hydrocarbons, (vi) Halogenic hydrocarbons, (vii) Organometallic compounds, (viii) Basic plastic materials, (ix) Synthetic rubbers, (x) Dyes and pigments, (xi) Surface-active agents and surfactants'
        },
        {
            'id': 41,
            'code': '4. (b)',
            'description': 'Chemical installations for the production on an industrial scale of basic inorganic chemicals, such as: (i) Gases, (ii) Acids, (iii) Bases, (iv) salts, (v) Non-metals, metal oxides or other inorganic compounds'
        },
        {
            'id': 8,
            'code': '4. (c)',
            'description': 'Chemical installations for the production on an industrial scale of phosphorous-, nitrogen- or potassium-based fertilisers'
        },
        {
            'id': 33,
            'code': '4. (d)',
            'description': 'Chemical installations for the production on an industrial scale of basic plant health products and of biocides'
        },
        {
            'id': 9,
            'code': '4. (e)',
            'description': 'Installations using a chemical or biological process for the production on an industrial scale of basic pharmaceutical products'
        },
        {
            'id': 35,
            'code': '4. (f)',
            'description': 'Installations for the production on an industrial scale of explosives and pyrotechnic products'
        },
        {
            'id': 22,
            'code': '5. (a)',
            'description': 'Installations for the recovery or disposal of hazardous waste',
            'threshold': 'Receiving 10 tonnes per day'
        },
        {
            'id': 7,
            'code': '5. (b)',
            'description': 'Installations for the incineration of non-hazardous waste',
            'threshold': 'With capacity of 3 tonnes per hour'
        },
        {
            'id': 29,
            'code': '5. (c)',
            'description': 'Installations for the disposal of non-hazardous waste',
            'threshold': 'With a capacity of 50 tonnes per day'
        },
        {
            'id': 5,
            'code': '5. (d)',
            'description': 'Landfills',
            'threshold': 'Receiving 10 tonnes per day or with a total capacity of 25 000 tonnes'
        },
        {
            'id': 27,
            'code': '5. (e)',
            'description': 'Installations for the disposal or recycling of animal carcasses and animal waste',
            'threshold': 'With a treatment capacity of 10 tonnes per day'
        },
        {
            'id': 4,
            'code': '5. (f)',
            'description': 'Urban waste-water treatment plants',
            'threshold': 'With a capacity of 100 000 population equivalents'
        },
        {
            'id': 26,
            'code': '5. (g)',
            'description': 'Independently operated industrial waste-water treatment plants which serve one or more activities of this annex',
            'threshold': 'With a capacity of 10 000 m3 per day (4)'
        },
        {
            'id': 40,
            'code': '6. (a)',
            'description': 'Industrial plants for the production of pulp from timber or similar fibrous materials'
        },
        {
            'id': 18,
            'code': '6. (b)',
            'description': 'Industrial plants for the production of paper and board and other primary wood products (such as chipboard, fibreboard and plywood)',
            'threshold': 'With a production capacity of 20 tonnes per day'
        },
        {
            'id': 37,
            'code': '6. (c)',
            'description': 'Industrial plants for the preservation of wood and wood products with chemicals',
            'threshold': 'With a production capacity of 50 m3 per day'
        },
        {
            'id': 11,
            'code': '7. (a)',
            'description': 'Installations for the intensive rearing of poultry or pigs',
            'threshold': '(i) With 40 000 places for poultry, (ii) With 2 000 places for production pigs (over 30 kg), (iii) With 750 places for sows'
        },
        {
            'id': 32,
            'code': '7. (b)',
            'description': 'Intensive aquaculture',
            'threshold': 'With a production capacity of 1000 tonnes of fish or shellfish per year'
        },
        {
            'id': 24,
            'code': '8. (a)',
            'description': 'Slaughterhouses',
            'threshold': 'With a carcass production capacity of 50 tonnes per day'
        },
        {
            'id': 2,
            'code': '8. (b)',
            'description': 'Treatment and processing intended for the production of food and beverage products from: (i) Animal raw materials (other than milk), (ii) Vegetable raw materials',
            'threshold': '(i) With a finished product production capacity of 75 tonnes per day, (ii) With a finished product production capacity of 300 tonnes per day (average value on a quarterly basis)'
        },
        {
            'id': 25,
            'code': '8. (c)',
            'description': 'Treatment and processing of milk',
            'threshold': 'With a capacity to receive 200 tonnes of milk per day (average value on an annual basis)'
        },
        {
            'id': 45,
            'code': '9. (a)',
            'description': 'Plants for the pre-treatment (operations such as washing, bleaching, mercerisation) or dyeing of fibres or textiles',
            'threshold': 'With a treatment capacity of 10 tonnes per day'
        },
        {
            'id': 13,
            'code': '9. (b)',
            'description': 'Plants for the tanning of hides and skins',
            'threshold': 'With a treatment capacity of 12 tonnes of finished product per day'
        },
        {
            'id': 38,
            'code': '9. (c)',
            'description': 'Installations for the surface treatment of substances, objects or products using organic solvents, in particular for dressing, printing, coating, degreasing, waterproofing, sizing, painting, cleaning or impregnating',
            'threshold': 'With a consumption capacity of 150 kg per hour or 200 tonnes per year'
        },
        {
            'id': 16,
            'code': '9. (d)',
            'description': 'Installations for the production of carbon (hard-burnt coal) or electrographite by means of incineration or graphitisation'
        },
        {
            'id': 42,
            'code': '9. (e)',
            'description': 'Installations for the building of, and painting or removal of paint from ships',
            'threshold': 'With a capacity for ships 100 m long'
        }
    ],

    eprtrHierarchys: [
        {
            'sectorId': 1,
            'activityId': 30
        },
        {
            'sectorId': 1,
            'activityId': 12
        },
        {
            'sectorId': 1,
            'activityId': 19
        },
        {
            'sectorId': 1,
            'activityId': 43
        },
        {
            'sectorId': 1,
            'activityId': 20
        },
        {
            'sectorId': 1,
            'activityId': 44
        },
        {
            'sectorId': 2,
            'activityId': 21
        },
        {
            'sectorId': 2,
            'activityId': 1
        },
        {
            'sectorId': 2,
            'activityId': 23
        },
        {
            'sectorId': 2,
            'activityId': 3
        },
        {
            'sectorId': 2,
            'activityId': 28
        },
        {
            'sectorId': 2,
            'activityId': 6
        },
        {
            'sectorId': 3,
            'activityId': 31
        },
        {
            'sectorId': 3,
            'activityId': 34
        },
        {
            'sectorId': 3,
            'activityId': 10
        },
        {
            'sectorId': 3,
            'activityId': 36
        },
        {
            'sectorId': 3,
            'activityId': 14
        },
        {
            'sectorId': 3,
            'activityId': 39
        },
        {
            'sectorId': 3,
            'activityId': 17
        },
        {
            'sectorId': 4,
            'activityId': 8
        },
        {
            'sectorId': 4,
            'activityId': 33
        },
        {
            'sectorId': 4,
            'activityId': 9
        },
        {
            'sectorId': 4,
            'activityId': 35
        },
        {
            'sectorId': 4,
            'activityId': 15
        },
        {
            'sectorId': 4,
            'activityId': 41
        },
        {
            'sectorId': 5,
            'activityId': 22
        },
        {
            'sectorId': 5,
            'activityId': 26
        },
        {
            'sectorId': 5,
            'activityId': 4
        },
        {
            'sectorId': 5,
            'activityId': 27
        },
        {
            'sectorId': 5,
            'activityId': 5
        },
        {
            'sectorId': 5,
            'activityId': 29
        },
        {
            'sectorId': 5,
            'activityId': 7
        },
        {
            'sectorId': 6,
            'activityId': 37
        },
        {
            'sectorId': 6,
            'activityId': 40
        },
        {
            'sectorId': 6,
            'activityId': 18
        },
        {
            'sectorId': 7,
            'activityId': 32
        },
        {
            'sectorId': 7,
            'activityId': 11
        },
        {
            'sectorId': 8,
            'activityId': 2
        },
        {
            'sectorId': 8,
            'activityId': 24
        },
        {
            'sectorId': 8,
            'activityId': 25
        },
        {
            'sectorId': 9,
            'activityId': 13
        },
        {
            'sectorId': 9,
            'activityId': 38
        },
        {
            'sectorId': 9,
            'activityId': 16
        },
        {
            'sectorId': 9,
            'activityId': 42
        },
        {
            'sectorId': 9,
            'activityId': 45
        }
    ]
};
