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
            'id': 11,
            'name': '101.01 Combustion plants > 300 MW'
        },
        {
            'id': 18,
            'name': '101.02 Combustion plants > 50 and < 300 MW'
        },
        {
            'id': 34,
            'name': '101.03 Combustion plants < 50MW'
        },
        {
            'id': 26,
            'name': '101.04 Gas turbines'
        },
        {
            'id': 31,
            'name': '101.05 Stationary engines'
        },
        {
            'id': 3,
            'name': '104.08 Coke oven furnaces'
        },
        {
            'id': 30,
            'name': '104.08 Petroleum product processing'
        },
        {
            'id': 27,
            'name': '104.08 Solid fuel transformation'
        },
        {
            'id': 20,
            'name': '104.11 Manufacture of plaster, asphalt, concrete, cement, glass, fibres, bricks, tiles or ceramic products'
        },
        {
            'id': 5,
            'name': '104.12 Primary and secondary processes in the manufacture of metal and fabricated metal products or sinter plants (involving fuel combustion).'
        },
        {
            'id': 15,
            'name': '105.01 Surface treatment of metals and plastics'
        },
        {
            'id': 23,
            'name': '105.03 Manufacture of food products and beverages'
        },
        {
            'id': 1,
            'name': '105.04 Manufacture of textiles and textile products'
        },
        {
            'id': 28,
            'name': '105.05 Processes in the manufacture of leather and leather products'
        },
        {
            'id': 17,
            'name': '105.06 Processes in the manufacture of wood and wood products'
        },
        {
            'id': 22,
            'name': '105.07 Manufacture of pulp, paper and paper products'
        },
        {
            'id': 10,
            'name': '105.08 Petroleum product processing'
        },
        {
            'id': 29,
            'name': '105.09 Manufacture of carbon or graphite'
        },
        {
            'id': 24,
            'name': '105.09 Manufacture of inorganic chemicals, NPK fertilisers, pesticides or explosives'
        },
        {
            'id': 33,
            'name': '105.09 Manufacture of organic chemicals'
        },
        {
            'id': 25,
            'name': '105.11 Manufacture of asbestos and asbestos-based products'
        },
        {
            'id': 19,
            'name': '105.12 Processes in the manufacture of metals and fabricated metal products or sinter plants (not involving fuel combustion)'
        },
        {
            'id': 16,
            'name': '105.14 Recycling of animal carcasses/waste'
        },
        {
            'id': 8,
            'name': '105.14 Regeneration/recovery of waste materials'
        },
        {
            'id': 14,
            'name': '107.01 Paint application'
        },
        {
            'id': 32,
            'name': '107.03 Manufacture of pharmaceutical and other solvent-based products'
        },
        {
            'id': 12,
            'name': '107.03 Manufacture or processing of solvent-based organic products'
        },
        {
            'id': 6,
            'name': '107.03 Textile finishing'
        },
        {
            'id': 9,
            'name': '109.03 Incineration of animal carcasses and animal waste'
        },
        {
            'id': 21,
            'name': '109.03 Waste incineration'
        },
        {
            'id': 7,
            'name': '109.06 Landfilling'
        },
        {
            'id': 13,
            'name': '109.07 Other waste treatment, transfer etc'
        },
        {
            'id': 2,
            'name': '110.04 Enteric fermentation'
        },
        {
            'id': 4,
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
        },
        {
            'id': 6,
            'code': '01.6',
            'description': 'Support activities to agriculture and post-harvest crop activities',
            'details': 'This group includes activities incidental to agricultural production and activities similar to agriculture not undertaken for production purposes (in the sense of harvesting agricultural products), done on a fee or contract basis.'
        },
        {
            'id': 7,
            'code': '01.7',
            'description': 'Hunting, trapping and related service activities'
        },
        {
            'id': 8,
            'code': '02.1',
            'description': 'Silviculture and other forestry activities'
        },
        {
            'id': 9,
            'code': '02.2',
            'description': 'Logging'
        },
        {
            'id': 10,
            'code': '02.3',
            'description': 'Gathering of wild growing non-wood products'
        },
        {
            'id': 11,
            'code': '02.4',
            'description': 'Support services to forestry'
        },
        {
            'id': 12,
            'code': '03.1',
            'description': 'Fishing',
            'details': 'This group includes "capture fishery", i.e. the hunting, collecting and gathering activities directed at removing or collecting live wild aquatic organisms (predominantly fish, molluscs and crustaceans) including plants from the oceanic, coastal or inland waters for human consumption and other purposes by hand or more usually by various types of fishing gear such as nets, lines and stationary traps. Such activities can be conducted on the intertidal shoreline (e.g. collection of molluscs such as mussels and oysters) or shore based netting, or from home-made dugouts or more commonly using commercially made boats in inshore, coastal waters or offshore waters. Such activities also include fishing in restocked water bodies.'
        },
        {
            'id': 13,
            'code': '03.2',
            'description': 'Aquaculture',
            'details': 'This group includes "aquaculture" (or aquafarming), i.e. the production process involving the culturing or farming (including harvesting) of aquatic organisms (fish, molluscs, crustaceans, plants, crocodiles, alligators and amphibians) using techniques designed to increase the production of the organisms in question beyond the natural capacity of the environment (for example regular stocking, feeding and protection from predators). \n\nCulturing/farming refers to the rearing up to their juvenile and/or adult phase under captive conditions of the above organisms.'
        },
        {
            'id': 14,
            'code': '05.1',
            'description': 'Mining of hard coal'
        },
        {
            'id': 15,
            'code': '05.2',
            'description': 'Mining of lignite'
        },
        {
            'id': 16,
            'code': '06.1',
            'description': 'Extraction of crude petroleum'
        },
        {
            'id': 17,
            'code': '06.2',
            'description': 'Extraction of natural gas'
        },
        {
            'id': 18,
            'code': '07.1',
            'description': 'Mining of iron ores'
        },
        {
            'id': 19,
            'code': '07.2',
            'description': 'Mining of non-ferrous metal ores',
            'details': 'This group includes the mining of non-ferrous metal ores.'
        },
        {
            'id': 20,
            'code': '08.1',
            'description': 'Quarrying of stone, sand and clay'
        },
        {
            'id': 21,
            'code': '08.9',
            'description': 'Mining and quarrying n.e.c.'
        },
        {
            'id': 22,
            'code': '09.1',
            'description': 'Support activities for petroleum and natural gas extraction'
        },
        {
            'id': 23,
            'code': '09.9',
            'description': 'Support activities for other mining and quarrying'
        },
        {
            'id': 24,
            'code': '10.1',
            'description': 'Processing and preserving of meat and production of meat products'
        },
        {
            'id': 25,
            'code': '10.2',
            'description': 'Processing and preserving of fish, crustaceans and molluscs'
        },
        {
            'id': 26,
            'code': '10.3',
            'description': 'Processing and preserving of fruit and vegetables'
        },
        {
            'id': 27,
            'code': '10.4',
            'description': 'Manufacture of vegetable and animal oils and fats',
            'details': 'This group includes the manufacture of crude and refined oils and fats from vegetable or animal materials, except rendering or refining of lard and other edible animal fats.'
        },
        {
            'id': 28,
            'code': '10.5',
            'description': 'Manufacture of dairy products'
        },
        {
            'id': 29,
            'code': '10.6',
            'description': 'Manufacture of grain mill products, starches and starch products',
            'details': 'This group includes the milling of flour or meal from grains or vegetables, the milling, cleaning and polishing of rice, as well as the manufacture of flour mixes or doughs from these products.'
        },
        {
            'id': 30,
            'code': '10.7',
            'description': 'Manufacture of bakery and farinaceous products',
            'details': 'This group includes the production of bakery products, macaroni, noodles and similar products.'
        },
        {
            'id': 31,
            'code': '10.8',
            'description': 'Manufacture of other food products',
            'details': 'This group includes the production of sugar and confectionery, prepared meals and dishes, coffee, tea and spices, as well as perishable and specialty food products.'
        },
        {
            'id': 32,
            'code': '10.9',
            'description': 'Manufacture of prepared animal feeds'
        },
        {
            'id': 33,
            'code': '11.0',
            'description': 'Manufacture of beverages'
        },
        {
            'id': 34,
            'code': '12.0',
            'description': 'Manufacture of tobacco products'
        },
        {
            'id': 35,
            'code': '13.1',
            'description': 'Preparation and spinning of textile fibres'
        },
        {
            'id': 36,
            'code': '13.2',
            'description': 'Weaving of textiles'
        },
        {
            'id': 37,
            'code': '13.3',
            'description': 'Finishing of textiles'
        },
        {
            'id': 38,
            'code': '13.9',
            'description': 'Manufacture of other textiles',
            'details': 'This group includes the manufacture of products produced from textiles, except wearing apparel, such as made-up textile articles, carpets and rugs, rope, narrow woven fabrics, trimmings etc.'
        },
        {
            'id': 39,
            'code': '14.1',
            'description': 'Manufacture of wearing apparel, except fur apparel',
            'details': 'This group includes manufacture of wearing apparel. The material used may be of any kind and may be coated, impregnated or rubberised.'
        },
        {
            'id': 40,
            'code': '14.2',
            'description': 'Manufacture of articles of fur'
        },
        {
            'id': 41,
            'code': '14.3',
            'description': 'Manufacture of knitted and crocheted apparel'
        },
        {
            'id': 42,
            'code': '15.1',
            'description': 'Tanning and dressing of leather; manufacture of luggage, handbags, saddlery and harness; dressing and dyeing of fur',
            'details': 'This group includes the manufacture of leather and fur and products thereof.'
        },
        {
            'id': 43,
            'code': '15.2',
            'description': 'Manufacture of footwear'
        },
        {
            'id': 44,
            'code': '16.1',
            'description': 'Sawmilling and planing of wood'
        },
        {
            'id': 45,
            'code': '16.2',
            'description': 'Manufacture of products of wood, cork, straw and plaiting materials',
            'details': 'This group includes the manufacture of products of wood, cork, straw or plaiting materials, including basic shapes as well as assembled products.'
        },
        {
            'id': 46,
            'code': '17.1',
            'description': 'Manufacture of pulp, paper and paperboard'
        },
        {
            'id': 47,
            'code': '17.2',
            'description': 'Manufacture of articles of paper and paperboard '
        },
        {
            'id': 48,
            'code': '18.1',
            'description': 'Printing and service activities related to printing',
            'details': 'This group includes printing of products, such as newspapers, books, periodicals, business forms, greeting cards, and other materials, and associated support activities, such as bookbinding, plate-making services, and data imaging. Printing can be done using various techniques and on different materials.'
        },
        {
            'id': 49,
            'code': '18.2',
            'description': 'Reproduction of recorded media'
        },
        {
            'id': 50,
            'code': '19.1',
            'description': 'Manufacture of coke oven products'
        },
        {
            'id': 51,
            'code': '19.2',
            'description': 'Manufacture of refined petroleum products'
        },
        {
            'id': 52,
            'code': '20.1',
            'description': 'Manufacture of basic chemicals, fertilisers and nitrogen compounds, plastics and synthetic rubber in primary forms',
            'details': 'This group includes the manufacture of basic chemical products, fertilisers and associated nitrogen compounds, as well as plastics and synthetic rubber in primary forms.'
        },
        {
            'id': 53,
            'code': '20.2',
            'description': 'Manufacture of pesticides and other agrochemical products'
        },
        {
            'id': 54,
            'code': '20.3',
            'description': 'Manufacture of paints, varnishes and similar coatings, printing ink and mastics'
        },
        {
            'id': 55,
            'code': '20.4',
            'description': 'Manufacture of soap and detergents, cleaning and polishing preparations, perfumes and toilet preparations'
        },
        {
            'id': 56,
            'code': '20.5',
            'description': 'Manufacture of other chemical products',
            'details': 'This group includes the manufacture of explosives and pyrotechnic products, glues, essential oils and chemical products n.e.c., e.g. photographic chemical material (including film and sensitised paper), composite diagnostic preparations etc.'
        },
        {
            'id': 57,
            'code': '20.6',
            'description': 'Manufacture of man-made fibres'
        },
        {
            'id': 58,
            'code': '21.1',
            'description': 'Manufacture of basic pharmaceutical products'
        },
        {
            'id': 59,
            'code': '21.2',
            'description': 'Manufacture of pharmaceutical preparations'
        },
        {
            'id': 60,
            'code': '22.1',
            'description': 'Manufacture of rubber products',
            'details': 'This group includes the manufacture of rubber products.'
        },
        {
            'id': 61,
            'code': '22.2',
            'description': 'Manufacture of plastic products',
            'details': 'This group comprises processing new or spent (i.e., recycled) plastics resins into intermediate or final products, using such processes as compression moulding; extrusion moulding; injection moulding; blow moulding; and casting. For most of these, the production process is such that a wide variety of products can be made.'
        },
        {
            'id': 62,
            'code': '23.1',
            'description': 'Manufacture of glass and glass products',
            'details': 'This group includes glass in all its forms, made by any process, and articles of glass.'
        },
        {
            'id': 63,
            'code': '23.2',
            'description': 'Manufacture of refractory products'
        },
        {
            'id': 64,
            'code': '23.3',
            'description': 'Manufacture of clay building materials'
        },
        {
            'id': 65,
            'code': '23.4',
            'description': 'Manufacture of other porcelain and ceramic products',
            'details': 'This group includes the manufacture of final products from mined or quarried non-metallic minerals, such as sand, gravel, stone or clay.'
        },
        {
            'id': 66,
            'code': '23.5',
            'description': 'Manufacture of cement, lime and plaster'
        },
        {
            'id': 67,
            'code': '23.6',
            'description': 'Manufacture of articles of concrete, cement and plaster'
        },
        {
            'id': 68,
            'code': '23.7',
            'description': 'Cutting, shaping and finishing of stone'
        },
        {
            'id': 69,
            'code': '23.9',
            'description': 'Manufacture of abrasive products and non-metallic mineral products n.e.c.',
            'details': 'This group includes the manufacture of other non-metallic mineral products.'
        },
        {
            'id': 70,
            'code': '24.1',
            'description': 'Manufacture of basic iron and steel and of ferro-alloys',
            'details': 'This group includes activities such as direct reduction of iron ore, production of pig iron in molten or solid form, conversion of pig iron into steel, manufacture of ferroalloys and manufacture of steel products.'
        },
        {
            'id': 71,
            'code': '24.2',
            'description': 'Manufacture of tubes, pipes, hollow profiles and related fittings, of steel'
        },
        {
            'id': 72,
            'code': '24.3',
            'description': 'Manufacture of other products of first processing of steel',
            'details': 'This group includes manufacturing other products by cold processing of steel.'
        },
        {
            'id': 73,
            'code': '24.4',
            'description': 'Manufacture of basic precious and other non-ferrous metals'
        },
        {
            'id': 74,
            'code': '24.5',
            'description': 'Casting of metals',
            'details': 'This group includes the manufacture of semi-finished products and various castings by a casting process.'
        },
        {
            'id': 75,
            'code': '25.1',
            'description': 'Manufacture of structural metal products',
            'details': 'This group includes the manufacture of structural metal products (such as metal frameworks or parts for construction).'
        },
        {
            'id': 76,
            'code': '25.2',
            'description': 'Manufacture of tanks, reservoirs and containers of metal',
            'details': 'This group includes the manufacture of tanks, central heating radiators and boilers.'
        },
        {
            'id': 77,
            'code': '25.3',
            'description': 'Manufacture of steam generators, except central heating hot water boilers',
            'details': 'This group includes the manufacture of steam generators.'
        },
        {
            'id': 78,
            'code': '25.4',
            'description': 'Manufacture of weapons and ammunition'
        },
        {
            'id': 79,
            'code': '25.5',
            'description': 'Forging, pressing, stamping and roll-forming of metal; powder metallurgy',
            'details': 'This group includes general activities for the treatment of metal, such as forging or pressing, which are typically carried out on a fee or contract basis.'
        },
        {
            'id': 80,
            'code': '25.6',
            'description': 'Treatment and coating of metals; machining',
            'details': 'This group includes general activities for the treatment of metal, such as plating, coating, engraving, boring, polishing, welding etc., which are typically carried out on a fee or contract basis.'
        },
        {
            'id': 81,
            'code': '25.7',
            'description': 'Manufacture of cutlery, tools and general hardware',
            'details': 'This group includes the manufacture of cutlery; metal hand tools and general hardware.'
        },
        {
            'id': 82,
            'code': '25.9',
            'description': 'Manufacture of other fabricated metal products',
            'details': 'This group includes the manufacture of a variety of metal products, such as cans and buckets; nails, bolts and nuts; metal household articles; metal fixtures; ships propellers and anchors; assembled railway track fixtures etc. for a variety of household and industrial uses.'
        },
        {
            'id': 83,
            'code': '26.1',
            'description': 'Manufacture of electronic components and boards'
        },
        {
            'id': 84,
            'code': '26.2',
            'description': 'Manufacture of computers and peripheral equipment'
        },
        {
            'id': 85,
            'code': '26.3',
            'description': 'Manufacture of communication equipment'
        },
        {
            'id': 86,
            'code': '26.4',
            'description': 'Manufacture of consumer electronics'
        },
        {
            'id': 87,
            'code': '26.5',
            'description': 'Manufacture of instruments and appliances for measuring, testing and navigation; watches and clocks',
            'details': 'This group includes the manufacture of measuring, testing and navigating equipment for various industrial and non-industrial purposes, including time-based measuring devices such as watches and clocks and related devices.'
        },
        {
            'id': 88,
            'code': '26.6',
            'description': 'Manufacture of irradiation, electromedical and electrotherapeutic equipment'
        },
        {
            'id': 89,
            'code': '26.7',
            'description': 'Manufacture of optical instruments and photographic equipment'
        },
        {
            'id': 90,
            'code': '26.8',
            'description': 'Manufacture of magnetic and optical media'
        },
        {
            'id': 91,
            'code': '27.1',
            'description': 'Manufacture of electric motors, generators, transformers and electricity distribution and control apparatus',
            'details': 'This group comprises the manufacture of power, distribution and specialty transformers; electric motors, generators, and motor generator sets.'
        },
        {
            'id': 92,
            'code': '27.2',
            'description': 'Manufacture of batteries and accumulators'
        },
        {
            'id': 93,
            'code': '27.3',
            'description': 'Manufacture of wiring and wiring devices',
            'details': 'This group includes the manufacture of current-carrying wiring devices and non current-carrying wiring devices for wiring electrical circuits regardless of material.'
        },
        {
            'id': 94,
            'code': '27.4',
            'description': 'Manufacture of electric lighting equipment'
        },
        {
            'id': 95,
            'code': '27.5',
            'description': 'Manufacture of domestic appliances',
            'details': 'This group includes the manufacture of small electric appliances and electric housewares, household-type fans, household-type vacuum cleaners, electric household-type floor care machines, household-type cooking appliances, household-type laundry equipment, household-type refrigerators, upright and chest freezers, and other electrical and non-electrical household appliances, such as dishwashers, water heaters, and garbage disposal units. This group includes the manufacture of appliances with electric, gas or other fuel sources.'
        },
        {
            'id': 96,
            'code': '27.9',
            'description': 'Manufacture of other electrical equipment'
        },
        {
            'id': 97,
            'code': '28.1',
            'description': 'Manufacture of general-purpose machinery'
        },
        {
            'id': 98,
            'code': '28.2',
            'description': 'Manufacture of other general-purpose machinery'
        },
        {
            'id': 99,
            'code': '28.3',
            'description': 'Manufacture of agricultural and forestry machinery'
        },
        {
            'id': 100,
            'code': '28.4',
            'description': 'Manufacture of metal forming machinery and machine tools',
            'details': 'This group includes the manufacture of metal forming machinery and machine tools, e.g. manufacture of machine tools for working metals and other materials (wood, bone, stone, hard rubber, hard plastics, cold glass etc.), including those using a laser beam, ultrasonic waves, plasma arc, magnetic pulse etc.'
        },
        {
            'id': 101,
            'code': '28.9',
            'description': 'Manufacture of other special-purpose machinery',
            'details': 'This group includes the manufacture of special-purpose machinery, i.e. machinery for exclusive use in an NACE industry or a small cluster of NACE industries.'
        },
        {
            'id': 102,
            'code': '29.1',
            'description': 'Manufacture of motor vehicles'
        },
        {
            'id': 103,
            'code': '29.2',
            'description': 'Manufacture of bodies (coachwork) for motor vehicles; manufacture of trailers and semi-trailers'
        },
        {
            'id': 104,
            'code': '29.3',
            'description': 'Manufacture of parts and accessories for motor vehicles'
        },
        {
            'id': 105,
            'code': '30.1',
            'description': 'Building of ships and boats',
            'details': 'This group includes the building of ships, boats and other floating structures for transportation and other commercial purposes, as well as for sports and recreational purposes.'
        },
        {
            'id': 106,
            'code': '30.2',
            'description': 'Manufacture of railway locomotives and rolling stock'
        },
        {
            'id': 107,
            'code': '30.3',
            'description': 'Manufacture of air and spacecraft and related machinery'
        },
        {
            'id': 108,
            'code': '30.4',
            'description': 'Manufacture of military fighting vehicles'
        },
        {
            'id': 109,
            'code': '30.9',
            'description': 'Manufacture of transport equipment n.e.c.',
            'details': 'This group includes the manufacture of transport equipment other than motor vehicles and rail, water, air or space transport equipment and military vehicles.'
        },
        {
            'id': 110,
            'code': '31.0',
            'description': 'Manufacture of furniture'
        },
        {
            'id': 111,
            'code': '32.1',
            'description': 'Manufacture of jewellery, bijouterie and related articles',
            'details': 'This group includes the manufacture of jewellery and imitation jewellery articles.'
        },
        {
            'id': 112,
            'code': '32.2',
            'description': 'Manufacture of musical instruments'
        },
        {
            'id': 113,
            'code': '32.3',
            'description': 'Manufacture of sports goods'
        },
        {
            'id': 114,
            'code': '32.4',
            'description': 'Manufacture of games and toys'
        },
        {
            'id': 115,
            'code': '32.5',
            'description': 'Manufacture of medical and dental instruments and supplies'
        },
        {
            'id': 116,
            'code': '32.9',
            'description': 'Manufacturing n.e.c.'
        },
        {
            'id': 117,
            'code': '33.1',
            'description': 'Repair of fabricated metal products, machinery and equipment',
            'details': 'This group includes the specialised repair of goods produced in the manufacturing sector with the aim to restore these metal products, machinery, equipment and other products to working order. The provision of general or routine maintenance (i.e. servicing) on such products to ensure they work efficiently and to prevent breakdown and unnecessary repairs is included.'
        },
        {
            'id': 118,
            'code': '33.2',
            'description': 'Installation of industrial machinery and equipment'
        },
        {
            'id': 119,
            'code': '35.1',
            'description': 'Electric power generation, transmission and distribution',
            'details': 'This group includes the generation of bulk electric power, transmission from generating facilities to distribution centres and distribution to end users.'
        },
        {
            'id': 120,
            'code': '35.2',
            'description': 'Manufacture of gas; distribution of gaseous fuels through mains',
            'details': 'This group includes the manufacture of gas and the distribution of natural or synthetic gas to the consumer through a system of mains. Gas marketers or brokers, which arrange the sale of natural gas over distribution systems operated by others, are included.\n \nThe separate operation of gas pipelines, typically done over long distances, connecting producers with distributors of gas, or between urban centres, is excluded from this group and classified with other pipeline transport activities.'
        },
        {
            'id': 121,
            'code': '35.3',
            'description': 'Steam and air conditioning supply'
        },
        {
            'id': 122,
            'code': '36.0',
            'description': 'Water collection, treatment and supply'
        },
        {
            'id': 123,
            'code': '37.0',
            'description': 'Sewerage'
        },
        {
            'id': 124,
            'code': '38.1',
            'description': 'Waste collection',
            'details': 'This group includes the collection of waste from households and businesses by means of refuse bins, wheeled bins, containers, etc. It includes collection of non-hazardous and hazardous waste e.g. waste from households, used batteries, used cooking oils and fats, waste oil from ships and used oil from garages, as well as construction and demolition waste.'
        },
        {
            'id': 125,
            'code': '38.2',
            'description': 'Waste treatment and disposal',
            'details': 'This group includes the disposal and treatment prior to disposal of various forms of waste by different means, such as treatment of organic waste with the aim of disposal; treatment and disposal of toxic live or dead animals and other contaminated waste; treatment and disposal of transition radioactive waste from hospitals, etc.; dumping of refuse on land or in water; burial or ploughing-under of refuse; disposal of used goods such as refrigerators to eliminate harmful waste; disposal of waste by incineration or combustion. Included is also energy recovery resulting from waste incineration process.'
        },
        {
            'id': 126,
            'code': '38.3',
            'description': 'Materials recovery'
        },
        {
            'id': 127,
            'code': '39.0',
            'description': 'Remediation activities and other waste management services'
        },
        {
            'id': 128,
            'code': '41.1',
            'description': 'Development of building projects'
        },
        {
            'id': 129,
            'code': '41.2',
            'description': 'Construction of residential and non-residential buildings',
            'details': 'This group includes the construction of complete residential or non-residential buildings, on own account for sale or on a fee or contract basis. Outsourcing parts or even the whole construction process is possible. If only specialised parts of the construction process are carried out, the activity is classified in division 43.'
        },
        {
            'id': 130,
            'code': '42.1',
            'description': 'Construction of roads and railways'
        },
        {
            'id': 131,
            'code': '42.2',
            'description': 'Construction of utility projects'
        },
        {
            'id': 132,
            'code': '42.9',
            'description': 'Construction of other civil engineering projects'
        },
        {
            'id': 133,
            'code': '43.1',
            'description': 'Demolition and site preparation',
            'details': 'This group includes activities of preparing a site for subsequent construction activities, including the removal of previously existing structures.'
        },
        {
            'id': 134,
            'code': '43.2',
            'description': 'Electrical, plumbing and other construction installation activities',
            'details': 'This group includes installation activities that support the functioning of a building as such, including installation of electrical systems, plumbing (water, gas and sewage systems), heat and air-conditioning systems, elevators etc.'
        },
        {
            'id': 135,
            'code': '43.3',
            'description': 'Building completion and finishing'
        },
        {
            'id': 136,
            'code': '43.9',
            'description': 'Other specialised construction activities'
        },
        {
            'id': 137,
            'code': '45.1',
            'description': 'Sale of motor vehicles'
        },
        {
            'id': 138,
            'code': '45.2',
            'description': 'Maintenance and repair of motor vehicles'
        },
        {
            'id': 139,
            'code': '45.3',
            'description': 'Sale of motor vehicle parts and accessories',
            'details': 'This group includes wholesale and retail trade of all kinds of parts, components, supplies, tools and accessories for motor vehicles, such as:\n  . rubber tyres and inner tubes for tyres\n  . spark plugs, batteries, lighting equipment and electrical parts'
        },
        {
            'id': 140,
            'code': '45.4',
            'description': 'Sale, maintenance and repair of motorcycles and related parts and accessories'
        },
        {
            'id': 141,
            'code': '46.1',
            'description': 'Wholesale on a fee or contract basis',
            'details': 'This group includes:\n- activities of commission agents, commodity brokers and all other wholesalers who trade on behalf and on the account of others\n- activities of those involved in bringing sellers and buyers together or undertaking commercial transactions on behalf of a principal, including on the Internet.'
        },
        {
            'id': 142,
            'code': '46.2',
            'description': 'Wholesale of agricultural raw materials and live animals'
        },
        {
            'id': 143,
            'code': '46.3',
            'description': 'Wholesale of food, beverages and tobacco'
        },
        {
            'id': 144,
            'code': '46.4',
            'description': 'Wholesale of household goods',
            'details': 'This group includes the wholesale of household goods, including textiles.'
        },
        {
            'id': 145,
            'code': '46.5',
            'description': 'Wholesale of information and communication equipment',
            'details': 'This group includes the wholesale of information and communications technology (ICT) equipment, i.e. computers, telecommunications equipment and parts.'
        },
        {
            'id': 146,
            'code': '46.6',
            'description': 'Wholesale of other machinery, equipment and supplies',
            'details': 'This group includes the wholesale of specialised machinery, equipment and supplies for all kinds of industries and general purpose machinery.'
        },
        {
            'id': 147,
            'code': '46.7',
            'description': 'Other specialised wholesale',
            'details': 'This group includes other specialised wholesale activities not classified in other groups of this division. This includes the wholesale of intermediate products, except agricultural, typically not for household use.'
        },
        {
            'id': 148,
            'code': '46.9',
            'description': 'Non-specialised wholesale trade'
        },
        {
            'id': 149,
            'code': '47.1',
            'description': 'Retail sale in non-specialised stores',
            'details': 'This group includes the retail sale of a variety of product lines in the same unit (non-specialised stores), such as supermarkets or department stores.'
        },
        {
            'id': 150,
            'code': '47.2',
            'description': 'Retail sale of food, beverages and tobacco in specialised stores'
        },
        {
            'id': 151,
            'code': '47.3',
            'description': 'Retail sale of automotive fuel in specialised stores'
        },
        {
            'id': 152,
            'code': '47.4',
            'description': 'Retail sale of information and communication equipment in specialised stores',
            'details': 'This group includes the retail sale of information and communications technology (ICT) equipment, such as computers and peripheral equipment, telecommunications equipment and consumer electronics, by specialised stores.'
        },
        {
            'id': 153,
            'code': '47.5',
            'description': 'Retail sale of other household equipment in specialised stores',
            'details': 'This group includes the retail sale of household equipment, such as textiles, hardware, carpets, electrical appliances or furniture, in specialised stores.'
        },
        {
            'id': 154,
            'code': '47.6',
            'description': 'Retail sale of cultural and recreation goods in specialised stores',
            'details': 'This group includes the retail sale in specialised stores of cultural and recreation goods, such as books, newspapers, music and video recordings, sporting equipment, games and toys.'
        },
        {
            'id': 155,
            'code': '47.7',
            'description': 'Retail sale of other goods in specialised stores',
            'details': 'This group includes the sale in specialised stores carrying a particular line of products not included in other parts of the classification, such as clothing, footwear and leather articles, pharmaceutical and medical goods, watches, souvenirs, cleaning materials, weapons, flowers and pets and others.'
        },
        {
            'id': 156,
            'code': '47.8',
            'description': 'Retail sale via stalls and markets',
            'details': 'This group includes the retail sale of any kind of new or second-hand product in a usually movable stall either along a public road or at a fixed marketplace.'
        },
        {
            'id': 157,
            'code': '47.9',
            'description': 'Retail trade not in stores, stalls or markets',
            'details': 'This group includes retail sale activities by mail order houses, over the Internet, through door-to-door sales, vending machines etc.'
        },
        {
            'id': 158,
            'code': '49.1',
            'description': 'Passenger rail transport, interurban'
        },
        {
            'id': 159,
            'code': '49.2',
            'description': 'Freight rail transport'
        },
        {
            'id': 160,
            'code': '49.3',
            'description': 'Other passenger land transport ',
            'details': 'This group includes all land-based passenger transport activities other than rail transport. However, rail transport as part of urban or suburban transport systems is included there.'
        },
        {
            'id': 161,
            'code': '49.4',
            'description': 'Freight transport by road and removal services',
            'details': 'This group includes all land-based freight transport activities other than rail transport.'
        },
        {
            'id': 162,
            'code': '49.5',
            'description': 'Transport via pipeline'
        },
        {
            'id': 163,
            'code': '50.1',
            'description': 'Sea and coastal passenger water transport',
            'details': 'This group includes the transport of passengers on vessels designed for operating on sea or coastal waters.'
        },
        {
            'id': 164,
            'code': '50.2',
            'description': 'Sea and coastal freight water transport',
            'details': 'This group includes the transport of freight on vessels designed for operating on sea or coastal waters.'
        },
        {
            'id': 165,
            'code': '50.3',
            'description': 'Inland passenger water transport',
            'details': 'This group includes the transport of passengers on inland waters, involving vessels that are not suitable for sea transport.'
        },
        {
            'id': 166,
            'code': '50.4',
            'description': 'Inland freight water transport',
            'details': 'This group includes the transport of freight on inland waters, involving vessels that are not suitable for sea transport.'
        },
        {
            'id': 167,
            'code': '51.1',
            'description': 'Passenger air transport'
        },
        {
            'id': 168,
            'code': '51.2',
            'description': 'Freight air transport and space transport'
        },
        {
            'id': 169,
            'code': '52.1',
            'description': 'Warehousing and storage'
        },
        {
            'id': 170,
            'code': '52.2',
            'description': 'Support activities for transportation',
            'details': 'This group includes activities supporting the transport of passengers or freight, such as operation of parts of the transport infrastructure or activities related to handling freight immediately before or after transport or between transport segments. The operation and maintenance of all transport facilities is included.'
        },
        {
            'id': 171,
            'code': '53.1',
            'description': 'Postal activities under universal service obligation'
        },
        {
            'id': 172,
            'code': '53.2',
            'description': 'Other postal and courier activities'
        },
        {
            'id': 173,
            'code': '55.1',
            'description': 'Hotels and similar accommodation'
        },
        {
            'id': 174,
            'code': '55.2',
            'description': 'Holiday and other short-stay accommodation'
        },
        {
            'id': 175,
            'code': '55.3',
            'description': 'Camping grounds, recreational vehicle parks and trailer parks'
        },
        {
            'id': 176,
            'code': '55.9',
            'description': 'Other accommodation'
        },
        {
            'id': 177,
            'code': '56.1',
            'description': 'Restaurants and mobile food service activities'
        },
        {
            'id': 178,
            'code': '56.2',
            'description': 'Event catering and other food service activities',
            'details': 'This group includes catering activities for individual events or for a specified period of time and the operation of food concessions, such as at sports or similar facilities.'
        },
        {
            'id': 179,
            'code': '56.3',
            'description': 'Beverage serving activities'
        },
        {
            'id': 180,
            'code': '58.1',
            'description': 'Publishing of books, periodicals and other publishing activities',
            'details': 'This group includes activities of publishing books, newspapers, magazines and other periodicals, directories and mailing lists, and other works such as photos, engravings, postcards, timetables, forms, posters and reproductions of works of art. These works are characterised by the intellectual creativity required in their development and are usually protected by copyright.'
        },
        {
            'id': 181,
            'code': '58.2',
            'description': 'Software publishing'
        },
        {
            'id': 182,
            'code': '59.1',
            'description': 'Motion picture, video and television programme activities',
            'details': 'This group includes production of theatrical and non-theatrical motion pictures whether on film, video tape, DVD or other media, including digital distribution, for direct projection in theatres or for broadcasting on television; supporting activities such as film editing, cutting, dubbing etc.; distribution of motion pictures or other film productions (video tapes, DVDs, etc) to other industries; as well as their projection.'
        },
        {
            'id': 183,
            'code': '59.2',
            'description': 'Sound recording and music publishing activities'
        },
        {
            'id': 184,
            'code': '60.1',
            'description': 'Radio broadcasting'
        },
        {
            'id': 185,
            'code': '60.2',
            'description': 'Television programming and broadcasting activities'
        },
        {
            'id': 186,
            'code': '61.1',
            'description': 'Wired telecommunications activities'
        },
        {
            'id': 187,
            'code': '61.2',
            'description': 'Wireless telecommunications activities'
        },
        {
            'id': 188,
            'code': '61.3',
            'description': 'Satellite telecommunications activities'
        },
        {
            'id': 189,
            'code': '61.9',
            'description': 'Other telecommunications activities'
        },
        {
            'id': 190,
            'code': '62.0',
            'description': 'Computer programming, consultancy and related activities'
        },
        {
            'id': 191,
            'code': '63.1',
            'description': 'Data processing, hosting and related activities; web portals',
            'details': 'This group includes the provision of infrastructure for hosting, data processing services and related activities, as well as the provision of search facilities and other portals for the Internet.'
        },
        {
            'id': 192,
            'code': '63.9',
            'description': 'Other information service activities',
            'details': 'This group includes the activities of news agencies and all other remaining information service activities.'
        },
        {
            'id': 193,
            'code': '64.1',
            'description': 'Monetary intermediation',
            'details': 'This group includes the obtaining of funds in the form of transferable deposits, i.e. funds that are fixed in money terms, obtained on a day-to-day basis and, apart from central banking, obtained from non-financial sources.'
        },
        {
            'id': 194,
            'code': '64.2',
            'description': 'Activities of holding companies'
        },
        {
            'id': 195,
            'code': '64.3',
            'description': 'Trusts, funds and similar financial entities'
        },
        {
            'id': 196,
            'code': '64.9',
            'description': 'Other financial service activities, except insurance and pension funding',
            'details': 'This group includes financial service activities other than those conducted by monetary institutions.'
        },
        {
            'id': 197,
            'code': '65.1',
            'description': 'Insurance',
            'details': 'This group includes life insurance with or without a substantial savings element and non-life insurance.'
        },
        {
            'id': 198,
            'code': '65.2',
            'description': 'Reinsurance'
        },
        {
            'id': 199,
            'code': '65.3',
            'description': 'Pension funding'
        },
        {
            'id': 200,
            'code': '66.1',
            'description': 'Activities auxiliary to financial services, except insurance and pension funding',
            'details': 'This group includes the furnishing of physical or electronic marketplaces for the purpose of facilitating the buying and selling of stocks, stock options, bonds or commodity contracts.'
        },
        {
            'id': 201,
            'code': '66.2',
            'description': 'Activities auxiliary to insurance and pension funding',
            'details': 'This group includes acting as agents (i.e. brokers) in selling annuities and insurance policies or provide other employee benefits and insurance and pension related services such as claims adjustment and third party administration.'
        },
        {
            'id': 202,
            'code': '66.3',
            'description': 'Fund management activities'
        },
        {
            'id': 203,
            'code': '68.1',
            'description': 'Buying and selling of own real estate'
        },
        {
            'id': 204,
            'code': '68.2',
            'description': 'Rental and operating of own or leased real estate'
        },
        {
            'id': 205,
            'code': '68.3',
            'description': 'Real estate activities on a fee or contract basis'
        },
        {
            'id': 206,
            'code': '69.1',
            'description': 'Legal activities'
        },
        {
            'id': 207,
            'code': '69.2',
            'description': 'Accounting, bookkeeping and auditing activities; tax consultancy'
        },
        {
            'id': 208,
            'code': '70.1',
            'description': 'Activities of head offices'
        },
        {
            'id': 209,
            'code': '70.2',
            'description': 'Management consultancy activities'
        },
        {
            'id': 210,
            'code': '71.1',
            'description': 'Architectural and engineering activities and related technical consultancy',
            'details': 'This group includes the provision of architectural services, engineering services, drafting services, building inspection services and surveying and mapping services and the like.'
        },
        {
            'id': 211,
            'code': '71.2',
            'description': 'Technical testing and analysis'
        },
        {
            'id': 212,
            'code': '72.1',
            'description': 'Research and experimental development on natural sciences and engineering',
            'details': 'This group comprises basic research, applied research, experimental development in natural sciences and engineering.'
        },
        {
            'id': 213,
            'code': '72.2',
            'description': 'Research and experimental development on social sciences and humanities'
        },
        {
            'id': 214,
            'code': '73.1',
            'description': 'Advertising'
        },
        {
            'id': 215,
            'code': '73.2',
            'description': 'Market research and public opinion polling'
        },
        {
            'id': 216,
            'code': '74.1',
            'description': 'Specialised design activities'
        },
        {
            'id': 217,
            'code': '74.2',
            'description': 'Photographic activities'
        },
        {
            'id': 218,
            'code': '74.3',
            'description': 'Translation and interpretation activities'
        },
        {
            'id': 219,
            'code': '74.9',
            'description': 'Other professional, scientific and technical activities n.e.c.'
        },
        {
            'id': 220,
            'code': '75.0',
            'description': 'Veterinary activities'
        },
        {
            'id': 221,
            'code': '77.1',
            'description': 'Rental and leasing of motor vehicles'
        },
        {
            'id': 222,
            'code': '77.2',
            'description': 'Rental and leasing of personal and household goods',
            'details': 'This group includes the rental of personal and household goods as well as rental of recreational and sports equipment and video tapes. Activities generally include short-term rental of goods although in some instances, the goods may be leased for longer periods of time.'
        },
        {
            'id': 223,
            'code': '77.3',
            'description': 'Rental and leasing of other machinery, equipment and tangible goods'
        },
        {
            'id': 224,
            'code': '77.4',
            'description': 'Leasing of intellectual property and similar products, except copyrighted works'
        },
        {
            'id': 225,
            'code': '78.1',
            'description': 'Activities of employment placement agencies'
        },
        {
            'id': 226,
            'code': '78.2',
            'description': 'Temporary employment agency activities'
        },
        {
            'id': 227,
            'code': '78.3',
            'description': 'Other human resources provision'
        },
        {
            'id': 228,
            'code': '79.1',
            'description': 'Travel agency and tour operator activities',
            'details': 'This group includes the activities of agencies, primarily engaged in selling travel, tour, transportation and accommodation services to the general public and commercial clients and the activity of arranging and assembling tours that are sold through travel agencies or directly by agents such as tour operators.'
        },
        {
            'id': 229,
            'code': '79.9',
            'description': 'Other reservation service and related activities'
        },
        {
            'id': 230,
            'code': '80.1',
            'description': 'Private security activities'
        },
        {
            'id': 231,
            'code': '80.2',
            'description': 'Security systems service activities'
        },
        {
            'id': 232,
            'code': '80.3',
            'description': 'Investigation activities'
        },
        {
            'id': 233,
            'code': '81.1',
            'description': 'Combined facilities support activities'
        },
        {
            'id': 234,
            'code': '81.2',
            'description': 'Cleaning activities',
            'details': 'This group includes the activities of general interior cleaning of all types of buildings, exterior cleaning of buildings, specialised cleaning activities for buildings or other specialised cleaning activities, cleaning of industrial machinery, cleaning of the inside of road and sea tankers, disinfecting and extermination activities for buildings and industrial machinery, bottle cleaning, street sweeping, snow and ice removal.'
        },
        {
            'id': 235,
            'code': '81.3',
            'description': 'Landscape service activities'
        },
        {
            'id': 236,
            'code': '82.1',
            'description': 'Office administrative and support activities',
            'details': 'This group includes the provision of a range of day-to-day office administrative services, such as financial planning, billing and record keeping, personnel and physical distribution and logistics for others on a contract or fee basis.'
        },
        {
            'id': 237,
            'code': '82.2',
            'description': 'Activities of call centres'
        },
        {
            'id': 238,
            'code': '82.3',
            'description': 'Organisation of conventions and trade shows'
        },
        {
            'id': 239,
            'code': '82.9',
            'description': 'Business support service activities n.e.c.',
            'details': 'This group includes the activities of collection agencies, credit bureaus and all support activities typically provided to businesses not elsewhere classified.'
        },
        {
            'id': 240,
            'code': '84.1',
            'description': 'Administration of the State and the economic and social policy of the community',
            'details': 'This group includes general administration (e.g. executive, legislative, financial administration etc. at all levels of government) and supervision in the field of social and economic life.'
        },
        {
            'id': 241,
            'code': '84.2',
            'description': 'Provision of services to the community as a whole',
            'details': 'This group includes foreign affairs, defence and public order and safety activities.'
        },
        {
            'id': 242,
            'code': '84.3',
            'description': 'Compulsory social security activities'
        },
        {
            'id': 243,
            'code': '85.1',
            'description': 'Pre-primary education'
        },
        {
            'id': 244,
            'code': '85.2',
            'description': 'Primary education'
        },
        {
            'id': 245,
            'code': '85.3',
            'description': 'Secondary education',
            'details': 'This group includes the provision of general secondary and technical and vocational secondary education.'
        },
        {
            'id': 246,
            'code': '85.4',
            'description': 'Higher education',
            'details': 'This group includes the furnishing of post-secondary non-tertiary and academic courses and granting of degrees at baccalaureate, graduate or post-graduate level. The requirement for admission is a diploma at least at upper secondary education level.'
        },
        {
            'id': 247,
            'code': '85.5',
            'description': 'Other education',
            'details': 'This group includes general continuing education and continuing vocational education and training for any profession, hobby or self-development purposes.\n\nIt includes camps and schools offering instruction in athletic activities to groups or individuals, foreign language instruction, instruction in the arts, drama or music or other instruction or specialised training, not comparable to the education in groups 85.1 - 85.4.'
        },
        {
            'id': 248,
            'code': '85.6',
            'description': 'Educational support activities'
        },
        {
            'id': 249,
            'code': '86.1',
            'description': 'Hospital activities'
        },
        {
            'id': 250,
            'code': '86.2',
            'description': 'Medical and dental practice activities',
            'details': "This group includes medical consultation and treatment done by general medical practitioners and medical specialists, including surgeons, dentists etc.\n\nThese activities can be carried out in private practice, group practices and in hospital outpatient clinics, and in clinics such as those attached to firms, schools, homes for the aged, labour organisations and fraternal organisations, as well as in patients' homes."
        },
        {
            'id': 251,
            'code': '86.9',
            'description': 'Other human health activities'
        },
        {
            'id': 252,
            'code': '87.1',
            'description': 'Residential nursing care activities'
        },
        {
            'id': 253,
            'code': '87.2',
            'description': 'Residential care activities for mental retardation, mental health and substance abuse'
        },
        {
            'id': 254,
            'code': '87.3',
            'description': 'Residential care activities for the elderly and disabled'
        },
        {
            'id': 255,
            'code': '87.9',
            'description': 'Other residential care activities'
        },
        {
            'id': 256,
            'code': '88.1',
            'description': 'Social work activities without accommodation for the elderly and disabled'
        },
        {
            'id': 257,
            'code': '88.9',
            'description': 'Other social work activities without accommodation'
        },
        {
            'id': 258,
            'code': '90.0',
            'description': 'Creative, arts and entertainment activities',
            'details': 'This group includes activities in the creative and performing arts and related activities.'
        },
        {
            'id': 259,
            'code': '91.0',
            'description': 'Libraries, archives, museums and other cultural activities'
        },
        {
            'id': 260,
            'code': '92.0',
            'description': 'Gambling and betting activities'
        },
        {
            'id': 261,
            'code': '93.1',
            'description': 'Sports activities',
            'details': 'This group includes the operation of sports facilities; activities of sports teams or clubs primarily participating in live sports events before a paying audience; independent athletes engaged in participating in live sporting or racing events before a paying audience; owners of racing participants such as cars, dogs, horses, etc. primarily engaged in entering them in racing events or other spectator sports events; sports trainers providing specialised services to support participants in sports events or competitions; operators of arenas and stadiums; other activities of organising, promoting or managing sports events, n.e.c.'
        },
        {
            'id': 262,
            'code': '93.2',
            'description': 'Amusement and recreation activities',
            'details': 'This group includes a wide range of units that operate facilities or provide services to meet the varied recreational interests of their patrons. It includes the operation of a variety of attractions, such as mechanical rides, water rides, games, shows, theme exhibits and picnic grounds.'
        },
        {
            'id': 263,
            'code': '94.1',
            'description': 'Activities of business, employers and professional membership organisations',
            'details': 'This group includes the activities of units that promote the interests of the members of business and employers organisations.'
        },
        {
            'id': 264,
            'code': '94.2',
            'description': 'Activities of trade unions'
        },
        {
            'id': 265,
            'code': '94.9',
            'description': 'Activities of other membership organisations',
            'details': 'This group includes the activities of units (except business and employers organisations, professional organisations, trade unions) that promote the interests of their members.'
        },
        {
            'id': 266,
            'code': '95.1',
            'description': 'Repair of computers and communication equipment',
            'details': 'This group includes the repair and maintenance of computers and peripheral equipment and communications equipment.'
        },
        {
            'id': 267,
            'code': '95.2',
            'description': 'Repair of personal and household goods',
            'details': 'This group includes the repair and servicing of personal and household goods.'
        },
        {
            'id': 268,
            'code': '96.0',
            'description': 'Other personal service activities'
        },
        {
            'id': 269,
            'code': '97.0',
            'description': 'Activities of households as employers of domestic personnel'
        },
        {
            'id': 270,
            'code': '98.1',
            'description': 'Undifferentiated goods-producing activities of private households for own use'
        },
        {
            'id': 271,
            'code': '98.2',
            'description': 'Undifferentiated service-producing activities of private households for own use'
        },
        {
            'id': 272,
            'code': '99.0',
            'description': 'Activities of extraterritorial organisations and bodies'
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
        },
        {
            'id': 9,
            'code': '01.22',
            'description': 'Growing of tropical and subtropical fruits',
            'details': 'This class includes:\n- growing of tropical and subtropical fruits:\n  . avocados\n  . bananas and plantains\n  . dates\n  . figs\n  . mangoes\n  . papayas\n  . pineapples\n  . other tropical and subtropical fruits'
        },
        {
            'id': 10,
            'code': '01.23',
            'description': 'Growing of citrus fruits',
            'details': 'This class includes:\n- growing of citrus fruits:\n  . grapefruit and pomelo\n  . lemons and limes\n  . oranges\n  . tangerines, mandarins and clementines\n  . other citrus fruits'
        },
        {
            'id': 11,
            'code': '01.24',
            'description': 'Growing of pome fruits and stone fruits',
            'details': 'This class includes:\n- growing of pome fruits and stone fruits:\n  . apples\n  . apricots\n  . cherries and sour cherries\n  . peaches and nectarines\n  . pears and quinces\n  . plums and sloes\n  . other pome fruits and stone fruits'
        },
        {
            'id': 12,
            'code': '01.25',
            'description': 'Growing of other tree and bush fruits and nuts',
            'details': 'This class includes:\n- growing of berries:\n  . blueberries\n  . currants\n  . gooseberries\n  . kiwi fruit\n  . raspberries\n  . strawberries\n  . other berries\n- growing of fruit seeds\n- growing of edible nuts:\n  . almonds\n  . cashew nuts\n  . chestnuts\n  . hazelnuts\n  . pistachios\n  . walnuts\n  . other nuts\n- growing of other tree and bush fruits:\n  . locust beans'
        },
        {
            'id': 13,
            'code': '01.26',
            'description': 'Growing of oleaginous fruits',
            'details': 'This class includes:\n- growing of oleaginous fruits:\n  . coconuts\n  . olives\n  . oil palms\n  . other oleaginous fruits'
        },
        {
            'id': 14,
            'code': '01.27',
            'description': 'Growing of beverage crops',
            'details': 'This class includes:\n- growing of beverage crops:\n  . coffee\n  . tea\n  . maté\n  . cocoa \n  . other beverage crops'
        },
        {
            'id': 15,
            'code': '01.28',
            'description': 'Growing of spices, aromatic, drug and pharmaceutical crops',
            'details': 'This class includes:\n- growing of perennial and non-perennial spices and aromatic crops:\n  . pepper (piper sop.)\n  . chillies and peppers (capsicum sop.)\n  . nutmeg, mace and cardamoms\n  . anise, badian and fennel\n  . cinnamon (canella)\n  . cloves\n  . ginger\n  . vanilla\n  . hops\n  . other spices and aromatic crops\n- growing of drug and narcotic crops'
        },
        {
            'id': 16,
            'code': '01.29',
            'description': 'Growing of other perennial crops',
            'details': 'This class includes:\n- growing of rubber trees for harvesting of latex\n- growing of Christmas trees\n- growing of trees for extraction of sap\n- growing of vegetable materials of a kind used primarily for plaiting'
        },
        {
            'id': 17,
            'code': '01.30',
            'description': 'Plant propagation',
            'details': 'This class includes the production of all vegetative planting materials including cuttings, suckers and seedlings for direct plant propagation or to create plant grafting stock into which selected scion is grafted for eventual planting to produce crops.\n\nThis class includes:\n- growing of plants for planting\n- growing of plants for ornamental purposes, including turf for transplanting\n- growing of live plants for bulbs, tubers and roots; cuttings and slips; mushroom spawn \n- operation of tree nurseries, except forest tree nurseries'
        },
        {
            'id': 18,
            'code': '01.41',
            'description': 'Raising of dairy cattle',
            'details': 'This class includes:\n- raising and breeding of dairy cattle\n- production of raw milk from cows or buffaloes'
        },
        {
            'id': 19,
            'code': '01.42',
            'description': 'Raising of other cattle and buffaloes',
            'details': 'This class includes:\n- raising and breeding of cattle and buffaloes for meat\n- production of bovine semen'
        },
        {
            'id': 20,
            'code': '01.43',
            'description': 'Raising of horses and other equines',
            'details': 'This class includes:\n- raising and breeding of horses, asses, mules or hinnies'
        },
        {
            'id': 21,
            'code': '01.44',
            'description': 'Raising of camels and camelids',
            'details': 'This class includes:\n- raising and breeding of camels (dromedary) and camelids'
        },
        {
            'id': 22,
            'code': '01.45',
            'description': 'Raising of sheep and goats',
            'details': 'This class includes:\n- raising and breeding of sheep and goats\n- production of raw sheep or goat milk\n- production of raw wool'
        },
        {
            'id': 23,
            'code': '01.46',
            'description': 'Raising of swine/pigs',
            'details': 'This class includes:\n- raising and breeding of swine (pigs)'
        },
        {
            'id': 24,
            'code': '01.47',
            'description': 'Raising of poultry',
            'details': 'This class includes:\n- raising and breeding of poultry:\n  . chickens, turkeys, ducks, geese and guinea fowls\n- production of eggs from poultry\n- operation of poultry hatcheries'
        },
        {
            'id': 25,
            'code': '01.49',
            'description': 'Raising of other animals',
            'details': 'This class includes:\n- raising and breeding of semi-domesticated or other live animals:\n  . ostriches and emus\n  . other birds (except poultry)\n  . insects\n  . rabbits and other fur animals\n- production of fur skins, reptile or bird skins from ranching operation\n- operation of worm farms, land mollusc farms, snail farms etc.\n- raising of silk worms, production of silk worm cocoons\n- bee-keeping and production of honey and beeswax\n- raising and breeding of pet animals (except fish):\n  . cats and dogs\n  . birds, such as parakeets etc.\n  . hamsters etc.\n- raising of diverse animals'
        },
        {
            'id': 26,
            'code': '01.50',
            'description': 'Mixed farming',
            'details': 'This class includes the combined production of crops and animals without a specialised production of crops or animals. The size of the overall farming operation is not a determining factor. If either production of crops or animals in a given unit is 66% or more of standard gross margins, the combined activity should not be included here, but allocated to crop or animal farming.'
        },
        {
            'id': 27,
            'code': '01.61',
            'description': 'Support activities for crop production',
            'details': 'This class includes:\n- agricultural activities on a fee or contract basis:\n  . preparation of fields\n  . establishing a crop\n  . treatment of crops\n  . crop spraying, including by air\n  . trimming of fruit trees and vines\n  . transplanting of rice, thinning of beets\n  . harvesting\n  . pest control (including rabbits) in connection with agriculture\n- maintenance of agricultural land in good agricultural and environmental condition\n- operation of agricultural irrigation equipment'
        },
        {
            'id': 28,
            'code': '01.62',
            'description': 'Support activities for animal production',
            'details': 'This class includes:\n- agricultural activities on a fee or contract basis:\n  . activities to promote propagation, growth and output of animals\n  . herd testing services, droving services, agistment services, poultry caponising, coop cleaning etc.\n  . activities related to artificial insemination\n  . stud services\n  . sheep shearing\n  . farm animal boarding and care'
        },
        {
            'id': 29,
            'code': '01.63',
            'description': 'Post-harvest crop activities',
            'details': 'This class includes:\n- preparation of crops for primary markets, i.e. cleaning, trimming, grading, disinfecting\n- cotton ginning\n- preparation of tobacco leaves, e.g. drying\n- preparation of cocoa beans, e.g. peeling\n- waxing of fruit\n- sun-drying of fruit and vegetables'
        },
        {
            'id': 30,
            'code': '01.64',
            'description': 'Seed processing for propagation',
            'details': 'This class includes all post-harvest activities aimed at improving the propagation quality of seed through the removal of non-seed materials, undersized, mechanically or insect-damaged and immature seeds as well as removing the seed moisture to a safe level for seed storage. This activity includes the drying, cleaning, grading and treating of seeds until they are marketed. The treatment of genetically modified seeds is included here.'
        },
        {
            'id': 31,
            'code': '01.70',
            'description': 'Hunting, trapping and related service activities',
            'details': 'This class includes:\n- hunting and trapping on a commercial basis\n- taking of animals (dead or alive) for food, fur, skin, or for use in research, in zoos or as pets\n- production of fur skins, reptile or bird skins from hunting or trapping activities'
        },
        {
            'id': 32,
            'code': '02.10',
            'description': 'Silviculture and other forestry activities',
            'details': 'This class includes:\n- growing of standing timber: planting, replanting, transplanting, thinning and conserving of forests and timber tracts\n- growing of coppice, pulpwood and fire wood\n- operation of forest tree nurseries\n\nThese activities can be carried out in natural or planted forests.'
        },
        {
            'id': 33,
            'code': '02.20',
            'description': 'Logging',
            'details': 'This class includes:\n- production of roundwood for forest-based manufacturing industries\n- production of roundwood used in an unprocessed form such as pit-props, fence posts and utility poles\n- gathering and production of wood for energy\n- gathering and production of forest harvesting residues for energy\n- production of charcoal in the forest (using traditional methods)\n\nThe output of this activity can take the form of logs or fire wood.'
        },
        {
            'id': 34,
            'code': '02.30',
            'description': 'Gathering of wild growing non-wood products',
            'details': 'This class includes:\n- gathering of wild growing materials:\n  . mushrooms, truffles\n  . berries\n  . nuts\n  . balata and other rubber-like gums\n  . cork\n  . lac and resins\n  . balsams\n  . vegetable hair\n  . eelgrass\n  . acorns, horse chestnuts\n  . mosses and lichens'
        },
        {
            'id': 35,
            'code': '02.40',
            'description': 'Support services to forestry',
            'details': 'This class includes carrying out part of the forestry operation on a fee or contract basis.\n\nThis class includes:\n- forestry service activities:\n  . forestry inventories\n  . forest management consulting services\n  . timber evaluation\n  . forest fire fighting and protection\n  . forest pest control\n- logging service activities:\n  . transport of logs within the forest'
        },
        {
            'id': 36,
            'code': '03.11',
            'description': 'Marine fishing',
            'details': 'This class includes:\n- fishing on a commercial basis in ocean and coastal waters\n- taking of marine crustaceans and molluscs\n- whale catching\n- taking of marine aquatic animals: turtles, sea squirts, tunicates, sea urchins etc.'
        },
        {
            'id': 37,
            'code': '03.12',
            'description': 'Freshwater fishing',
            'details': 'This class includes:\n- fishing on a commercial basis in inland waters\n- taking of freshwater crustaceans and molluscs\n- taking of freshwater aquatic animals'
        },
        {
            'id': 38,
            'code': '03.21',
            'description': 'Marine aquaculture',
            'details': 'This class includes:\n- fish farming in sea water including farming of marine ornamental fish\n- production of bivalve spat (oyster mussel etc.), lobsterlings, shrimp post-larvae, fish fry and fingerlings\n- growing of laver and other edible seaweeds\n- culture of crustaceans, bivalves, other molluscs and other aquatic animals in sea water'
        },
        {
            'id': 39,
            'code': '03.22',
            'description': 'Freshwater aquaculture',
            'details': 'This class includes:\n- fish farming in freshwater including farming of freshwater ornamental fish\n- culture of freshwater crustaceans, bivalves, other molluscs and other aquatic animals\n- operation of fish hatcheries (freshwater)\n- farming of frogs'
        },
        {
            'id': 40,
            'code': '05.10',
            'description': 'Mining of hard coal',
            'details': 'This class includes:\n- mining of hard coal: underground or surface mining, including mining through liquefaction methods\n- cleaning, sizing, grading, pulverising, compressing etc. of coal to classify, improve quality or facilitate transport or storage'
        },
        {
            'id': 41,
            'code': '05.20',
            'description': 'Mining of lignite',
            'details': 'This class includes:\n- mining of lignite (brown coal): underground or surface mining, including mining through liquefaction methods\n- washing, dehydrating, pulverising, compressing of lignite to improve quality or facilitate transport or storage'
        },
        {
            'id': 42,
            'code': '06.10',
            'description': 'Extraction of crude petroleum',
            'details': 'This class includes:\n- extraction of crude petroleum oils'
        },
        {
            'id': 43,
            'code': '06.20',
            'description': 'Extraction of natural gas',
            'details': 'This class includes:\n- production of crude gaseous hydrocarbon (natural gas)\n- extraction of condensates\n- draining and separation of liquid hydrocarbon fractions\n- gas desulphurisation'
        },
        {
            'id': 44,
            'code': '07.10',
            'description': 'Mining of iron ores',
            'details': 'This class includes:\n- mining of ores valued chiefly for iron content\n- beneficiation and agglomeration of iron ores'
        },
        {
            'id': 45,
            'code': '07.21',
            'description': 'Mining of uranium and thorium ores',
            'details': 'This class includes:\n- mining of ores chiefly valued for uranium and thorium content: pitchblende etc.\n- concentration of such ores\n- manufacture of yellowcake'
        },
        {
            'id': 46,
            'code': '07.29',
            'description': 'Mining of other non-ferrous metal ores',
            'details': 'This class includes:\n- mining and preparation of ores chiefly valued for non-ferrous metal content:\n  . aluminium (bauxite), copper, lead, zinc, tin, manganese, chrome, nickel, cobalt, molybdenum, tantalum, vanadium etc.\n  . precious metals: gold, silver, platinum'
        },
        {
            'id': 47,
            'code': '08.11',
            'description': 'Quarrying of ornamental and building stone, limestone, gypsum, chalk and slate',
            'details': 'This class includes:\n- quarrying, rough trimming and sawing of monumental and building stone such as marble, granite, sandstone etc.\n- breaking and crushing of ornamental and building stone\n- quarrying, crushing and breaking of limestone\n- mining of gypsum and anhydrite\n- mining of chalk and uncalcined dolomite'
        },
        {
            'id': 48,
            'code': '08.12',
            'description': 'Operation of gravel and sand pits; mining of clays and kaolin',
            'details': 'This class includes:\n- extraction and dredging of industrial sand, sand for construction and gravel\n- breaking and crushing of gravel \n- quarrying of sand\n- mining of clays, refractory clays and kaolin'
        },
        {
            'id': 49,
            'code': '08.91',
            'description': 'Mining of chemical and fertiliser minerals',
            'details': 'This class includes:\n- mining of natural phosphates and natural potassium salts\n- mining of native sulphur\n- extraction and preparation of pyrites and pyrrhotite, except roasting\n- mining of natural barium sulphate and carbonate (barytes and witherite), natural borates, natural magnesium sulphates (kieserite)\n- mining of earth colours, fluorspar and other minerals valued chiefly as a source of chemicals'
        },
        {
            'id': 50,
            'code': '08.92',
            'description': 'Extraction of peat',
            'details': 'This class includes:\n- peat digging\n- preparation of peat to improve quality or facilitate transport or storage'
        },
        {
            'id': 51,
            'code': '08.93',
            'description': 'Extraction of salt',
            'details': 'This class includes:\n- extraction of salt from underground including by dissolving and pumping\n- salt production by evaporation of sea water or other saline waters\n- crushing, purification and refining of salt by the producer'
        },
        {
            'id': 52,
            'code': '08.99',
            'description': 'Other mining and quarrying n.e.c.',
            'details': 'This class includes:\n- mining and quarrying of various minerals and materials:\n  . abrasive materials, asbestos, siliceous fossil meals, natural graphite, steatite (talc), feldspar etc.\n  . natural asphalt, asphaltites and asphaltic rock; natural solid bitumen\n  . gemstones, quartz, mica etc.'
        },
        {
            'id': 53,
            'code': '09.10',
            'description': 'Support activities for petroleum and natural gas extraction',
            'details': 'This class includes:\n- oil and gas extraction service activities provided on a fee or contract basis:\n  . exploration services in connection with petroleum or gas extraction, e.g. traditional prospecting methods, such as making geological observations at prospective sites\n  . directional drilling and redrilling; "spudding in"; derrick erection in situ, repairing and dismantling; cementing oil and gas well casings; pumping of wells; plugging and abandoning wells etc.\n  . liquefaction and regasification of natural gas for purpose of transport, done at the mine site\n  . draining and pumping services, on a fee or contract basis\n  . test drilling in connection with petroleum or gas extraction'
        },
        {
            'id': 54,
            'code': '09.90',
            'description': 'Support activities for other mining and quarrying',
            'details': 'This class includes:\n- support services on a fee or contract basis, required for mining activities of divisions 05, 07 and 08\n  . exploration services, e.g. traditional prospecting methods, such as taking core samples and making geological observations at prospective sites\n  . draining and pumping services, on a fee or contract basis\n  . test drilling and test hole boring'
        },
        {
            'id': 55,
            'code': '10.11',
            'description': 'Processing and preserving of meat',
            'details': 'This class includes:\n- operation of slaughterhouses engaged in killing, dressing or packing meat: beef, pork, lamb, rabbit, mutton, camel, etc.\n- production of fresh, chilled or frozen meat, in carcasses\n- production of fresh, chilled or frozen meat, in cuts'
        },
        {
            'id': 56,
            'code': '10.12',
            'description': 'Processing and preserving of poultry meat',
            'details': 'This class includes:\n- operation of slaughterhouses engaged in killing, dressing or packing poultry\n- production of fresh, chilled or frozen meat in individual portions\n- rendering of edible poultry fats'
        },
        {
            'id': 57,
            'code': '10.13',
            'description': 'Production of meat and poultry meat products',
            'details': 'This class includes:\n- production of dried, salted or smoked meat\n- production of meat products:\n  . sausages, salami, puddings, "andouillettes", saveloys, bolognas, pâtés, rillettes, boiled ham'
        },
        {
            'id': 58,
            'code': '10.20',
            'description': 'Processing and preserving of fish, crustaceans and molluscs',
            'details': 'This class includes:\n- preparation and preservation of fish, crustaceans and molluscs: freezing, deep-freezing, drying, cooking, smoking, salting, immersing in brine, canning etc.\n- production of fish, crustacean and mollusc products: fish fillets, roes, caviar, caviar substitutes etc.\n- production of fishmeal for human consumption or animal feed\n- production of meals and solubles from fish and other aquatic animals unfit for human consumption'
        },
        {
            'id': 59,
            'code': '10.31',
            'description': 'Processing and preserving of potatoes',
            'details': 'This class includes:\n- processing and preserving of potatoes:\n  . manufacture of prepared frozen potatoes\n  . manufacture of dehydrated mashed potatoes\n  . manufacture of potato snacks\n  . manufacture of potato crisps\n  . manufacture of potato flour and meal'
        },
        {
            'id': 60,
            'code': '10.32',
            'description': 'Manufacture of fruit and vegetable juice',
            'details': 'This class includes:\n- manufacture of fruit or vegetable juices'
        },
        {
            'id': 61,
            'code': '10.39',
            'description': 'Other processing and preserving of fruit and vegetables',
            'details': 'This class includes:\n- manufacture of food consisting chiefly of fruit or vegetables, except ready-made dishes in frozen or canned form\n- preserving of fruit, nuts or vegetables: freezing, drying, immersing in oil or in vinegar, canning etc.\n- manufacture of fruit or vegetable food products\n- manufacture of jams, marmalades and table jellies\n- roasting of nuts\n- manufacture of nut foods and pastes'
        },
        {
            'id': 62,
            'code': '10.41',
            'description': 'Manufacture of oils and fats',
            'details': 'This class includes:\n- manufacture of crude vegetable oils: olive oil, soya-bean oil, palm oil, sunflower-seed oil, cotton-seed oil, rape, colza or mustard oil, linseed oil etc.\n- manufacture of non-defatted flour or meal of oilseeds, oil nuts or oil kernels\n- manufacture of refined vegetable oils: olive oil, soya-bean oil etc.\n- processing of vegetable oils: blowing, boiling, dehydration, hydrogenation etc.'
        },
        {
            'id': 63,
            'code': '10.42',
            'description': 'Manufacture of margarine and similar edible fats',
            'details': 'This class includes:\n- manufacture of margarine\n- manufacture of melanges and similar spreads\n- manufacture of compound cooking fats'
        },
        {
            'id': 64,
            'code': '10.51',
            'description': 'Operation of dairies and cheese making',
            'details': 'This class includes:\n- manufacture of fresh liquid milk, pasteurised, sterilised, homogenised and/or ultra heat treated\n- manufacture of milk-based drinks\n- manufacture of cream from fresh liquid milk, pasteurised, sterilised, homogenised\n- manufacture of dried or concentrated milk whether or not sweetened\n- manufacture of milk or cream in solid form\n- manufacture of butter\n- manufacture of yoghurt\n- manufacture of cheese and curd\n- manufacture of whey\n- manufacture of casein or lactose'
        },
        {
            'id': 65,
            'code': '10.52',
            'description': 'Manufacture of ice cream',
            'details': 'This class includes:\n- manufacture of ice cream and other edible ice such as sorbet'
        },
        {
            'id': 66,
            'code': '10.61',
            'description': 'Manufacture of grain mill products',
            'details': 'This class includes:\n- grain milling: production of flour, groats, meal or pellets of wheat, rye, oats, maize (corn) or other cereal grains\n- rice milling: production of husked, milled, polished, glazed, parboiled or converted rice; production of rice flour\n- vegetable milling: production of flour or meal of dried leguminous vegetables, of roots or tubers, or of edible nuts\n- manufacture of cereal breakfast foods\n- manufacture of flour mixes and prepared blended flour and dough for bread, cakes, biscuits or pancakes'
        },
        {
            'id': 67,
            'code': '10.62',
            'description': 'Manufacture of starches and starch products',
            'details': 'This class includes:\n- manufacture of starches from rice, potatoes, maize etc.\n- wet corn milling\n- manufacture of glucose, glucose syrup, maltose, inulin etc.\n- manufacture of gluten\n- manufacture of tapioca and tapioca substitutes prepared from starch\n- manufacture of corn oil'
        },
        {
            'id': 68,
            'code': '10.71',
            'description': 'Manufacture of bread; manufacture of fresh pastry goods and cakes',
            'details': 'This class includes:\n- manufacture of bakery products:\n  . bread and rolls\n  . pastry, cakes, pies, tarts, pancakes, waffles, rolls etc.'
        },
        {
            'id': 69,
            'code': '10.72',
            'description': 'Manufacture of rusks and biscuits; manufacture of preserved pastry goods and cakes',
            'details': 'This class includes:\n- manufacture of rusks, biscuits and other dry bakery products\n- manufacture of preserved pastry goods and cakes\n- manufacture of snack products (cookies, crackers, pretzels etc.), whether sweet or salted'
        },
        {
            'id': 70,
            'code': '10.73',
            'description': 'Manufacture of macaroni, noodles, couscous and similar farinaceous products',
            'details': 'This class includes:\n- manufacture of pastas such as macaroni and noodles, whether or not cooked or stuffed\n- manufacture of couscous\n- manufacture of canned or frozen pasta products'
        },
        {
            'id': 71,
            'code': '10.81',
            'description': 'Manufacture of sugar',
            'details': 'This class includes:\n- manufacture or refining of sugar (sucrose) and sugar substitutes from the juice of cane, beet, maple and palm\n- manufacture of sugar syrups\n- manufacture of molasses\n- production of maple syrup and sugar'
        },
        {
            'id': 72,
            'code': '10.82',
            'description': 'Manufacture of cocoa, chocolate and sugar confectionery',
            'details': 'This class includes:\n- manufacture of cocoa, cocoa butter, cocoa fat, cocoa oil\n- manufacture of chocolate and chocolate confectionery\n- manufacture of sugar confectionery: caramels, cachous, nougats, fondant, white chocolate\n- manufacture of chewing gum\n- preserving in sugar of fruit, nuts, fruit peels and other parts of plants\n- manufacture of confectionery lozenges and pastilles'
        },
        {
            'id': 73,
            'code': '10.83',
            'description': 'Processing of tea and coffee',
            'details': 'This class includes:\n- decaffeinating and roasting of coffee\n- production of coffee products:\n  . ground coffee\n  . soluble coffee\n  . extracts and concentrates of coffee\n- manufacture of coffee substitutes\n- blending of tea and maté\n- manufacture of extracts and preparations based on tea or maté\n- packing of tea including packing in tea-bags'
        },
        {
            'id': 74,
            'code': '10.84',
            'description': 'Manufacture of condiments and seasonings',
            'details': 'This class includes:\n- manufacture of spices, sauces and condiments:\n  . mayonnaise\n  . mustard flour and meal\n  . prepared mustard etc.\n- manufacture of vinegar'
        },
        {
            'id': 75,
            'code': '10.85',
            'description': 'Manufacture of prepared meals and dishes',
            'details': 'This class includes the manufacture of ready-made (i.e. prepared, seasoned and cooked) meals and dishes. These dishes are processed to preserve them, such as in frozen or canned form, and are usually packaged and labelled for re-sale, i.e. this class does not include the preparation of meals for immediate consumption, such as in restaurants. To be considered a dish, these foods have to contain at least two distinct ingredients (except seasonings etc.).\n\nThis class includes:\n- manufacture of meat or poultry dishes\n- manufacture of fish dishes, including fish and chips\n- manufacture of vegetable dishes\n- manufacture of frozen or otherwise preserved pizza'
        },
        {
            'id': 76,
            'code': '10.86',
            'description': 'Manufacture of homogenised food preparations and dietetic food',
            'details': 'This class includes:\n- manufacture of foods for particular nutritional uses:\n  . infant formulae\n  . follow-up milk and other follow-up foods\n  . baby foods\n  . low-energy and energy-reduced foods intended for weight control\n  . dietary foods for special medical purposes\n  . low-sodium foods, including low-sodium or sodium-free dietary salts\n  . gluten-free foods\n  . foods intended to meet the expenditure of intense muscular effort, especially for sportsmen\n  . foods for persons suffering from carbohydrate metabolism disorders (diabetes)'
        },
        {
            'id': 77,
            'code': '10.89',
            'description': 'Manufacture of other food products n.e.c.',
            'details': 'This class includes:\n- manufacture of soups and broths\n- manufacture of artificial honey and caramel\n- manufacture of perishable prepared foods, such as:\n  . sandwiches\n  . fresh (uncooked) pizza\n- manufacture of food supplements and other food products n.e.c.'
        },
        {
            'id': 78,
            'code': '10.91',
            'description': 'Manufacture of prepared feeds for farm animals',
            'details': 'This class includes:\n- manufacture of prepared feeds for farm animals, including concentrated animal feed and feed supplements\n- preparation of unmixed (single) feeds for farm animals'
        },
        {
            'id': 79,
            'code': '10.92',
            'description': 'Manufacture of prepared pet foods',
            'details': 'This class includes:\n- manufacture of prepared feeds for pets, including dogs, cats, birds, fish etc.'
        },
        {
            'id': 80,
            'code': '11.01',
            'description': 'Distilling, rectifying and blending of spirits',
            'details': 'This class includes:\n- manufacture of distilled, potable, alcoholic beverages: whisky, brandy, gin, liqueurs etc. \n- manufacture of drinks mixed with distilled alcoholic beverages\n- blending of distilled spirits\n- production of neutral spirits'
        },
        {
            'id': 81,
            'code': '11.02',
            'description': 'Manufacture of wine from grape',
            'details': 'This class includes:\n- manufacture of wine\n- manufacture of sparkling wine\n- manufacture of wine from concentrated grape must'
        },
        {
            'id': 82,
            'code': '11.03',
            'description': 'Manufacture of cider and other fruit wines',
            'details': 'This class includes:\n- manufacture of fermented but not distilled alcoholic beverages: sake, cider, perry and other fruit wines'
        },
        {
            'id': 83,
            'code': '11.04',
            'description': 'Manufacture of other non-distilled fermented beverages',
            'details': 'This class includes:\n- manufacture of vermouth and the like'
        },
        {
            'id': 84,
            'code': '11.05',
            'description': 'Manufacture of beer',
            'details': 'This class includes:\n- manufacture of malt liquors, such as beer, ale, porter and stout'
        },
        {
            'id': 85,
            'code': '11.06',
            'description': 'Manufacture of malt'
        },
        {
            'id': 86,
            'code': '11.07',
            'description': 'Manufacture of soft drinks; production of mineral waters and other bottled waters',
            'details': 'This class includes manufacture of non-alcoholic beverages (except non-alcoholic beer and wine):\n- production of natural mineral waters and other bottled waters\n- manufacture of soft drinks:\n  . non-alcoholic flavoured and/or sweetened waters: lemonade, orangeade, cola, fruit drinks, tonic waters etc.'
        },
        {
            'id': 87,
            'code': '12.00',
            'description': 'Manufacture of tobacco products',
            'details': 'This class includes:\n- manufacture of tobacco products and products of tobacco substitutes: cigarettes, fine cut tobacco, cigars, pipe tobacco, chewing tobacco, snuff\n- manufacture of "homogenised" or "reconstituted" tobacco'
        },
        {
            'id': 88,
            'code': '13.10',
            'description': 'Preparation and spinning of textile fibres',
            'details': 'This class includes preparatory operations on textile fibres and the spinning of textile fibres. This can be done from varying raw materials, such as silk, wool, other animal, vegetable or man-made fibres, paper or glass etc.\n\nThis class includes:\n- preparatory operations on textile fibres:\n  . reeling and washing of silk\n  . degreasing and carbonising of wool and dyeing of wool fleece\n  . carding and combing of all kinds of animal, vegetable and man-made fibres\n- spinning and manufacture of yarn or thread for weaving or sewing, for the trade or for further processing\n  . scutching of flax\n  . texturising, twisting, folding, cabling and dipping of synthetic or artificial filament yarns'
        },
        {
            'id': 89,
            'code': '13.20',
            'description': 'Weaving of textiles',
            'details': 'This class includes weaving of textiles. This can be done from varying raw materials, such as silk, wool, other animal, vegetable or man-made fibres, paper or glass etc.\n\nThis class includes:\n- manufacture of broad woven cotton-type, woollen-type, worsted-type or silk-type fabrics, including from mixtures or artificial or synthetic yarns (polypropylene etc.)\n- manufacture of other broad woven fabrics, using flax, ramie, hemp, jute, bast fibres and special yarns'
        },
        {
            'id': 90,
            'code': '13.30',
            'description': 'Finishing of textiles',
            'details': 'This class includes finishing of textiles and wearing apparel, i.e. bleaching, dyeing, dressing and similar activities.\n\nThis class includes:\n- bleaching and dyeing of textile fibres, yarns, fabrics and textile articles, including wearing apparel\n- dressing, drying, steaming, shrinking, mending, sanforising, mercerising of textiles and textile articles, including wearing apparel'
        },
        {
            'id': 91,
            'code': '13.91',
            'description': 'Manufacture of knitted and crocheted fabrics',
            'details': 'This class includes:\n- manufacture and processing of knitted or crocheted fabrics:\n  . pile and terry fabrics\n  . net and window furnishing type fabrics knitted on Raschel or similar machines\n  . other knitted or crocheted fabrics'
        },
        {
            'id': 92,
            'code': '13.92',
            'description': 'Manufacture of made-up textile articles, except apparel',
            'details': 'This class includes:\n- manufacture, of made-up articles of any textile material, including of knitted or crocheted fabrics:\n  . blankets, including travelling rugs\n  . bed, table, toilet or kitchen linen\n  . quilts, eiderdowns, cushions, pouffes, pillows, sleeping bags etc.\n- manufacture of made-up furnishing articles:\n  . curtains, valances, blinds, bedspreads, furniture or machine covers etc.\n  . tarpaulins, tents, camping goods, sails, sunblinds, loose covers for cars, machines or furniture etc.\n  . flags, banners, pennants etc.\n  . dust cloths, dishcloths and similar articles, life jackets, parachutes etc.'
        },
        {
            'id': 93,
            'code': '13.93',
            'description': 'Manufacture of carpets and rugs',
            'details': 'This class includes:\n- manufacture of textile floor coverings:\n  . carpets, rugs and mats, tiles'
        },
        {
            'id': 94,
            'code': '13.94',
            'description': 'Manufacture of cordage, rope, twine and netting',
            'details': "This class includes:\n- manufacture of twine, cordage, rope and cables of textile fibres or strip or the like, whether or not impregnated, coated, covered or sheathed with rubber or plastics\n- manufacture of knotted netting of twine, cordage or rope\n- manufacture of products of rope or netting: fishing nets, ships' fenders, unloading cushions, loading slings, rope or cable fitted with metal rings etc."
        },
        {
            'id': 95,
            'code': '13.95',
            'description': 'Manufacture of non-wovens and articles made from non-wovens, except apparel',
            'details': 'This class includes all activities related to the manufacture of textiles or textile products, not specified elsewhere in division 13 or 14, involving a large number of processes and a great variety of goods produced.'
        },
        {
            'id': 96,
            'code': '13.96',
            'description': 'Manufacture of other technical and industrial textiles',
            'details': "This class includes:\n- manufacture of narrow woven fabrics, including fabrics consisting of warp without weft assembled by means of an adhesive\n- manufacture of labels, badges etc.\n- manufacture of ornamental trimmings: braids, tassels, pompons etc.\n- manufacture of fabrics impregnated, coated, covered or laminated with plastics\n- manufacture of metallised yarn or metallised gimped yarn, rubber thread and cord covered with textile material, textile yarn or strip covered, impregnated, coated or sheathed with rubber or plastics\n- manufacture of tyre cord fabric of high-tenacity man-made yarn\n- manufacture of other treated or coated fabrics: buckram and similar stiffened textile fabrics, fabrics coated with gum or amylaceous substances\n- manufacture of diverse textile articles: textile wicks, incandescent gas mantles and tubular gas\n- manufacture of mantle fabric, hosepiping, transmission or conveyor belts or belting (whether or not reinforced with metal or other material), bolting cloth, straining cloth\n- manufacture of automotive trimmings\n- manufacture of artists' canvas boards and tracing cloth"
        },
        {
            'id': 97,
            'code': '13.99',
            'description': 'Manufacture of other textiles n.e.c.',
            'details': 'This class includes:\n- manufacture of felt\n- manufacture of tulles and other net fabrics, and of lace and embroidery, in the piece, in strips or in motifs\n- manufacture of pressure sensitive cloth-tape\n- manufacture of shoe-lace, of textiles\n- manufacture of powder puffs and mitts'
        },
        {
            'id': 98,
            'code': '14.11',
            'description': 'Manufacture of leather clothes',
            'details': "This class includes:\n- manufacture of wearing apparel made of leather or composition leather including leather industrial work accessories as welder's leather aprons"
        },
        {
            'id': 99,
            'code': '14.12',
            'description': 'Manufacture of workwear'
        },
        {
            'id': 100,
            'code': '14.13',
            'description': 'Manufacture of other outerwear',
            'details': 'This class includes:\n- manufacture of other outerwear made of woven, knitted or crocheted fabric, non-wovens etc. for men, women and children:\n  . coats, suits, ensembles, jackets, trousers, skirts etc.'
        },
        {
            'id': 101,
            'code': '14.14',
            'description': 'Manufacture of underwear',
            'details': 'This class includes:\n- manufacture of underwear and nightwear made of woven, knitted or crocheted fabric, lace etc. for men, women and children:\n  . shirts, T-shirts, underpants, briefs, pyjamas, nightdresses, dressing gowns, blouses, slips, brassieres, corsets etc.'
        },
        {
            'id': 102,
            'code': '14.19',
            'description': 'Manufacture of other wearing apparel and accessories',
            'details': "This class includes:\n- manufacture of babies' garments, tracksuits, ski suits, swimwear etc.\n- manufacture of hats and caps\n- manufacture of other clothing accessories: gloves, belts, shawls, ties, cravats, hairnets etc."
        },
        {
            'id': 103,
            'code': '14.20',
            'description': 'Manufacture of articles of fur',
            'details': 'This class includes:\n- manufacture of articles made of fur skins:\n  . fur wearing apparel and clothing accessories\n  . assemblies of fur skins such as "dropped" fur skins, plates, mats, strips etc.\n  . diverse articles of fur skins: rugs, unstuffed pouffes, industrial polishing cloths'
        },
        {
            'id': 104,
            'code': '14.31',
            'description': 'Manufacture of knitted and crocheted hosiery',
            'details': 'This class includes:\n- manufacture of hosiery, including socks, tights and pantyhose'
        },
        {
            'id': 105,
            'code': '14.39',
            'description': 'Manufacture of other knitted and crocheted apparel',
            'details': 'This class includes:\n- manufacture of knitted or crocheted wearing apparel and other made-up articles directly into shape: pullovers, cardigans, jerseys, waistcoats and similar articles'
        },
        {
            'id': 106,
            'code': '15.11',
            'description': 'Tanning and dressing of leather; dressing and dyeing of fur',
            'details': 'This class includes:\n- tanning, dyeing and dressing of hides and skins\n- manufacture of chamois dressed, parchment dressed, patent or metallised leathers\n- manufacture of composition leather\n- scraping, shearing, plucking, currying, tanning, bleaching and dyeing of fur skins and hides with the hair on'
        },
        {
            'id': 107,
            'code': '15.12',
            'description': 'Manufacture of luggage, handbags and the like, saddlery and harness',
            'details': 'This class includes:\n- manufacture of luggage, handbags and the like, of leather, composition leather or any other material, such as plastic sheeting, textile materials, vulcanised fibre or paperboard, where the same technology is used as for leather\n- manufacture of saddlery and harness\n- manufacture of non-metallic watch bands (e.g. fabric, leather, plastic)\n- manufacture of diverse articles of leather or composition leather: driving belts, packings etc.\n- manufacture of shoe-lace, of leather\n- manufacture of horse whips and riding crops'
        },
        {
            'id': 108,
            'code': '15.20',
            'description': 'Manufacture of footwear',
            'details': 'This class includes:\n- manufacture of footwear for all purposes, of any material, by any process, including moulding (see below for exceptions)\n- manufacture of leather parts of footwear: manufacture of uppers and parts of uppers, outer and inner soles, heels etc.\n- manufacture of gaiters, leggings and similar articles'
        },
        {
            'id': 109,
            'code': '16.10',
            'description': 'Sawmilling and planing of wood',
            'details': 'This class includes:\n- sawing, planing and machining of wood\n- slicing, peeling or chipping logs\n- manufacture of wooden railway sleepers\n- manufacture of unassembled wooden flooring\n- manufacture of wood wool, wood flour, chips, particles'
        },
        {
            'id': 110,
            'code': '16.21',
            'description': 'Manufacture of veneer sheets and wood-based panels',
            'details': 'This class includes:\n- manufacture of veneer sheets thin enough to be used for veneering, making plywood or other purposes:\n  . smoothed, dyed, coated, impregnated, reinforced (with paper or fabric backing)\n  . made in the form of motifs\n- manufacture of plywood, veneer panels and similar laminated wood boards and sheets\n- manufacture of oriented strand board (OSB) and other particle board\n- manufacture of medium density fibreboard (MDF) and other fibreboard \n- manufacture of densified wood\n- manufacture of glue laminated wood, laminated veneer wood'
        },
        {
            'id': 111,
            'code': '16.22',
            'description': 'Manufacture of assembled parquet floors',
            'details': 'This class includes:\n- manufacture of wooden parquet floor blocks, strips etc., assembled into panels'
        },
        {
            'id': 112,
            'code': '16.23',
            'description': "Manufacture of other builders' carpentry and joinery",
            'details': 'This class includes:\n- manufacture of wooden goods intended to be used primarily in the construction industry:\n  . beams, rafters, roof struts\n  . glue-laminated and metal connected, prefabricated wooden roof trusses\n  . doors, windows, shutters and their frames, whether or not containing metal fittings, such as hinges, locks etc.\n  . stairs, railings\n  . wooden beadings and mouldings, shingles and shakes\n- manufacture of prefabricated buildings, or elements thereof, predominantly of wood, e.g. saunas\n- manufacture of mobile homes\n- manufacture of wood partitions (except free standing)'
        },
        {
            'id': 113,
            'code': '16.24',
            'description': 'Manufacture of wooden containers',
            'details': "This class includes:\n- manufacture of packing cases, boxes, crates, drums and similar packings of wood\n- manufacture of pallets, box pallets and other load boards of wood\n- manufacture of barrels, vats, tubs and other coopers' products of wood\n- manufacture of wooden cable-drums"
        },
        {
            'id': 114,
            'code': '16.29',
            'description': 'Manufacture of other products of wood; manufacture of articles of cork, straw and plaiting materials',
            'details': "This class includes:\n- manufacture of various wood products:\n  . wooden handles and bodies for tools, brooms, brushes\n  . wooden boot or shoe lasts and trees, clothes hangers\n  . household utensils and kitchenware of wood\n  . wooden statuettes and ornaments, wood marquetry, inlaid wood\n  . wooden cases for jewellery, cutlery and similar articles\n  . wooden spools, cops, bobbins, sewing thread reels and similar articles of turned wood\n  . other articles of wood\n- natural cork processing, manufacture of agglomerated cork\n- manufacture of articles of natural or agglomerated cork, including floor coverings\n- manufacture of plaits and products of plaiting materials: mats, matting, screens, cases etc.\n- manufacture of basket-ware and wickerwork\n- manufacture of fire logs and pellets for energy, made of pressed wood or substitute materials like coffee or soybean grounds\n- manufacture of wooden mirror and picture frames\n- manufacture of frames for artists' canvases\n- manufacture of wooden shoe parts (e.g. heels and lasts)\n- manufacture of handles for umbrellas, canes and similar\n- manufacture of blocks for the manufacture of smoking pipes"
        },
        {
            'id': 115,
            'code': '17.11',
            'description': 'Manufacture of pulp',
            'details': 'This class includes:\n- manufacture of bleached, semi-bleached or unbleached paper pulp by mechanical, chemical (dissolving or non-dissolving) or semi-chemical processes\n- manufacture of cotton-linters pulp\n- removal of ink and manufacture of pulp from waste paper'
        },
        {
            'id': 116,
            'code': '17.12',
            'description': 'Manufacture of paper and paperboard',
            'details': 'This class includes:\n- manufacture of paper and paperboard intended for further industrial processing'
        },
        {
            'id': 117,
            'code': '17.21',
            'description': 'Manufacture of corrugated paper and paperboard and of containers of paper and paperboard',
            'details': 'This class includes:\n- manufacture of corrugated paper and paperboard\n- manufacture of containers of corrugated paper or paperboard\n- manufacture of folding paperboard containers\n- manufacture of containers of solid board\n- manufacture of other containers of paper and paperboard\n- manufacture of sacks and bags of paper\n- manufacture of office box files and similar articles'
        },
        {
            'id': 118,
            'code': '17.22',
            'description': 'Manufacture of household and sanitary goods and of toilet requisites',
            'details': 'This class includes:\n- manufacture of household and personal hygiene paper and cellulose wadding products:\n  . cleansing tissues\n  . handkerchiefs, towels, serviettes\n  . toilet paper\n  . sanitary towels and tampons, napkins and napkin liners for babies\n  . cups, dishes and trays\n- manufacture of textile wadding and articles of wadding: sanitary towels, tampons etc.'
        },
        {
            'id': 119,
            'code': '17.23',
            'description': 'Manufacture of paper stationery',
            'details': 'This class includes:\n- manufacture of printing and writing paper ready for use\n- manufacture of computer printout paper ready for use\n- manufacture of self-copy paper ready for use\n- manufacture of duplicator stencils and carbon paper ready for use\n- manufacture of gummed or adhesive paper ready for use\n- manufacture of envelopes and letter-cards\n- manufacture of educational and commercial stationery (notebooks, binders, registers, accounting books, business forms etc.), when the printed information is not the main characteristic\n- manufacture of boxes, pouches, wallets and writing compendiums containing an assortment of paper stationery'
        },
        {
            'id': 120,
            'code': '17.24',
            'description': 'Manufacture of wallpaper',
            'details': 'This class includes:\n- manufacture of wallpaper and similar wall coverings, including vinyl-coated and textile wallpaper'
        },
        {
            'id': 121,
            'code': '17.29',
            'description': 'Manufacture of other articles of paper and paperboard',
            'details': 'This class includes:\n- manufacture of labels\n- manufacture of filter paper and paperboard\n- manufacture of paper and paperboard bobbins, spools, cops etc.\n- manufacture of egg trays and other moulded pulp packaging products etc.\n- manufacture of paper novelties\n- manufacture of paper or paperboard cards for use on Jacquard machines'
        },
        {
            'id': 122,
            'code': '18.11',
            'description': 'Printing of newspapers'
        },
        {
            'id': 123,
            'code': '18.12',
            'description': 'Other printing',
            'details': 'This class includes:\n- printing of magazines and other periodicals, appearing less than four times a week\n- printing of books and brochures, music and music manuscripts, maps, atlases, posters, advertising catalogues, prospectuses and other printed advertising, postage stamps, taxation stamps, documents of title, cheques and other security papers, smart cards, albums, diaries, calendars and other commercial printed matter, personal stationery and other printed matter by letterpress, offset, photogravure, flexographic, screen printing and other printing presses, duplication machines, computer printers, embossers etc., including quick printing\n- printing directly onto textiles, plastic, glass, metal, wood and ceramics\n\nThe material printed is typically copyrighted.'
        },
        {
            'id': 124,
            'code': '18.13',
            'description': 'Pre-press and pre-media services',
            'details': 'This class includes:\n- composing, typesetting, phototypesetting, pre-press data input including scanning and optical character recognition, electronic make-up\n- preparation of data files for multi-media (printing on paper, CD-ROM, Internet) applications\n- plate-making services including image setting and plate setting (for the printing processes letterpress and offset)\n- cylinder preparation: engraving or etching of cylinders for gravure printing\n- plate processing: "computer to plate" CTP (also photopolymer plates) \n- preparation of plates and dies for relief stamping or printing\n- preparation of:\n  . artistic works of technical character, such as preparation of lithographic stones and wood blocks\n  . presentation media, e.g. overhead foils and other forms of presentation\n  . sketches, layouts, dummies, etc.\n  . production of proofs'
        },
        {
            'id': 125,
            'code': '18.14',
            'description': 'Binding and related services',
            'details': 'This class includes:\n- trade binding, sample mounting and post press services in support of printing activities, e.g. trade binding and finishing of books, brochures, magazines, catalogues, etc., by folding, cutting and trimming, assembling, stitching, thread sewing, adhesive binding, cutting and cover laying, gluing, collating, basting, gold stamping; spiral binding and plastic wire binding\n- binding and finishing of printed paper or printed cardboard, by folding, stamping, drilling, punching, perforating, embossing, sticking, gluing, laminating\n- finishing services for CD-ROMs\n- mailing finishing services such as customisation, envelope preparation\n- other finishing activities such as die, sinking or stamping, Braille copying'
        },
        {
            'id': 126,
            'code': '18.20',
            'description': 'Reproduction of recorded media',
            'details': 'This class includes:\n- reproduction from master copies of gramophone records, compact discs and tapes with music or other sound recordings\n- reproduction from master copies of records, compact discs and tapes with motion pictures and other video recordings\n- reproduction from master copies of software and data on discs and tapes'
        },
        {
            'id': 127,
            'code': '19.10',
            'description': 'Manufacture of coke oven products',
            'details': 'This class includes:\n- operation of coke ovens\n- production of coke and semi-coke\n- production of pitch and pitch coke\n- production of coke oven gas\n- production of crude coal and lignite tars\n- agglomeration of coke'
        },
        {
            'id': 128,
            'code': '19.20',
            'description': 'Manufacture of refined petroleum products',
            'details': 'This class includes the manufacture of liquid or gaseous fuels or other products from crude petroleum, bituminous minerals or their fractionation products. Petroleum refining involves one or more of the following activities: fractionation; straight distillation of crude oil; and cracking.\n\nThis class includes:\n- production of motor fuel: gasoline, kerosene etc.\n- production of fuel: light, medium and heavy fuel oil, refinery gases such as ethane, propane, butane etc.\n- manufacture of oil-based lubricating oils or greases, including from waste oil\n- manufacture of products for the petrochemical industry and for the manufacture of road coverings\n- manufacture of various products: white spirit, vaseline, paraffin wax, petroleum jelly etc.\n- manufacture of petroleum briquettes\n- blending of biofuels, i.e. blending of alcohols with petroleum (e.g. gasohol)'
        },
        {
            'id': 129,
            'code': '20.11',
            'description': 'Manufacture of industrial gases',
            'details': 'This class includes:\n- manufacture of liquefied or compressed inorganic industrial or medical gases:\n  . elemental gases\n  . liquid or compressed air\n  . refrigerant gases\n  . mixed industrial gases\n  . inert gases such as carbon dioxide\n  . isolating gases'
        },
        {
            'id': 130,
            'code': '20.12',
            'description': 'Manufacture of dyes and pigments',
            'details': 'This class includes:\n- manufacture of dyes and pigments from any source in basic form or as concentrate'
        },
        {
            'id': 131,
            'code': '20.13',
            'description': 'Manufacture of other inorganic basic chemicals',
            'details': 'This class includes the manufacture of chemicals using basic processes. The output of these processes are usually separate chemical elements or separate chemically defined compounds.\n\nThis class includes:\n- manufacture of chemical elements (except industrial gases and basic metals)\n- manufacture of inorganic acids except nitric acid\n- manufacture of alkalis, lyes and other inorganic bases except ammonia\n- manufacture of other inorganic compounds\n- roasting of iron pyrites\n- manufacture of distilled water'
        },
        {
            'id': 132,
            'code': '20.14',
            'description': 'Manufacture of other organic basic chemicals',
            'details': 'This class includes the manufacture of chemicals using basic processes, such as thermal cracking and distillation. The output of these processes are usually separate chemical elements or separate chemically defined compounds.\n\nThis class includes:\n- manufacture of basic organic chemicals:\n  . acyclic hydrocarbons, saturated and unsaturated\n  . cyclic hydrocarbons, saturated and unsaturated\n  . acyclic and cyclic alcohols\n  . mono- and polycarboxylic acids, including acetic acid\n  . other oxygen-function compounds, including aldehydes, ketones, quinones and dual or poly oxygen-function compounds\n  . synthetic glycerol\n  . nitrogen-function organic compounds, including amines\n  . fermentation of sugarcane, corn or similar to produce alcohol and esters\n  . other organic compounds, including wood distillation products (e.g. charcoal) etc.\n- manufacture of synthetic aromatic products\n- distillation of coal tar'
        },
        {
            'id': 133,
            'code': '20.15',
            'description': 'Manufacture of fertilisers and nitrogen compounds',
            'details': 'This class includes:\n- manufacture of fertilisers:\n  . straight or complex nitrogenous, phosphatic or potassic fertilisers\n  . urea, crude natural phosphates and crude natural potassium salts\n- manufacture of associated nitrogen products:\n  . nitric and sulphonitric acids, ammonia, ammonium chloride, ammonium carbonate, nitrites and nitrates of potassium'
        },
        {
            'id': 134,
            'code': '20.16',
            'description': 'Manufacture of plastics in primary forms',
            'details': 'This class includes the manufacture of resins, plastics materials and non-vulcanisable thermoplastic elastomers, the mixing and blending of resins on a custom basis, as well as the manufacture of non-customised synthetic resins.\n\nThis class includes:\n- manufacture of plastics in primary forms:\n  . polymers, including those of ethylene, propylene, styrene, vinyl chloride, vinyl acetate and acrylics\n  . polyamides\n  . phenolic and epoxide resins and polyurethanes\n  . alkyd and polyester resins and polyethers\n  . silicones\n  . ion-exchangers based on polymers'
        },
        {
            'id': 135,
            'code': '20.17',
            'description': 'Manufacture of synthetic rubber in primary forms',
            'details': 'This class includes:\n- manufacture of synthetic rubber in primary forms:\n  . synthetic rubber\n  . factice\n- manufacture of mixtures of synthetic rubber and natural rubber or rubber-like gums (e.g. balata)'
        },
        {
            'id': 136,
            'code': '20.20',
            'description': 'Manufacture of pesticides and other agrochemical products',
            'details': 'This class includes:\n- manufacture of insecticides, rodenticides, fungicides, herbicides, acaricides, molluscicides, biocides\n- manufacture of anti-sprouting products, plant growth regulators\n- manufacture of disinfectants (for agricultural and other use)\n- manufacture of other agrochemical products n.e.c.'
        },
        {
            'id': 137,
            'code': '20.30',
            'description': 'Manufacture of paints, varnishes and similar coatings, printing ink and mastics',
            'details': 'This class includes:\n- manufacture of paints and varnishes, enamels or lacquers\n- manufacture of prepared pigments and dyes, opacifiers and colours\n- manufacture of vitrifiable enamels and glazes and engobes and similar preparations\n- manufacture of mastics\n- manufacture of caulking compounds and similar non-refractory filling or surfacing preparations\n- manufacture of organic composite solvents and thinners\n- manufacture of prepared paint or varnish removers\n- manufacture of printing ink'
        },
        {
            'id': 138,
            'code': '20.41',
            'description': 'Manufacture of soap and detergents, cleaning and polishing preparations',
            'details': 'This class includes:\n- manufacture of organic surface-active agents\n- manufacture of paper, wadding, felt etc. coated or covered with soap or detergent\n- manufacture of glycerol\n- manufacture of soap, except cosmetic soap\n- manufacture of surface-active preparations:\n  . washing powders in solid or liquid form and detergents\n  . dish-washing preparations\n  . textile softeners\n- manufacture of cleaning and polishing products:\n  . preparations for perfuming or deodorising rooms\n  . artificial waxes and prepared waxes\n  . polishes and creams for leather\n  . polishes and creams for wood\n  . polishes for coachwork, glass and metal\n  . scouring pastes and powders, including paper, wadding etc. coated or covered with these'
        },
        {
            'id': 139,
            'code': '20.42',
            'description': 'Manufacture of perfumes and toilet preparations',
            'details': 'This class includes:\n- manufacture of perfumes and toilet preparations:\n  . perfumes and toilet water\n  . beauty and make-up preparations\n  . sunburn prevention and suntan preparations\n  . manicure and pedicure preparations\n  . shampoos, hair lacquers, waving and straightening preparations\n  . dentifrices and preparations for oral hygiene, including denture fixative preparations\n  . shaving preparations, including pre-shave and aftershave preparations\n  . deodorants and bath salts\n  . depilatories\n- manufacture of cosmetic soap'
        },
        {
            'id': 140,
            'code': '20.51',
            'description': 'Manufacture of explosives',
            'details': 'This class includes:\n- manufacture of propellant powders\n- manufacture of explosives and pyrotechnic products, including percussion caps, detonators, signalling flares etc.'
        },
        {
            'id': 141,
            'code': '20.52',
            'description': 'Manufacture of glues',
            'details': 'This class includes:\n- manufacture of glues and prepared adhesives, including rubber-based glues and adhesives'
        },
        {
            'id': 142,
            'code': '20.53',
            'description': 'Manufacture of essential oils',
            'details': 'This class includes:\n- manufacture of extracts of natural aromatic products\n- manufacture of resinoids\n- manufacture of mixtures of odoriferous products for the manufacture of perfumes or food'
        },
        {
            'id': 143,
            'code': '20.59',
            'description': 'Manufacture of other chemical products n.e.c.',
            'details': 'This class includes:\n- manufacture of photographic plates, films, sensitised paper and other sensitised unexposed materials\n- manufacture of chemical preparations for photographic uses\n- manufacture of gelatine and its derivatives\n- manufacture of various chemical products:\n  . peptones, peptone derivatives, other protein substances and their derivatives n.e.c.\n  . chemically modified oils and fats\n  . materials used in the finishing of textiles and leather\n  . powders and pastes used in soldering, brazing or welding\n  . substances used to pickle metal\n  . prepared additives for cements\n  . activated carbon, lubricating oil additives, prepared rubber accelerators, catalysts and other chemical products for industrial use\n  . anti-knock preparations, antifreeze preparations\n  . liquids for hydraulic transmission\n  . composite diagnostic or laboratory reagents'
        },
        {
            'id': 144,
            'code': '20.60',
            'description': 'Manufacture of man-made fibres',
            'details': 'This class includes:\n- manufacture of synthetic or artificial filament tow\n- manufacture of synthetic or artificial staple fibres, not carded, combed or otherwise processed for spinning\n- manufacture of synthetic or artificial filament yarn, including high-tenacity yarn\n- manufacture of synthetic or artificial monofilament or strip'
        },
        {
            'id': 145,
            'code': '21.10',
            'description': 'Manufacture of basic pharmaceutical products',
            'details': 'This class includes:\n- manufacture of medicinal active substances to be used for their pharmacological properties in the manufacture of medicaments: antibiotics, basic vitamins, salicylic and O-acetylsalicylic acids etc.\n- processing of blood'
        },
        {
            'id': 146,
            'code': '21.20',
            'description': 'Manufacture of pharmaceutical preparations',
            'details': 'This class includes:\n- manufacture of medicaments:\n  . antisera and other blood fractions\n  . vaccines\n  . diverse medicaments, including homeopathic preparations\n- manufacture of chemical contraceptive products for external use and hormonal contraceptive medicaments\n- manufacture of medical diagnostic preparations, including pregnancy tests\n- manufacture of radioactive in-vivo diagnostic substances\n- manufacture of biotech pharmaceuticals'
        },
        {
            'id': 147,
            'code': '22.11',
            'description': 'Manufacture of rubber tyres and tubes; retreading and rebuilding of rubber tyres',
            'details': 'This class includes:\n- manufacture of rubber tyres for vehicles, equipment, mobile machinery, aircraft, toy, furniture and other uses:\n  . pneumatic tyres\n  . solid or cushion tyres\n- manufacture of inner tubes for tyres\n- manufacture of interchangeable tyre treads, tyre flaps, "camelback" strips for retreading tyres etc.\n- tyre rebuilding and retreading'
        },
        {
            'id': 148,
            'code': '22.19',
            'description': 'Manufacture of other rubber products',
            'details': 'This class includes:\n- manufacture of other products of natural or synthetic rubber, unvulcanised, vulcanised or hardened:\n  . rubber plates, sheets, strip, rods, profile shapes\n  . tubes, pipes and hoses\n  . rubber conveyor or transmission belts or belting\n  . rubber hygienic articles: sheath contraceptives, teats, hot water bottles etc.\n  . rubber articles of apparel (if only sealed together, not sewn)\n  . rubber sole and other rubber parts of footwear\n  . rubber thread and rope\n  . rubberised yarn and fabrics\n  . rubber rings, fittings and seals\n  . rubber roller coverings\n  . inflatable rubber mattresses\n  . inflatable balloons\n- manufacture of rubber brushes\n- manufacture of hard rubber pipe stems\n- manufacture of hard rubber combs, hair pins, hair rollers, and similar'
        },
        {
            'id': 149,
            'code': '22.21',
            'description': 'Manufacture of plastic plates, sheets, tubes and profiles',
            'details': 'This class includes:\n- manufacture of semi-manufactures of plastic products:\n  . plastic plates, sheets, blocks, film, foil, strip etc. (whether self-adhesive or not)\n- manufacture of finished plastic products:\n  . plastic tubes, pipes and hoses; hose and pipe fittings\n  . cellophane film or sheet'
        },
        {
            'id': 150,
            'code': '22.22',
            'description': 'Manufacture of plastic packing goods',
            'details': 'This class includes:\n- manufacture of plastic articles for the packing of goods:\n  . plastic bags, sacks, containers, boxes, cases, carboys, bottles etc.'
        },
        {
            'id': 151,
            'code': '22.23',
            'description': 'Manufacture of builders’ ware of plastic',
            'details': "This class includes:\n- manufacture of builders' plastics ware:\n  . plastic doors, windows, frames, shutters, blinds, skirting boards\n  . tanks, reservoirs\n  . plastic floor, wall or ceiling coverings in rolls or in the form of tiles etc.\n  . plastic sanitary ware like plastic baths, shower baths, washbasins, lavatory pans, flushing cisterns etc.\n- manufacture of resilient floor coverings, such as vinyl, linoleum etc.\n- manufacture of artificial stone (e.g. cultured marble)"
        },
        {
            'id': 152,
            'code': '22.29',
            'description': 'Manufacture of other plastic products',
            'details': 'This class includes:\n- manufacture of plastic tableware, kitchenware and toilet articles\n- manufacture of diverse plastic products:\n  . plastic headgear, insulating fittings, parts of lighting fittings, office or school supplies, articles of apparel (if only sealed together, not sewn), fittings for furniture, statuettes, transmission and conveyer belts, self-adhesive tapes of plastic, plastic shoe lasts, plastic cigar and cigarette holders, combs, plastics hair curlers, plastics novelties, etc.'
        },
        {
            'id': 153,
            'code': '23.11',
            'description': 'Manufacture of flat glass',
            'details': 'This class includes:\n- manufacture of flat glass, including wired, coloured or tinted flat glass'
        },
        {
            'id': 154,
            'code': '23.12',
            'description': 'Shaping and processing of flat glass',
            'details': 'This class includes:\n- manufacture of toughened or laminated flat glass\n- manufacture of glass mirrors\n- manufacture of multiple-walled insulating units of glass'
        },
        {
            'id': 155,
            'code': '23.13',
            'description': 'Manufacture of hollow glass',
            'details': 'This class includes:\n- manufacture of bottles and other containers of glass or crystal\n- manufacture of drinking glasses and other domestic glass or crystal articles'
        },
        {
            'id': 156,
            'code': '23.14',
            'description': 'Manufacture of glass fibres',
            'details': 'This class includes:\n- manufacture of glass fibres, including glass wool and non-woven products thereof'
        },
        {
            'id': 157,
            'code': '23.19',
            'description': 'Manufacture and processing of other glass, including technical glassware',
            'details': 'This class includes:\n- manufacture of laboratory, hygienic or pharmaceutical glassware\n- manufacture of clock or watch glasses, optical glass and optical elements not optically worked\n- manufacture of glassware used in imitation jewellery\n- manufacture of glass insulators and glass insulating fittings\n- manufacture of glass envelopes for lamps\n- manufacture of glass figurines\n- manufacture of glass paving blocks\n- manufacture of glass in rods or tubes'
        },
        {
            'id': 158,
            'code': '23.20',
            'description': 'Manufacture of refractory products',
            'details': 'This class includes the manufacture of intermediate products from mined or quarried non-metallic minerals, such as sand, gravel, stone or clay.\n\nThis class includes:\n- manufacture of refractory mortars, concretes etc.\n- manufacture of refractory ceramic goods:\n  . heat-insulating ceramic goods of siliceous fossil meals\n  . refractory bricks, blocks and tiles etc.\n  . retorts, crucibles, muffles, nozzles, tubes, pipes etc.'
        },
        {
            'id': 159,
            'code': '23.31',
            'description': 'Manufacture of ceramic tiles and flags',
            'details': 'This class includes:\n- manufacture of non-refractory ceramic hearth or wall tiles, mosaic cubes etc.\n- manufacture of non-refractory ceramic flags and paving'
        },
        {
            'id': 160,
            'code': '23.32',
            'description': 'Manufacture of bricks, tiles and construction products, in baked clay',
            'details': 'This class includes:\n- manufacture of structural non-refractory clay building materials:\n  . manufacture of ceramic bricks, roofing tiles, chimney pots, pipes, conduits etc.\n- manufacture of flooring blocks in baked clay'
        },
        {
            'id': 161,
            'code': '23.41',
            'description': 'Manufacture of ceramic household and ornamental articles',
            'details': 'This class includes:\n- manufacture of ceramic tableware and other domestic or toilet articles\n- manufacture of statuettes and other ornamental ceramic articles'
        },
        {
            'id': 162,
            'code': '23.42',
            'description': 'Manufacture of ceramic sanitary fixtures',
            'details': 'This class includes:\n- manufacture of ceramic sanitary fixtures, e.g. sinks, baths, bidets, water closet pans etc.\n- manufacture of other ceramic fixtures'
        },
        {
            'id': 163,
            'code': '23.43',
            'description': 'Manufacture of ceramic insulators and insulating fittings',
            'details': 'This class includes:\n- manufacture of electrical insulators and insulating fittings of ceramics'
        },
        {
            'id': 164,
            'code': '23.44',
            'description': 'Manufacture of other technical ceramic products',
            'details': 'This class includes:\n- manufacture of ceramic and ferrite magnets\n- manufacture of ceramic laboratory, chemical and industrial products'
        },
        {
            'id': 165,
            'code': '23.49',
            'description': 'Manufacture of other ceramic products',
            'details': 'This class includes:\n- manufacture of ceramic pots, jars and similar articles of a kind used for conveyance or packing of goods\n- manufacture of ceramic products n.e.c.'
        },
        {
            'id': 166,
            'code': '23.51',
            'description': 'Manufacture of cement',
            'details': 'This class includes:\n- manufacture of clinkers and hydraulic cements, including Portland, aluminous cement, slag cement and superphosphate cements'
        },
        {
            'id': 167,
            'code': '23.52',
            'description': 'Manufacture of lime and plaster',
            'details': 'This class includes:\n- manufacture of quicklime, slaked lime and hydraulic lime\n- manufacture of plasters of calcined gypsum or calcined sulphate'
        },
        {
            'id': 168,
            'code': '23.61',
            'description': 'Manufacture of concrete products for construction purposes',
            'details': 'This class includes:\n- manufacture of precast concrete, cement or artificial stone articles for use in construction:\n  . tiles, flagstones, bricks, boards, sheets, panels, pipes, posts etc.\n- manufacture of prefabricated structural components for building or civil engineering of cement, concrete or artificial stone'
        },
        {
            'id': 169,
            'code': '23.62',
            'description': 'Manufacture of plaster products for construction purposes',
            'details': 'This class includes:\n- manufacture of plaster articles for use in construction:\n  . boards, sheets, panels etc.'
        },
        {
            'id': 170,
            'code': '23.63',
            'description': 'Manufacture of ready-mixed concrete',
            'details': 'This class includes:\n- manufacture of ready-mix and dry-mix concrete and mortars'
        },
        {
            'id': 171,
            'code': '23.64',
            'description': 'Manufacture of mortars',
            'details': 'This class includes:\n- manufacture of powdered mortars'
        },
        {
            'id': 172,
            'code': '23.65',
            'description': 'Manufacture of fibre cement',
            'details': 'This class includes:\n- manufacture of building materials of vegetable substances (wood wool, straw, reeds, rushes) agglomerated with cement, plaster or other mineral binder\n- manufacture of articles of asbestos-cement or cellulose fibre-cement or the like:\n  . corrugated sheets, other sheets, panels, tiles, tubes, pipes, reservoirs, troughs, basins, sinks, jars, furniture, window frames etc.'
        },
        {
            'id': 173,
            'code': '23.69',
            'description': 'Manufacture of other articles of concrete, plaster and cement',
            'details': 'This class includes:\n- manufacture of other articles of concrete, plaster, cement or artificial stone:\n  . statuary, furniture, bas- and haut-reliefs, vases, flowerpots etc.'
        },
        {
            'id': 174,
            'code': '23.70',
            'description': 'Cutting, shaping and finishing of stone',
            'details': 'This class includes:\n- cutting, shaping and finishing of stone for use in construction, in cemeteries, on roads, as roofing etc.\n- manufacture of stone furniture'
        },
        {
            'id': 175,
            'code': '23.91',
            'description': 'Production of abrasive products',
            'details': 'This class includes:\n- manufacture of millstones, sharpening or polishing stones and natural or artificial abrasive products on a support, including abrasive products on a soft base (e.g. sandpaper)'
        },
        {
            'id': 176,
            'code': '23.99',
            'description': 'Manufacture of other non-metallic mineral products n.e.c.',
            'details': 'This class includes:\n- manufacture of friction material and unmounted articles thereof with a base of mineral substances or of cellulose\n- manufacture of mineral insulating materials:\n  . slag wool, rock wool and similar mineral wools; exfoliated vermiculite, expanded clays and similar heat-insulating, sound-insulating or sound-absorbing materials\n- manufacture of articles of diverse mineral substances:\n  . worked mica and articles of mica, of peat, of graphite (other than electrical articles) etc. \n- manufacture of articles of asphalt or similar material, e.g. asphalt-based adhesives, coal tar pitch etc.\n- manufacture of carbon and graphite fibres and products (except electrodes and electrical applications)\n- manufacture of artificial corundum'
        },
        {
            'id': 177,
            'code': '24.10',
            'description': 'Manufacture of basic iron and steel and of ferro-alloys ',
            'details': 'This class includes:\n- operation of blast furnaces, steel converters, rolling and finishing mills\n- production of pig iron and spiegeleisen in pigs, blocks or other primary forms\n- production of ferro-alloys\n- production of ferrous products by direct reduction of iron and other spongy ferrous products\n- production of iron of exceptional purity by electrolysis or other chemical processes\n- remelting of scrap ingots of iron or steel\n- production of granular iron and iron powder\n- production of steel in ingots or other primary forms\n- production of semi-finished products of steel\n- manufacture of hot-rolled and cold-rolled flat-rolled products of steel\n- manufacture of hot-rolled bars and rods of steel\n- manufacture of hot-rolled open sections of steel\n- manufacture of sheet piling of steel and welded open sections of steel\n- manufacture of railway track materials (unassembled rails) of steel'
        },
        {
            'id': 178,
            'code': '24.20',
            'description': 'Manufacture of tubes, pipes, hollow profiles and related fittings, of steel',
            'details': 'This class includes:\n- manufacture of seamless tubes and pipes of circular or non-circular cross section and of blanks of circular cross section, for further processing, by hot rolling, hot extrusion or by other hot processes of an intermediate product which can be a bar or a billet obtained by hot rolling or continuous casting\n- manufacture of precision and non-precision seamless tubes and pipes from hot rolled or hot extruded blanks by further processing, by cold-drawing or cold-rolling of tubes and pipes of circular cross section and by cold drawing only for tubes and pipes of non circular cross section and hollow profiles\n- manufacture of welded tubes and pipes of an external diameter exceeding 406,4 mm, cold formed from hot rolled flat products and longitudinally or spirally welded\n- manufacture of welded tubes and pipes of an external diameter of 406,4 mm or less of circular cross section by continuous cold or hot forming of hot or cold rolled flat products and longitudinally or spirally welded and of non-circular cross section by hot or cold forming into shape from hot or cold rolled strip longitudinally welded\n- manufacture of welded precision tubes and pipes of an external diameter of 406,4 mm or less by hot or cold forming of hot or cold rolled strip and longitudinally welded delivered as welded or further processed, by cold drawing or cold rolling or cold formed into shape for tube and pipe of non-circular cross section\n- manufacture of flat flanges and flanges with forged collars by processing of hot rolled flat products of steel\n- manufacture of butt-welding fittings, such as elbows and reductions, by forging of hot rolled seamless tubes of steel\n- threaded and other tube or pipe fittings of steel'
        },
        {
            'id': 179,
            'code': '24.31',
            'description': 'Cold drawing of bars',
            'details': 'This class includes:\n- manufacture of steel bars and solid sections of steel by cold drawing, grinding or turning'
        },
        {
            'id': 180,
            'code': '24.32',
            'description': 'Cold rolling of narrow strip',
            'details': 'This class includes:\n- manufacture of coated or uncoated flat rolled steel products in coils or in straight lengths of a width less than 600 mm by cold re-rolling of hot-rolled flat products or of steel rod'
        },
        {
            'id': 181,
            'code': '24.33',
            'description': 'Cold forming or folding',
            'details': 'This class includes:\n- manufacture of open sections by progressive cold forming on a roll mill or folding on a press of flat-rolled products of steel\n- manufacture of cold-formed or cold-folded, ribbed sheets and sandwich panels'
        },
        {
            'id': 182,
            'code': '24.34',
            'description': 'Cold drawing of wire',
            'details': 'This class includes:\n- manufacture of drawn steel wire, by cold drawing of steel wire rod'
        },
        {
            'id': 183,
            'code': '24.41',
            'description': 'Precious metals production',
            'details': 'This class includes:\n- production of basic precious metals:\n  . production and refining of unwrought or wrought precious metals: gold, silver, platinum etc. from ore and scrap\n- production of precious metal alloys\n- production of precious metal semi-products\n- production of silver rolled onto base metals\n- production of gold rolled onto base metals or silver\n- production of platinum and platinum group metals rolled onto gold, silver or base metals'
        },
        {
            'id': 184,
            'code': '24.42',
            'description': 'Aluminium production',
            'details': 'This class includes:\n- production of aluminium from alumina\n- production of aluminium from electrolytic refining of aluminium waste and scrap\n- production of aluminium alloys\n- semi-manufacture of aluminium'
        },
        {
            'id': 185,
            'code': '24.43',
            'description': 'Lead, zinc and tin production',
            'details': 'This class includes:\n- production of lead, zinc and tin from ores\n- production of lead, zinc and tin from electrolytic refining of lead, zinc and tin waste and scrap\n- production of lead, zinc and tin alloys\n- semi-manufacture of lead, zinc and tin'
        },
        {
            'id': 186,
            'code': '24.44',
            'description': 'Copper production',
            'details': 'This class includes:\n- production of copper from ores\n- production of copper from electrolytic refining of copper waste and scrap\n- production of copper alloys\n- manufacture of fuse wire or strip\n- semi-manufacture of copper'
        },
        {
            'id': 187,
            'code': '24.45',
            'description': 'Other non-ferrous metal production',
            'details': 'This class includes:\n- production of chrome, manganese, nickel etc. from ores or oxides\n- production of chrome, manganese, nickel etc. from electrolytic and aluminothermic refining of chrome, manganese, nickel etc., waste and scrap\n- production of alloys of chrome, manganese, nickel etc. \n- semi-manufacture of chrome, manganese, nickel etc.\n- production of mattes of nickel'
        },
        {
            'id': 188,
            'code': '24.46',
            'description': 'Processing of nuclear fuel ',
            'details': 'This class includes:\n- production of uranium metal from pitchblende or other ores\n- smelting and refining of uranium'
        },
        {
            'id': 189,
            'code': '24.51',
            'description': 'Casting of iron',
            'details': 'This class includes activities of iron foundries.\n\nThis class includes:\n- casting of semi-finished iron products\n- casting of grey iron castings\n- casting of spheroidal graphite iron castings\n- casting of malleable cast-iron products\n- manufacture of tubes, pipes and hollow profiles and of tube or pipe fittings of cast-iron'
        },
        {
            'id': 190,
            'code': '24.52',
            'description': 'Casting of steel',
            'details': 'This class includes activities of steel foundries.\n\nThis class includes:\n- casting of semi-finished steel products\n- casting of steel castings\n- manufacture of seamless tubes and pipes of steel by centrifugal casting\n- manufacture of tube or pipe fittings of cast-steel'
        },
        {
            'id': 191,
            'code': '24.53',
            'description': 'Casting of light metals',
            'details': 'This class includes:\n- casting of semi-finished products of aluminium, magnesium, titanium, zinc etc.\n- casting of light metal castings'
        },
        {
            'id': 192,
            'code': '24.54',
            'description': 'Casting of other non-ferrous metals',
            'details': 'This class includes:\n- casting of heavy metal castings\n- casting of precious metal castings\n- die-casting of non-ferrous metal castings'
        },
        {
            'id': 193,
            'code': '25.11',
            'description': 'Manufacture of metal structures and parts of structures',
            'details': 'This class includes:\n- manufacture of metal frameworks or skeletons for construction and parts thereof (towers, masts, trusses, bridges etc.)\n- manufacture of industrial frameworks in metal (frameworks for blast furnaces, lifting and handling equipment etc.)\n- manufacture of prefabricated buildings mainly of metal:\n  . site huts, modular exhibition elements etc.'
        },
        {
            'id': 194,
            'code': '25.12',
            'description': 'Manufacture of doors and windows of metal',
            'details': 'This class includes:\n- manufacture of metal doors, windows and their frames, shutters and gates\n- metal room partitions for floor attachment'
        },
        {
            'id': 195,
            'code': '25.21',
            'description': 'Manufacture of central heating radiators and boilers'
        },
        {
            'id': 196,
            'code': '25.29',
            'description': 'Manufacture of other tanks, reservoirs and containers of metal',
            'details': 'This class includes:\n- manufacture of reservoirs, tanks and similar containers of metal, of types normally installed as fixtures for storage or manufacturing use\n- manufacture of metal containers for compressed or liquefied gas'
        },
        {
            'id': 197,
            'code': '25.30',
            'description': 'Manufacture of steam generators, except central heating hot water boilers',
            'details': 'This class includes:\n- manufacture of steam or other vapour generators\n- manufacture of auxiliary plant for use with steam generators:\n  . condensers, economisers, superheaters, steam collectors and accumulators\n- manufacture of nuclear reactors, except isotope separators\n- manufacture of parts for marine or power boilers'
        },
        {
            'id': 198,
            'code': '25.40',
            'description': 'Manufacture of weapons and ammunition',
            'details': 'This class includes:\n- manufacture of heavy weapons (artillery, mobile guns, rocket launchers, torpedo tubes, heavy machine guns)\n- manufacture of small arms (revolvers, shotguns, light machine guns)\n- manufacture of air or gas guns and pistols\n- manufacture of war ammunition'
        },
        {
            'id': 199,
            'code': '25.50',
            'description': 'Forging, pressing, stamping and roll-forming of metal; powder metallurgy',
            'details': 'This class includes:\n- forging, pressing, stamping and roll-forming of metal\n- powder metallurgy: production of metal objects directly from metal powders by heat treatment (sintering) or under pressure'
        },
        {
            'id': 200,
            'code': '25.61',
            'description': 'Treatment and coating of metals',
            'details': 'This class includes:\n- plating, anodising etc. of metals\n- heat treatment of metals\n- deburring, sandblasting, tumbling, cleaning of metals\n- colouring, engraving of metals\n- non-metallic coating of metals:\n  . plasticising, enamelling, lacquering etc.\n- hardening, buffing of metals'
        },
        {
            'id': 201,
            'code': '25.62',
            'description': 'Machining',
            'details': 'This class includes:\n- boring, turning, milling, eroding, planing, lapping, broaching, levelling, sawing, grinding, sharpening, polishing, welding, splicing etc. of metalwork pieces\n- cutting of and writing on metals by means of laser beams'
        },
        {
            'id': 202,
            'code': '25.71',
            'description': 'Manufacture of cutlery',
            'details': 'This class includes:\n- manufacture of domestic cutlery such as knives, forks, spoons etc.\n- manufacture of other articles of cutlery:\n  . cleavers and choppers\n  . razors and razor blades\n  . scissors and hair clippers\n- manufacture of cutlasses, swords, bayonets etc.'
        },
        {
            'id': 203,
            'code': '25.72',
            'description': 'Manufacture of locks and hinges',
            'details': 'This class includes:\n- manufacture of padlocks, locks, keys, hinges and the like, hardware for buildings, furniture, vehicles etc.'
        },
        {
            'id': 204,
            'code': '25.73',
            'description': 'Manufacture of tools',
            'details': "This class includes:\n- manufacture of knives and cutting blades for machines or for mechanical appliances\n- manufacture of hand tools such as pliers, screwdrivers etc.\n- manufacture of non-power-driven agricultural hand tools\n- manufacture of saws and saw blades, including circular saw blades and chainsaw blades\n- manufacture of interchangeable tools for hand tools, whether or not power-operated, or for machine tools: drills, punches, milling cutters etc.\n- manufacture of press tools\n- manufacture of blacksmiths' tools: forges, anvils etc.\n- manufacture of moulding boxes and moulds (except ingot moulds)\n- manufacture of vices, clamps"
        },
        {
            'id': 205,
            'code': '25.91',
            'description': 'Manufacture of steel drums and similar containers',
            'details': 'This class includes:\n- manufacture of pails, cans, drums, buckets, boxes'
        },
        {
            'id': 206,
            'code': '25.92',
            'description': 'Manufacture of light metal packaging ',
            'details': 'This class includes:\n- manufacture of tins and cans for food products, collapsible tubes and boxes\n- manufacture of metallic closures'
        },
        {
            'id': 207,
            'code': '25.93',
            'description': 'Manufacture of wire products, chain and springs',
            'details': 'This class includes:\n- manufacture of metal cable, plaited bands and similar articles\n- manufacture of uninsulated metal cable or insulated cable not capable of being used as a conductor of electricity\n- manufacture of coated or cored wire\n- manufacture of articles made of wire: barbed wire, wire fencing, grill, netting, cloth etc.\n- coated electrodes for electric arc-welding\n- manufacture of nails and pins\n- manufacture of springs (except watch springs):\n  . leaf springs, helical springs, torsion bar springs\n  . leaves for springs\n- manufacture of chain, except power transmission chain'
        },
        {
            'id': 208,
            'code': '25.94',
            'description': 'Manufacture of fasteners and screw machine products',
            'details': 'This class includes:\n- manufacture of rivets, washers and similar non-threaded products\n- manufacture of screw machine products\n- manufacture of bolts, screws, nuts and similar threaded products'
        },
        {
            'id': 209,
            'code': '25.99',
            'description': 'Manufacture of other fabricated metal products n.e.c.',
            'details': 'This class includes:\n- manufacture of metal household articles:\n  . flatware: plates, saucers etc.\n  . hollowware: pots, kettles etc.\n  . dinnerware: bowls, platters etc.\n  . saucepans, frying pans and other non-electrical utensils for use at the table or in the kitchen\n  . small hand-operated kitchen appliances and accessories\n  . metal scouring pads\n- manufacture of building components of zinc: gutters, roof capping, baths, sinks, washbasins and similar articles\n- manufacture of metal goods for office use, except furniture\n- manufacture of safes, strongboxes, armoured doors etc.\n- manufacture of various metal articles:\n  . ship propellers and blades thereof\n  . anchors\n  . bells\n  . assembled railway track fixtures\n  . clasps, buckles, hooks\n  . metal ladder\n  . metal signs, including road signs\n- manufacture of foil bags\n- manufacture of permanent metallic magnets\n- manufacture of metal vacuum jugs and bottles\n- manufacture of metal badges and metal military insignia\n- manufacture of metal hair curlers, metal umbrella handles and frames, combs'
        },
        {
            'id': 210,
            'code': '26.11',
            'description': 'Manufacture of electronic components',
            'details': 'This class includes the manufacture of semi-conductors and other components for electronic applications. \n\nThis class includes:\n- manufacture of capacitors, electronic\n- manufacture of resistors, electronic\n- manufacture of microprocessors\n- manufacture of electron tubes\n- manufacture of electronic connectors\n- manufacture of bare printed circuit boards\n- manufacture of integrated circuits (analog, digital or hybrid)\n- manufacture of diodes, transistors and related discrete devices\n- manufacture of inductors (e.g. chokes, coils, transformers), electronic component type\n- manufacture of electronic crystals and crystal assemblies\n- manufacture of solenoids, switches and transducers for electronic applications\n- manufacture of dice or wafers, semi-conductor, finished or semi-finished\n- manufacture of display components (plasma, polymer, LCD)\n- manufacture of light emitting diodes (LED)'
        },
        {
            'id': 211,
            'code': '26.12',
            'description': 'Manufacture of loaded electronic boards',
            'details': 'This class includes:\n- manufacture of loaded printed circuit boards\n- loading of components onto printed circuit boards\n- manufacture of interface cards (e.g. sound, video, controllers, network, modems)'
        },
        {
            'id': 212,
            'code': '26.20',
            'description': 'Manufacture of computers and peripheral equipment',
            'details': 'This class includes the manufacture and/or assembly of electronic computers, such as mainframes, desktop computers, laptops and computer servers; and computer peripheral equipment, such as storage devices and input/output devices (printers, monitors, keyboards). Computers can be analog, digital, or hybrid. Digital computers, the most common type, are devices that do all of the following: (1) store the processing program or programs and the data immediately necessary for the execution of the program, (2) can be freely programmed in accordance with the requirements of the user, (3) perform arithmetical computations specified by the user and (4) execute, without human intervention, a processing program that requires the computer to modify its execution by logical decision during the processing run. Analog computers are capable of simulating mathematical models and comprise at least analog control and programming elements.\n\nThis class includes:\n- manufacture of desktop computers\n- manufacture of laptop computers\n- manufacture of main frame computers\n- manufacture of hand-held computers (e.g. PDA)\n- manufacture of magnetic disk drives, flash drives and other storage devices\n- manufacture of optical (e.g. CD-RW, CD-ROM, DVD-ROM, DVD-RW) disk drives\n- manufacture of printers\n- manufacture of monitors\n- manufacture of keyboards\n- manufacture of all types of mice, joysticks, and trackball accessories\n- manufacture of dedicated computer terminals\n- manufacture of computer servers\n- manufacture of scanners, including bar code scanners\n- manufacture of smart card readers\n- manufacture of virtual reality helmets\n- manufacture of computer projectors (video beamers)'
        },
        {
            'id': 213,
            'code': '26.30',
            'description': 'Manufacture of communication equipment',
            'details': 'This class includes the manufacture of telephone and data communications equipment used to move signals electronically over wires or through the air such as radio and television broadcast and wireless communications equipment.\n\nThis class includes:\n- manufacture of central office switching equipment\n- manufacture of cordless telephones\n- manufacture of private branch exchange (PBX) equipment\n- manufacture of telephone and facsimile equipment, including telephone answering machines\n- manufacture of data communications equipment, such as bridges, routers, and gateways\n- manufacture of transmitting and receiving antenna\n- manufacture of cable television equipment\n- manufacture of pagers\n- manufacture of cellular phones\n- manufacture of mobile communication equipment\n- manufacture of radio and television studio and broadcasting equipment, including television cameras\n- manufacture of modems, carrier equipment\n- manufacture of burglar and fire alarm systems, sending signals to a control station\n- manufacture of radio and television transmitters\n- manufacture of communication devices using infrared signal (e.g. remote controls)'
        },
        {
            'id': 214,
            'code': '26.40',
            'description': 'Manufacture of consumer electronics',
            'details': 'This class includes the manufacture of electronic audio and video equipment for home entertainment, motor vehicle, public address systems and musical instrument amplification. \n\nThis class includes:\n- manufacture of video cassette recorders and duplicating equipment\n- manufacture of televisions\n- manufacture of television monitors and displays\n- manufacture of audio recording and duplicating systems\n- manufacture of stereo equipment\n- manufacture of radio receivers\n- manufacture of speaker systems\n- manufacture of household-type video cameras\n- manufacture of jukeboxes\n- manufacture of amplifiers for musical instruments and public address systems\n- manufacture of microphones\n- manufacture of CD and DVD players\n- manufacture of karaoke machines\n- manufacture of headphones (e.g. radio, stereo, computer)\n- manufacture of video game consoles'
        },
        {
            'id': 215,
            'code': '26.51',
            'description': 'Manufacture of instruments and appliances for measuring, testing and navigation',
            'details': 'This class comprises manufacture of search, detection, navigation, guidance, aeronautical, and nautical systems and instruments; automatic controls and regulators for applications, such as heating, air-conditioning, refrigeration and appliances; instruments and devices for measuring, displaying, indicating, recording, transmitting, and controlling temperature, humidity, pressure, vacuum, combustion, flow, level, viscosity, density, acidity, concentration, and rotation; totalising (i.e., registering) fluid meters and counting devices; instruments for measuring and testing the characteristics of electricity and electrical signals; instruments and instrumentation systems for laboratory analysis of the chemical or physical composition or concentration of samples of solid, fluid, gaseous, or composite material; other measuring and testing instruments and parts thereof.\n\nThe manufacture of non-electric measuring, testing and navigating equipment (except simple mechanical tools) is included here.\n\nThis class includes:\n- manufacture of aircraft engine instruments\n- manufacture of automotive emissions testing equipment\n- manufacture of meteorological instruments\n- manufacture of physical properties testing and inspection equipment\n- manufacture of polygraph machines\n- manufacture of radiation detection and monitoring instruments\n- manufacture of surveying instruments\n- manufacture of thermometers liquid-in-glass and bimetal types (except medical)\n- manufacture of humidistats\n- manufacture of hydronic limit controls\n- manufacture of flame and burner control\n- manufacture of spectrometers\n- manufacture of pneumatic gauges\n- manufacture of consumption meters (e.g., water, gas, electricity)\n- manufacture of flow meters and counting devices\n- manufacture of tally counters\n- manufacture of mine detectors, pulse (signal) generators; metal detectors\n- manufacture of search, detection, navigation, aeronautical, and nautical equipment, including sonobuoys\n- manufacture of radar equipment\n- manufacture of GPS devices\n- manufacture of environmental controls and automatic controls for appliances\n- manufacture of measuring and recording equipment (e.g. flight recorders)\n- manufacture of motion detectors\n- manufacture of radars\n- manufacture of laboratory analytical instruments (e.g. blood analysis equipment) \n- manufacture of laboratory scales, balances, incubators, and miscellaneous laboratory apparatus for measuring, testing, etc.'
        },
        {
            'id': 216,
            'code': '26.52',
            'description': 'Manufacture of watches and clocks',
            'details': 'This class includes the manufacture of watches, clocks and timing mechanisms and parts thereof.\n\nThis class includes:\n- manufacture of watches and clocks of all kinds, including instrument panel clocks\n- manufacture of watch and clock cases, including cases of precious metals\n- manufacture of time-recording equipment and equipment for measuring, recording and otherwise displaying intervals of time with a watch or clock movement or with synchronous motor, such as:\n  . parking meters\n  . time clocks\n  . time/date stamps\n  . process timers\n- manufacture of time switches and other releases with a watch or clock movement or with synchronous motor:\n  . time locks\n- manufacture of components for clocks and watches: \n  . movements of all kinds for watches and clocks\n  . springs, jewels, dials, hands, plates, bridges and other parts\n  . watch and clock cases and housings of all materials'
        },
        {
            'id': 217,
            'code': '26.60',
            'description': 'Manufacture of irradiation, electromedical and electrotherapeutic equipment',
            'details': 'This class includes:\n- manufacture of irradiation apparatus and tubes (e.g. industrial, medical diagnostic, medical therapeutic, research, scientific):\n  . beta-, gamma, X-ray or other radiation equipment\n- manufacture of CT scanners\n- manufacture of PET scanners\n- manufacture of magnetic resonance imaging (MRI) equipment\n- manufacture of medical ultrasound equipment\n- manufacture of electrocardiographs\n- manufacture of electromedical endoscopic equipment\n- manufacture of medical laser equipment\n- manufacture of pacemakers\n- manufacture of hearing aids'
        },
        {
            'id': 218,
            'code': '26.70',
            'description': 'Manufacture of optical instruments and photographic equipment',
            'details': "This class includes the manufacture of optical instruments and lenses, such as binoculars, microscopes (except electron, proton), telescopes, prisms and lenses (except ophthalmic); the coating or polishing of lenses (except ophthalmic); the mounting of lenses (except ophthalmic) and the manufacture of photographic equipment such as cameras and light meters.\n\nThis class includes:\n- manufacture of optical mirrors\n- manufacture of optical gun sighting equipment\n- manufacture of optical positioning equipment\n- manufacture of optical magnifying instruments\n- manufacture of optical machinist's precision tools\n- manufacture of optical comparators\n- manufacture of film cameras and digital cameras\n- manufacture of motion picture and slide projectors\n- manufacture of overhead transparency projectors\n- manufacture of optical measuring and checking devices and instruments (e.g. fire control equipment, photographic light meters, range finders)\n- manufacture of lenses, optical microscopes, binoculars and telescopes\n- manufacture of laser assemblies"
        },
        {
            'id': 219,
            'code': '26.80',
            'description': 'Manufacture of magnetic and optical media',
            'details': 'This class includes the manufacture of magnetic and optical recording media.\n\nThis class includes:\n- manufacture of blank magnetic audio and video tapes\n- manufacture of blank magnetic audio and video cassettes\n- manufacture of blank diskettes\n- manufacture of blank optical discs\n- manufacture of hard drive media'
        },
        {
            'id': 220,
            'code': '27.11',
            'description': 'Manufacture of electric motors, generators and transformers',
            'details': 'This class includes manufacture of all electric motors and transformers: AC, DC and AC/DC.\n\nThis class includes:\n- manufacture of electric motors (except internal combustion engine starting motors)\n- manufacture of distribution transformers, electric\n- manufacture of arc-welding transformers\n- manufacture of fluorescent ballasts (i.e. transformers)\n- manufacture of substation transformers for electric power distribution\n- manufacture of transmission and distribution voltage regulators\n- manufacture of power generators (except battery charging alternators for internal combustion engines)\n- manufacture of motor generator sets (except turbine generator set units)\n- rewinding of armatures on a factory basis'
        },
        {
            'id': 221,
            'code': '27.12',
            'description': 'Manufacture of electricity distribution and control apparatus',
            'details': 'This class includes:\n- manufacture of power circuit breakers\n- manufacture of surge suppressors (for distribution level voltage)\n- manufacture of control panels for electric power distribution\n- manufacture of electrical relays\n- manufacture of duct for electrical switchboard apparatus\n- manufacture of electric fuses\n- manufacture of power switching equipment\n- manufacture of electric power switches (except pushbutton, snap, solenoid, tumbler)\n- manufacture of prime mover generator sets'
        },
        {
            'id': 222,
            'code': '27.20',
            'description': 'Manufacture of batteries and accumulators',
            'details': 'This class includes the manufacture of non-rechargeable and rechargeable batteries.\n\nThis class includes:\n- manufacture of primary cells and primary batteries \n  . cells containing manganese dioxide, mercuric dioxide, silver oxide etc.\n- manufacture of electric accumulators, including parts thereof:\n  . separators, containers, covers\n- manufacture of lead acid batteries\n- manufacture of NiCad batteries\n- manufacture of NiMH batteries\n- manufacture of lithium batteries\n- manufacture of dry cell batteries\n- manufacture of wet cell batteries'
        },
        {
            'id': 223,
            'code': '27.31',
            'description': 'Manufacture of fibre optic cables',
            'details': 'This class includes:\n- manufacture of fibre optic cable for data transmission or live transmission of images'
        },
        {
            'id': 224,
            'code': '27.32',
            'description': 'Manufacture of other electronic and electric wires and cables',
            'details': 'This class includes:\n- manufacture of insulated wire and cable, made of steel, copper, aluminium'
        },
        {
            'id': 225,
            'code': '27.33',
            'description': 'Manufacture of wiring devices',
            'details': 'This class includes the manufacture of current-carrying and non current-carrying wiring devices for electrical circuits regardless of material.\n\nThis class includes:\n- manufacture of bus bars, electrical conductors (except switchgear-type) \n- manufacture of GFCI (ground fault circuit interrupters) \n- manufacture of lamp holders \n- manufacture of lightning arrestors and coils\n- manufacture of switches for electrical wiring (e.g. pressure, pushbutton, snap, tumbler switches) \n- manufacture of electrical outlets or sockets\n- manufacture of boxes for electrical wiring (e.g. junction, outlet, switch boxes) \n- manufacture of electrical conduit and fitting \n- manufacture of transmission pole and line hardware \n- manufacture of plastic non current carrying wiring devices including plastic junction boxes, face plates and similar, plastic pole line fittings and switch covers'
        },
        {
            'id': 226,
            'code': '27.40',
            'description': 'Manufacture of electric lighting equipment',
            'details': 'This class includes the manufacture of electric light bulbs and tubes and parts and components thereof (except glass blanks for electric light bulbs), electric lighting fixtures and lighting fixture components (except current-carrying wiring devices).\n\nThis class includes:\n- manufacture of discharge, incandescent, fluorescent, ultra-violet, infra-red etc. lamps, fixtures and bulbs\n- manufacture of ceiling lighting fixtures\n- manufacture of chandeliers\n- manufacture of table lamps (i.e. lighting fixture)\n- manufacture of Christmas tree lighting sets \n- manufacture of electric fireplace logs \n- manufacture of flashlights\n- manufacture of electric insect lamps\n- manufacture of lanterns (e.g. carbide, electric, gas, gasoline, kerosene)\n- manufacture of spotlights\n- manufacture of street lighting fixtures (except traffic signals)\n- manufacture of lighting equipment for transportation equipment (e.g. for motor vehicles, aircraft, boats)'
        },
        {
            'id': 227,
            'code': '27.51',
            'description': 'Manufacture of electric domestic appliances',
            'details': 'This class includes:\n- manufacture of domestic electric appliances:\n  . refrigerators \n  . freezers\n  . dishwashers\n  . washing and drying machines\n  . vacuum cleaners\n  . floor polishers\n  . waste disposers\n  . grinders, blenders, juice squeezers\n  . tin openers\n  . electric shavers, electric toothbrushes, and other electric personal care device\n  . knife sharpeners\n  . ventilating or recycling hoods\n- manufacture of domestic electrothermic appliances:\n  . electric water heaters\n  . electric blankets\n  . electric dryers, combs, brushes, curlers\n  . electric smoothing irons\n  . space heaters and household-type fans, portable\n  . electric ovens\n  . microwave ovens\n  . cookers, hotplates\n  . toasters\n  . coffee or tea makers\n  . fry pans, roasters, grills, hoods\n  . electric heating resistors etc.'
        },
        {
            'id': 228,
            'code': '27.52',
            'description': 'Manufacture of non-electric domestic appliances',
            'details': 'This class includes:\n- manufacture of domestic non-electric cooking and heating equipment:\n  . non-electric space heaters, cooking ranges, grates, stoves, water heaters, cooking appliances, plate warmers'
        },
        {
            'id': 229,
            'code': '27.90',
            'description': 'Manufacture of other electrical equipment',
            'details': 'This class includes the manufacture of miscellaneous electrical equipment other than motors, generators and transformers, batteries and accumulators, wires and wiring devices, lighting equipment or domestic appliances.\n\nThis class includes:\n- manufacture of battery chargers, solid-state\n- manufacture of door opening and closing devices, electrical\n- manufacture of electric bells\n- manufacture of extension cords made from purchased insulated wire\n- manufacture of ultrasonic cleaning machines (except laboratory and dental)\n- manufacture of tanning beds\n- manufacture of solid state inverters, rectifying apparatus, fuel cells, regulated and unregulated power supplies\n- manufacture of uninterruptible power supplies (UPS)\n- manufacture of surge suppressors (except for distribution level voltage)\n- manufacture of appliance cords, extension cords, and other electrical cord sets with insulated wire and connectors\n- manufacture of carbon and graphite electrodes, contacts, and other electrical carbon and graphite products \n- manufacture of particle accelerators\n- manufacture of electrical capacitors, resistors, condensers and similar components\n- manufacture of electromagnets\n- manufacture of sirens\n- manufacture of electronic scoreboards\n- manufacture of electrical signs\n- manufacture of electrical signalling equipment such as traffic lights and pedestrian signalling equipment\n- manufacture of electrical insulators (except glass or porcelain)\n- manufacture of electrical welding and soldering equipment, including hand-held soldering irons'
        },
        {
            'id': 230,
            'code': '28.11',
            'description': 'Manufacture of engines and turbines, except aircraft, vehicle and cycle engines',
            'details': 'This class includes:\n- manufacture of internal combustion piston engines, except motor vehicle, aircraft and cycle propulsion engines:\n  . marine engines\n  . railway engines\n- manufacture of pistons, piston rings, carburettors and such for all internal combustion engines, diesel engines etc.\n- manufacture of inlet and exhaust valves of internal combustion engines\n- manufacture of turbines and parts thereof:\n  . steam turbines and other vapour turbines\n  . hydraulic turbines, waterwheels and regulators thereof\n  . wind turbines\n  . gas turbines, except turbojets or turbo propellers for aircraft propulsion \n- manufacture of boiler-turbine sets\n- manufacture of turbine-generator sets\n- manufacture of engines for industrial application'
        },
        {
            'id': 231,
            'code': '28.12',
            'description': 'Manufacture of fluid power equipment',
            'details': 'This class includes:\n- manufacture of hydraulic and pneumatic components (including hydraulic pumps, hydraulic motors, hydraulic and pneumatic cylinders, hydraulic and pneumatic valves, hydraulic and pneumatic hose and fittings)\n- manufacture of air preparation equipment for use in pneumatic systems\n- manufacture of fluid power systems\n- manufacture of hydraulic transmission equipment\n- manufacture of hydrostatic transmissions'
        },
        {
            'id': 232,
            'code': '28.13',
            'description': 'Manufacture of other pumps and compressors',
            'details': 'This class includes:\n- manufacture of air or vacuum pumps, air or other gas compressors\n- manufacture of pumps for liquids whether or not fitted with a measuring device\n- manufacture of pumps designed for fitting to internal combustion engines: oil, water and fuel pumps for motor vehicles etc.'
        },
        {
            'id': 233,
            'code': '28.14',
            'description': 'Manufacture of other taps and valves',
            'details': 'This class includes:\n- manufacture of industrial taps and valves, including regulating valves and intake taps\n- manufacture of sanitary taps and valves\n- manufacture of heating taps and valves'
        },
        {
            'id': 234,
            'code': '28.15',
            'description': 'Manufacture of bearings, gears, gearing and driving elements',
            'details': 'This class includes:\n- manufacture of ball and roller bearings and parts thereof\n- manufacture of mechanical power transmission equipment:\n  . transmission shafts and cranks: camshafts, crankshafts, cranks etc.\n  . bearing housings and plain shaft bearings\n- manufacture of gears, gearing and gear boxes and other speed changers\n- manufacture of clutches and shaft couplings\n- manufacture of flywheels and pulleys\n- manufacture of articulated link chain\n- manufacture of power transmission chain'
        },
        {
            'id': 235,
            'code': '28.21',
            'description': 'Manufacture of ovens, furnaces and furnace burners',
            'details': 'This class includes:\n- manufacture of electrical and other industrial and laboratory furnaces and ovens, including incinerators\n- manufacture of burners\n- manufacture of permanent mount electric space heaters, electric swimming pool heaters\n- manufacture of permanent mount non-electric household heating equipment, such as solar heating, steam heating, oil heat and similar furnaces and heating equipment\n- manufacture of electric household-type furnaces (electric forced air furnaces, heat pumps, etc.), non-electric household forced air furnaces'
        },
        {
            'id': 236,
            'code': '28.22',
            'description': 'Manufacture of lifting and handling equipment',
            'details': 'This class includes:\n- manufacture of hand-operated or power-driven lifting, handling, loading or unloading machinery:\n  . pulley tackle and hoists, winches, capstans and jacks\n  . derricks, cranes, mobile lifting frames, straddle carriers etc.\n  . works trucks, whether or not fitted with lifting or handling equipment, whether or not self-propelled, of the type used in factories (including hand trucks and wheelbarrows)\n  . mechanical manipulators and industrial robots specifically designed for lifting, handling, loading or unloading\n- manufacture of conveyors, teleferics etc.\n- manufacture of lifts, escalators and moving walkways\n- manufacture of parts specialised for lifting and handling equipment'
        },
        {
            'id': 237,
            'code': '28.23',
            'description': 'Manufacture of office machinery and equipment (except computers and peripheral equipment)',
            'details': 'This class includes:\n- manufacture of calculating machines\n- manufacture of adding machines, cash registers\n- manufacture of calculators, electronic or not\n- manufacture of postage meters, mail handling machines (envelope stuffing, sealing and addressing machinery; opening, sorting, scanning), collating machinery\n- manufacture of typewriters\n- manufacture of stenography machines\n- manufacture of office-type binding equipment (i.e. plastic or tape binding) \n- manufacture of cheque writing machines\n- manufacture of coin counting and coin wrapping machinery\n- manufacture of pencil sharpeners\n- manufacture of staplers and staple removers\n- manufacture of voting machines\n- manufacture of tape dispensers\n- manufacture of hole punches\n- manufacture of cash registers, mechanically operated\n- manufacture of photocopy machines\n- manufacture of toner cartridges\n- manufacture of blackboards; white boards and marker boards\n- manufacture of dictating machines'
        },
        {
            'id': 238,
            'code': '28.24',
            'description': 'Manufacture of power-driven hand tools',
            'details': 'This class includes:\n- manufacture of hand tools, with self-contained electric or non-electric motor or pneumatic drive, such as:\n  . circular or reciprocating saws\n  . chain saws\n  . drills and hammer drills\n  . hand held power sanders\n  . pneumatic nailers\n  . buffers\n  . routers\n  . grinders\n  . staplers\n  . pneumatic rivet guns\n  . planers\n  . shears and nibblers\n  . impact wrenches\n  . powder actuated nailers'
        },
        {
            'id': 239,
            'code': '28.25',
            'description': 'Manufacture of non-domestic cooling and ventilation equipment',
            'details': 'This class includes:\n- manufacture of refrigerating or freezing industrial equipment, including assemblies of components\n- manufacture of air-conditioning machines, including for motor vehicles\n- manufacture of non-domestic fans\n- manufacture of heat exchangers\n- manufacture of machinery for liquefying air or gas\n- manufacture of attic ventilation fans (gable fans, roof ventilators, etc.)'
        },
        {
            'id': 240,
            'code': '28.29',
            'description': 'Manufacture of other general-purpose machinery n.e.c.',
            'details': "This class includes:\n- manufacture of weighing machinery (other than sensitive laboratory balances):\n  . household and shop scales, platform scales, scales for continuous weighing, weighbridges, weights etc.\n- manufacture of filtering or purifying machinery and apparatus for liquids\n- manufacture of equipment for projecting, dispersing or spraying liquids or powders:\n  . spray guns, fire extinguishers, sandblasting machines, steam cleaning machines etc.\n- manufacture of packing and wrapping machinery:\n  . filling, closing, sealing, capsuling or labelling machines etc.\n- manufacture of machinery for cleaning or drying bottles and for aerating beverages\n- manufacture of distilling or rectifying plant for petroleum refineries, chemical industries, beverage industries etc.\n- manufacture of gas generators\n- manufacture of calendaring or other rolling machines and cylinders thereof (except for metal and glass)\n- manufacture of centrifuges (except cream separators and clothes dryers)\n- manufacture of gaskets and similar joints made of a combination of materials or layers of the same material\n- manufacture of automatic goods vending machines\n- manufacture of levels, tape measures and similar hand tools, machinists' precision tools (except optical)\n- manufacture of non-electrical welding and soldering equipment\n- manufacture of cooling towers and similar for direct cooling by means of re-circulated water"
        },
        {
            'id': 241,
            'code': '28.30',
            'description': 'Manufacture of agricultural and forestry machinery',
            'details': 'This class includes:\n- manufacture of tractors used in agriculture and forestry\n- manufacture of walking (pedestrian-controlled) tractors\n- manufacture of mowers, including lawnmowers\n- manufacture of agricultural self-loading or self-unloading trailers or semi-trailers\n- manufacture of agricultural machinery for soil preparation, planting or fertilising:\n  . ploughs, manure spreaders, seeders, harrows etc.\n- manufacture of harvesting or threshing machinery:\n  . harvesters, threshers, sorters etc.\n- manufacture of milking machines\n- manufacture of spraying machinery for agricultural use\n- manufacture of diverse agricultural machinery:\n  . poultry-keeping machinery, bee-keeping machinery, equipment for preparing fodder etc.\n  . machines for cleaning, sorting or grading eggs, fruit etc.'
        },
        {
            'id': 242,
            'code': '28.41',
            'description': 'Manufacture of metal forming machinery',
            'details': 'This class includes:\n- manufacture of machine tools for working metals, including those using a laser beam, ultrasonic waves, plasma arc, magnetic pulse etc.\n- manufacture of machine tools for turning, drilling, milling, shaping, planing, boring, grinding etc.\n- manufacture of stamping or pressing machine tools\n- manufacture of punch presses, hydraulic presses, hydraulic brakes, drop hammers, forging machines etc.\n- manufacture of draw-benches, thread rollers or machines for working wires'
        },
        {
            'id': 243,
            'code': '28.49',
            'description': 'Manufacture of other machine tools',
            'details': 'This class includes:\n- manufacture of machine tools for working wood, bone, stone, hard rubber, hard plastics, cold glass etc., including those using a laser beam, ultrasonic waves, plasma arc, magnetic pulse etc.\n- manufacture of work holders for machine tools\n- manufacture of dividing heads and other special attachments for machine tools\n- manufacture of stationary machines for nailing, stapling, glueing or otherwise assembling wood, cork, bone, hard rubber or plastics etc.\n- manufacture of stationary rotary or rotary percussion drills, filing machines, riveters, sheet metal cutters etc. \n- manufacture of presses for the manufacture of particle board and the like\n- manufacture of electroplating machinery'
        },
        {
            'id': 244,
            'code': '28.91',
            'description': 'Manufacture of machinery for metallurgy',
            'details': 'This class includes:\n- manufacture of machines and equipment for handling hot metals:\n  . converters, ingot moulds, ladles, casting machines\n- manufacture of metal-rolling mills and rolls for such mills'
        },
        {
            'id': 245,
            'code': '28.92',
            'description': 'Manufacture of machinery for mining, quarrying and construction',
            'details': 'This class includes:\n- manufacture of continuous-action elevators and conveyors for underground use\n- manufacture of boring, cutting, sinking and tunnelling machinery (whether or not for underground use)\n- manufacture of machinery for treating minerals by screening, sorting, separating, washing, crushing etc.\n- manufacture of concrete and mortar mixers\n- manufacture of earth-moving machinery:\n  . bulldozers, angle-dozers, graders, scrapers, levellers, mechanical shovels, shovel loaders etc.\n- manufacture of pile drivers and pile extractors, mortar spreaders, bitumen spreaders, concrete surfacing machinery etc.\n- manufacture of track laying tractors and tractors used in construction or mining\n- manufacture of bulldozer and angle-dozer blades\n- manufacture of off-road dumping trucks'
        },
        {
            'id': 246,
            'code': '28.93',
            'description': 'Manufacture of machinery for food, beverage and tobacco processing',
            'details': 'This class includes:\n- manufacture of agricultural dryers\n- manufacture of machinery for the dairy industry:\n  . cream separators\n  . milk processing machinery (e.g. homogenisers)\n  . milk converting machinery (e.g. butter chums, butter workers and moulding machines)\n  . cheese-making machines (e.g. homogenisers, moulders, presses) etc.\n- manufacture of machinery for the grain milling industry:\n  . machinery to clean, sort or grade seeds, grain or dried leguminous vegetables (winnowers, sieving belts, separators, grain brushing machines etc.)\n  . machinery to produce flour and meal etc. (grinding mills, feeders, sifters, bran cleaners, blenders, rice hullers, pea splitters)\n- manufacture of presses, crushers etc. used to make wine, cider, fruit juices etc.\n- manufacture of machinery for the bakery industry or for making macaroni, spaghetti or similar products:\n  . bakery ovens, dough mixers, dough-dividers, moulders, slicers, cake depositing machines etc.\n- manufacture of machines and equipment to process diverse foods:\n  . machinery to make confectionery, cocoa or chocolate; to manufacture sugar; for breweries; to process meat or poultry, to prepare fruit, nuts or vegetables; to prepare fish, shellfish or other seafood\n  . machinery for filtering and purifying\n  . other machinery for the industrial preparation or manufacture of food or drink\n- manufacture of machinery for the extraction or preparation of animal or vegetable fats or oils\n- manufacture of machinery for the preparation of tobacco and for the making of cigarettes or cigars, or for pipe or chewing tobacco or snuff\n- manufacture of machinery for the preparation of food in hotels and restaurants'
        },
        {
            'id': 247,
            'code': '28.94',
            'description': 'Manufacture of machinery for textile, apparel and leather production',
            'details': 'This class includes:\n- manufacture of textile machinery:\n  . machines for preparing, producing, extruding, drawing, texturing or cutting man-made textile fibres, materials or yarns\n  . machines for preparing textile fibres: cotton gins, bale breakers, garnetters, cotton spreaders, wool scourers, wool carbonisers, combs, carders, roving frames etc.\n  . spinning machines\n  . machines for preparing textile yarns: reelers, warpers and related machines\n  . weaving machines (looms), including hand looms\n  . knitting machines\n  . machines for making knotted net, tulle, lace, braid etc.\n- manufacture of auxiliary machines or equipment for textile machinery:\n  . dobbies, jacquards, automatic stop motions, shuttle changing mechanisms, spindles and spindle flyers etc.\n- manufacture of textile printing machinery\n- manufacture of machinery for fabric processing:\n  . machinery for washing, bleaching, dyeing, dressing, finishing, coating or impregnating textile fabrics\n  . manufacture of machines for reeling, unreeling, folding, cutting or pinking textile fabrics\n- manufacture of laundry machinery:\n  . ironing machines, including fusing presses\n  . commercial washing and drying machines\n  . dry-cleaning machines\n- manufacture of sewing machines, sewing machine heads and sewing machine needles (whether or not for household use)\n- manufacture of machines for producing or finishing felt or non-wovens\n- manufacture of leather machines:\n  . machinery for preparing, tanning or working hides, skins or leather\n  . machinery for making or repairing footwear or other articles of hides, skins, leather or fur skins'
        },
        {
            'id': 248,
            'code': '28.95',
            'description': 'Manufacture of machinery for paper and paperboard production',
            'details': 'This class includes:\n- manufacture of machinery for making paper pulp\n- manufacture of paper and paperboard making machinery\n- manufacture of machinery producing articles of paper or paperboard'
        },
        {
            'id': 249,
            'code': '28.96',
            'description': 'Manufacture of plastics and rubber machinery',
            'details': 'This class includes:\n- manufacture of machinery for working soft rubber or plastics or for the manufacture of products of these materials:\n  . extruders, moulders, pneumatic tyre making or retreading machines and other machines for making a specific rubber or plastic product'
        },
        {
            'id': 250,
            'code': '28.99',
            'description': 'Manufacture of other special-purpose machinery n.e.c.',
            'details': 'This class includes the manufacture of special-purpose machinery not elsewhere classified.\n\nThis class includes:\n- manufacture of dryers for wood, paper pulp, paper or paperboard and other materials (except for agricultural products and textiles)\n- manufacture of printing and bookbinding machines and machines for activities supporting printing on a variety of materials \n- manufacture of machinery for producing tiles, bricks, shaped ceramic pastes, pipes, graphite electrodes, blackboard chalk etc. \n- manufacture of semi-conductor manufacturing machinery\n- manufacture of industrial robots performing multiple tasks for special purposes\n- manufacture of diverse special-purpose machinery and equipment:\n  . machines to assemble electric or electronic lamps, tubes (valves) or bulbs\n  . machines for production or hot-working of glass or glassware, glass fibre or yarn\n  . machinery or apparatus for isotopic separation\n- manufacture of tyre alignment and balancing equipment; balancing equipment (except wheel balancing) \n- manufacture of central greasing systems\n- manufacture of aircraft launching gear, aircraft carrier catapults and related equipment\n- manufacture of automatic bowling alley equipment (e.g. pin-setters)\n- manufacture of roundabouts, swings, shooting galleries and other fairground amusements'
        },
        {
            'id': 251,
            'code': '29.10',
            'description': 'Manufacture of motor vehicles',
            'details': 'This class includes:\n- manufacture of passenger cars\n- manufacture of commercial vehicles:\n  . vans, lorries, over-the-road tractors for semi-trailers etc.\n- manufacture of buses, trolley-buses and coaches\n- manufacture of motor vehicle engines\n- manufacture of chassis for motor vehicles\n- manufacture of other motor vehicles:\n  . snowmobiles, golf carts, amphibious vehicles\n  . fire engines, street sweepers, travelling libraries, armoured cars etc.\n  . concrete-mixer lorries\n- ATVs, go-carts and similar including race cars'
        },
        {
            'id': 252,
            'code': '29.20',
            'description': 'Manufacture of bodies (coachwork) for motor vehicles; manufacture of trailers and semi-trailers',
            'details': 'This class includes:\n- manufacture of bodies, including cabs for motor vehicles\n- outfitting of all types of motor vehicles, trailers and semi-trailers\n- manufacture of trailers and semi-trailers:\n  . tankers, removal trailers etc.\n  . caravans etc.\n- manufacture of containers for carriage by one or more modes of transport'
        },
        {
            'id': 253,
            'code': '29.31',
            'description': 'Manufacture of electrical and electronic equipment for motor vehicles',
            'details': 'This class includes:\n- manufacture of motor vehicle electrical equipment, such as generators, alternators, spark plugs, ignition wiring harnesses, power window and door systems, assembly of purchased gauges into instrument panels, voltage regulators, etc.'
        },
        {
            'id': 254,
            'code': '29.32',
            'description': 'Manufacture of other parts and accessories for motor vehicles',
            'details': 'This class includes:\n- manufacture of diverse parts and accessories for motor vehicles:\n  . brakes, gearboxes, axles, road wheels, suspension shock absorbers, radiators, silencers, exhaust pipes, catalytic converters, clutches, steering wheels, steering columns and steering boxes\n- manufacture of parts and accessories of bodies for motor vehicles:\n  . safety belts, airbags, doors, bumpers\n- manufacture of car seats'
        },
        {
            'id': 255,
            'code': '30.11',
            'description': 'Building of ships and floating structures',
            'details': 'This class includes the building of ships, except vessels for sports or recreation, and the construction of floating structures:\n\nThis class includes:\n- building of commercial vessels: \n  . passenger vessels, ferry boats, cargo ships, tankers, tugs etc.\n- building of warships\n- building of fishing boats and fish-processing factory vessels'
        },
        {
            'id': 256,
            'code': '30.12',
            'description': 'Building of pleasure and sporting boats',
            'details': 'This class includes:\n- manufacture of inflatable boats and rafts\n- building of sailboats with or without auxiliary motor\n- building of motor boats\n- building of recreation-type hovercraft\n- manufacture of personal watercraft\n- manufacture of other pleasure and sporting boats:\n  . canoes, kayaks, rowing boats, skiffs'
        },
        {
            'id': 257,
            'code': '30.20',
            'description': 'Manufacture of railway locomotives and rolling stock',
            'details': 'This class includes:\n- manufacture of electric, diesel, steam and other rail locomotives\n- manufacture of self-propelled railway or tramway coaches, vans and trucks, maintenance or service vehicles\n- manufacture of railway or tramway rolling stock, not self-propelled:\n  . passenger coaches, goods vans, tank wagons, self-discharging vans and wagons, workshop vans, crane vans, tenders etc.\n- manufacture of specialised parts of railway or tramway locomotives or of rolling stock:\n  . bogies, axles and wheels, brakes and parts of brakes; hooks and coupling devices, buffers and buffer parts; shock absorbers; wagon and locomotive frames; bodies; corridor connections etc.'
        },
        {
            'id': 258,
            'code': '30.30',
            'description': 'Manufacture of air and spacecraft and related machinery',
            'details': 'This class includes:\n- manufacture of airplanes for the transport of goods or passengers, for use by the defence forces, for sport or other purposes\n- manufacture of helicopters\n- manufacture of gliders, hang-gliders\n- manufacture of dirigibles and hot air balloons\n- manufacture of parts and accessories of the aircraft of this class:\n  . major assemblies such as fuselages, wings, doors, control surfaces, landing gear, fuel tanks, nacelles etc.\n  . airscrews, helicopter rotors and propelled rotor blades\n  . motors and engines of a kind typically found on aircraft\n  . parts of turbojets and turboprops for aircraft\n- manufacture of ground flying trainers\n- manufacture of spacecraft and launch vehicles, satellites, planetary probes, orbital stations, shuttles\n- manufacture of intercontinental ballistic missiles (ICBM)'
        },
        {
            'id': 259,
            'code': '30.40',
            'description': 'Manufacture of military fighting vehicles',
            'details': 'This class includes:\n- manufacture of tanks\n- manufacture of armoured amphibious military vehicles\n- manufacture of other military fighting vehicles'
        },
        {
            'id': 260,
            'code': '30.91',
            'description': 'Manufacture of motorcycles',
            'details': 'This class includes:\n- manufacture of motorcycles, mopeds and cycles fitted with an auxiliary engine\n- manufacture of engines for motorcycles\n- manufacture of sidecars\n- manufacture of parts and accessories for motorcycles'
        },
        {
            'id': 261,
            'code': '30.92',
            'description': 'Manufacture of bicycles and invalid carriages',
            'details': "This class includes:\n- manufacture of non-motorised bicycles and other cycles, including (delivery) tricycles, tandems, children's bicycles and tricycles\n- manufacture of parts and accessories of bicycles\n- manufacture of invalid carriages with or without motor\n- manufacture of parts and accessories of invalid carriages\n- manufacture of baby carriages"
        },
        {
            'id': 262,
            'code': '30.99',
            'description': 'Manufacture of other transport equipment n.e.c.',
            'details': 'This class includes:\n- manufacture of hand-propelled vehicles: luggage trucks, handcarts, sledges, shopping carts etc.\n- manufacture of vehicles drawn by animals: sulkies, donkey-carts, hearses etc.'
        },
        {
            'id': 263,
            'code': '31.01',
            'description': 'Manufacture of office and shop furniture',
            'details': 'This class includes the manufacture of furniture of any kind, any material (except stone, concrete or ceramic) for any place and various purposes.\n\nThis class includes:\n- manufacture of chairs and seats for offices, workrooms, hotels, restaurants and public premises\n- manufacture of chairs and seats for theatres, cinemas and the like\n- manufacture of special furniture for shops: counters, display cases, shelves etc.\n- manufacture of office furniture\n- manufacture of laboratory benches, stools, and other laboratory seating, laboratory furniture (e.g. cabinets and tables)\n- manufacture of furniture for churches, schools, restaurants'
        },
        {
            'id': 264,
            'code': '31.02',
            'description': 'Manufacture of kitchen furniture',
            'details': 'This class includes:\n- manufacture of kitchen furniture'
        },
        {
            'id': 265,
            'code': '31.03',
            'description': 'Manufacture of mattresses',
            'details': 'This class includes:\n- manufacture of mattresses:\n  . mattresses fitted with springs or stuffed or internally fitted with a supporting material\n  . uncovered cellular rubber or plastic mattresses\n- manufacture of mattress supports'
        },
        {
            'id': 266,
            'code': '31.09',
            'description': 'Manufacture of other furniture',
            'details': 'This class includes:\n- manufacture of sofas, sofa beds and sofa sets\n- manufacture of garden chairs and seats\n- manufacture of furniture for bedrooms, living rooms, gardens etc.\n- manufacture of cabinets for sewing machines, televisions etc.'
        },
        {
            'id': 267,
            'code': '32.11',
            'description': 'Striking of coins',
            'details': 'This class includes:\n- manufacture of coins, including coins for use as legal tender, whether or not of precious metal'
        },
        {
            'id': 268,
            'code': '32.12',
            'description': 'Manufacture of jewellery and related articles',
            'details': "This class includes:\n- production of worked pearls\n- production of precious and semi-precious stones in the worked state, including the working of industrial quality stones and synthetic or reconstructed precious or semi-precious stones\n- working of diamonds\n- manufacture of jewellery of precious metal or of base metals clad with precious metals, or precious or semi-precious stones, or of combinations of precious metal and precious or semi-precious stones or of other materials\n- manufacture of goldsmiths' articles of precious metals or of base metals clad with precious metals:\n  . dinnerware, flatware, hollowware, toilet articles, office or desk articles, articles for religious use etc.\n- manufacture of technical or laboratory articles of precious metal (except instruments and parts thereof): crucibles, spatulas, electroplating anodes etc.\n- manufacture of precious metal watch bands, wristbands, watch straps and cigarette cases"
        },
        {
            'id': 269,
            'code': '32.13',
            'description': 'Manufacture of imitation jewellery and related articles',
            'details': 'This class includes:\n- manufacture of costume or imitation jewellery:\n  . rings, bracelets, necklaces, and similar articles of jewellery made from base metals plated with precious metals\n  . jewellery containing imitation stones such as imitation gems stones, imitation diamonds, and similar\n- manufacture of metal watch bands (except precious metal)'
        },
        {
            'id': 270,
            'code': '32.20',
            'description': 'Manufacture of musical instruments',
            'details': 'This class includes:\n- manufacture of stringed instruments\n- manufacture of keyboard stringed instruments, including automatic pianos\n- manufacture of keyboard pipe organs, including harmoniums and similar keyboard instruments with free metal reeds\n- manufacture of accordions and similar instruments, including mouth organs\n- manufacture of wind instruments\n- manufacture of percussion musical instruments\n- manufacture of musical instruments, the sound of which is produced electronically\n- manufacture of musical boxes, fairground organs, calliopes etc.\n- manufacture of instrument parts and accessories:\n  . metronomes, tuning forks, pitch pipes, cards, discs and rolls for automatic mechanical instruments etc.'
        },
        {
            'id': 271,
            'code': '32.30',
            'description': 'Manufacture of sports goods',
            'details': 'This class includes the manufacture of sporting and athletic goods (except apparel and footwear).\n\nThis class includes:\n- manufacture of articles and equipment for sports, outdoor and indoor games, of any material:\n  . hard, soft and inflatable balls\n  . rackets, bats and clubs\n  . skis, bindings and poles\n  . ski-boots\n  . sailboards and surfboards\n  . requisites for sport fishing, including landing nets\n  . requisites for hunting, mountain climbing etc.\n  . leather sports gloves and sports headgear\n  . basins for swimming and padding pools etc.\n  . ice skates, roller skates etc.\n  . bows and crossbows\n  . gymnasium, fitness centre or athletic equipment'
        },
        {
            'id': 272,
            'code': '32.40',
            'description': 'Manufacture of games and toys',
            'details': "This class includes the manufacture of dolls, toys and games (including electronic games), scale models and children's vehicles (except metal bicycles and tricycles).\n\nThis class includes:\n- manufacture of dolls and doll garments, parts and accessories\n- manufacture of action figures\n- manufacture of toy animals\n- manufacture of toy musical instruments\n- manufacture of playing cards\n- manufacture of board games and similar games\n- manufacture of electronic games: chess etc.\n- manufacture of reduced-size (\"scale\") models and similar recreational models, electrical trains, construction sets etc.\n- manufacture of coin-operated games, billiards, special tables for casino games, etc.\n- manufacture of articles for funfair, table or parlour games\n- manufacture of wheeled toys designed to be ridden, including plastic bicycles and tricycles\n- manufacture of puzzles and similar articles"
        },
        {
            'id': 273,
            'code': '32.50',
            'description': 'Manufacture of medical and dental instruments and supplies',
            'details': "This class includes the manufacture of laboratory apparatus, surgical and medical instruments, surgical appliances and supplies, dental equipment and supplies, orthodontic goods, dentures and orthodontic appliances. Included is the manufacture of medical, dental and similar furniture, where the additional specific functions determine the purpose of the product, such as dentist's chairs with built-in hydraulic functions.\n\nThis class includes:\n- manufacture of surgical drapes and sterile string and tissue\n- manufacture of dental fillings and cements (except denture adhesives), dental wax and other dental plaster preparations\n- manufacture of bone reconstruction cements\n- manufacture of dental laboratory furnaces\n- manufacture of laboratory ultrasonic cleaning machinery\n- manufacture of laboratory sterilisers\n- manufacture of laboratory type distilling apparatus, laboratory centrifuges\n- manufacture of medical, surgical, dental or veterinary furniture, such as:\n  . operating tables\n  . examination tables\n  . hospital beds with mechanical fittings\n  . dentists' chairs\n- manufacture of bone plates and screws, syringes, needles, catheters, cannulae, etc.\n- manufacture of dental instruments (including dentists' chairs incorporating dental equipment)\n- manufacture of artificial teeth, bridges, etc., made in dental labs\n- manufacture of orthopedic and prosthetic devices\n- manufacture of glass eyes\n- manufacture of medical thermometers\n- manufacture of ophthalmic goods, eyeglasses, sunglasses, lenses ground to prescription, contact lenses, safety goggles"
        },
        {
            'id': 274,
            'code': '32.91',
            'description': 'Manufacture of brooms and brushes',
            'details': 'This class includes:\n- manufacture of brooms and brushes, including brushes constituting parts of machines, hand-operated mechanical floor sweepers, mops and feather dusters, paint brushes, paint pads and rollers, squeegees and other brushes, brooms, mops etc.\n- manufacture of shoe and clothes brushes'
        },
        {
            'id': 275,
            'code': '32.99',
            'description': 'Other manufacturing n.e.c. ',
            'details': "This class includes:\n- manufacture of protective safety equipment\n  . manufacture of fire resistant and protective safety clothing\n  . manufacture of linemen's safety belts and other belts for occupational use\n  . manufacture of cork life preservers\n  . manufacture of plastics hard hats and other personal safety equipment of plastics (e.g. athletic helmets)\n  . manufacture of fire fighting protection suits\n  . manufacture of metal safety headgear and other metal personal safety devices\n  . manufacture of ear and noise plugs (e.g. for swimming and noise protection)\n  . manufacture of gas masks\n- manufacture of pens and pencils of all kinds whether or not mechanical\n- manufacture of pencil leads\n- manufacture of date, sealing or numbering stamps, hand-operated devices for printing, or embossing labels, hand printing sets, prepared typewriter ribbons and inked pads\n- manufacture of globes\n- manufacture of umbrellas, sun-umbrellas, walking sticks, seat-sticks\n- manufacture of buttons, press-fasteners, snap-fasteners, press-studs, slide fasteners\n- manufacture of cigarette lighters\n- manufacture of articles of personal use: smoking pipes, scent sprays, vacuum flasks and other vacuum vessels for personal or household use, wigs, false beards, eyebrows\n- manufacture of miscellaneous articles: candles, tapers and the like; artificial flowers, fruit and foliage; jokes and novelties; hand sieves and hand riddles; tailors' dummies; burial coffins etc.\n- manufacture of floral baskets, bouquets, wreaths and similar articles\n- taxidermy activities"
        },
        {
            'id': 276,
            'code': '33.11',
            'description': 'Repair of fabricated metal products',
            'details': 'This class includes the repair and maintenance of fabricated metal products of division 25.\n\nThis class includes:\n- repair of metal tanks, reservoirs and containers\n- repair and maintenance for pipes and pipelines\n- mobile welding repair\n- repair of steel shipping drums\n- repair and maintenance of steam or other vapour generators\n- repair and maintenance of auxiliary plant for use with steam generators:\n  . condensers, economisers, superheaters, steam collectors and accumulators\n- repair and maintenance of nuclear reactors, except isotope separators\n- repair and maintenance of parts for marine or power boilers\n- platework repair of central heating boilers and radiators\n- repair and maintenance of fire arms and ordnance (including repair of sporting and recreational guns)\n- repair and maintenance of shopping carts'
        },
        {
            'id': 277,
            'code': '33.12',
            'description': 'Repair of machinery',
            'details': 'This class includes the repair and maintenance of industrial machinery and equipment like sharpening or installing commercial and industrial machinery blades and saws; the provision of welding (e.g. automotive, general) repair services; the repair of agricultural and other heavy and industrial machinery and equipment (e.g. forklifts and other materials handling equipment, machine tools, commercial refrigeration equipment, construction equipment and mining machinery), including machinery and equipment of division 28.\n\nThis class includes: \n- repair and maintenance of non-motor vehicle engines\n- repair and maintenance of pumps, compressors and related equipment\n- repair and maintenance of fluid power machinery\n- repair of valves\n- repair of gearing and driving elements\n- repair and maintenance of industrial process furnaces\n- repair and maintenance of lifting and handling equipment\n- repair and maintenance of industrial refrigeration equipment and air purifying equipment\n- repair and maintenance of commercial-type general-purpose machinery\n- repair of power-driven hand-tools\n- repair and maintenance of metal cutting and metal forming machine tools and accessories\n- repair and maintenance of other machine tools\n- repair and maintenance of agricultural tractors\n- repair and maintenance of agricultural machinery and forestry and logging machinery\n- repair and maintenance of metallurgy machinery\n- repair and maintenance of mining, construction, and oil and gas field machinery\n- repair and maintenance of food, beverage, and tobacco processing machinery\n- repair and maintenance of textile apparel, and leather production machinery\n- repair and maintenance of papermaking machinery\n- repair and maintenance of plastic and rubber machinery\n- repair and maintenance of other special-purpose machinery of division 28\n- repair and maintenance of weighing equipment \n- repair and maintenance of vending machines\n- repair and maintenance of cash registers\n- repair and maintenance of photocopy machines\n- repair of calculators, electronic or not\n- repair of typewriters'
        },
        {
            'id': 278,
            'code': '33.13',
            'description': 'Repair of electronic and optical equipment',
            'details': 'This class includes the repair and maintenance of goods produced in groups 26.5, 26.6 and 26.7, except those that are considered household goods.\n\nThis class includes:\n- repair and maintenance of the measuring, testing, navigating and control equipment of group 26.5, such as: \n  . aircraft engine instruments\n  . automotive emissions testing equipment\n  . meteorological instruments\n  . physical, electrical and chemical properties testing and inspection equipment\n  . surveying instruments\n  . radiation detection and monitoring instruments\n- repair and maintenance of irradiation, electromedical and electrotherapeutic equipment of class 26.60, such as: \n  . magnetic resonance imaging equipment\n  . medical ultrasound equipment\n  . pacemakers\n  . hearing aids\n  . electrocardiographs\n  . electromedical endoscopic equipment \n  . irradiation apparatus\n- repair and maintenance of optical instruments and equipment of class 26.70, if the use is mainly commercial, such as:\n  . binoculars\n  . microscopes (except electron and proton microscopes)\n  . telescopes\n  . prisms and lenses (except ophthalmic)\n  . photographic equipment'
        },
        {
            'id': 279,
            'code': '33.14',
            'description': 'Repair of electrical equipment',
            'details': 'This class includes the repair and maintenance of goods of division 27, except those in class group 27.5 (domestic appliances). \n\nThis class includes:\n- repair and maintenance of power, distribution, and specialty transformers\n- repair and maintenance of electric motors, generators, and motor generator sets\n- repair and maintenance of switchgear and switchboard apparatus\n- repair and maintenance of relays and industrial controls\n- repair and maintenance of primary and storage batteries\n- repair and maintenance of electric lighting equipment\n- repair and maintenance of current-carrying wiring devices and non current-carrying wiring devices for wiring electrical circuits'
        },
        {
            'id': 280,
            'code': '33.15',
            'description': 'Repair and maintenance of ships and boats',
            'details': 'This class includes the repair and maintenance of ships and boats. However, the factory rebuilding or overhaul of ships is classified in division 30.\n\nThis class includes:\n- repair and routine maintenance of ships\n- repair and maintenance of pleasure boats'
        },
        {
            'id': 281,
            'code': '33.16',
            'description': 'Repair and maintenance of aircraft and spacecraft',
            'details': 'This class includes the repair and maintenance of aircraft and spacecraft. \n\nThis class includes:\n- repair and maintenance of aircraft (except factory conversion, factory overhaul, factory rebuilding)\n- repair and maintenance of aircraft engines'
        },
        {
            'id': 282,
            'code': '33.17',
            'description': 'Repair and maintenance of other transport equipment',
            'details': 'This class includes the repair and maintenance of other transport equipment of division 30, except motorcycles and bicycles. \n\nThis class includes:\n- repair and maintenance of locomotives and railroad cars (except factory rebuilding or factory conversion)\n- repair of animal drawn buggies and wagons'
        },
        {
            'id': 283,
            'code': '33.19',
            'description': 'Repair of other equipment',
            'details': 'This class includes the repair and maintenance of equipment not covered in other groups of this division.\n\nThis class includes:\n- repair of fishing nets, including mending\n- repair or ropes, riggings, canvas and tarpaulins\n- repair of fertiliser and chemical storage bags\n- repair or reconditioning of wooden pallets, shipping drums or barrels, and similar items\n- repair of pinball machines and other coin-operated games\n- restoring of organs and other historical musical instruments'
        },
        {
            'id': 284,
            'code': '33.20',
            'description': 'Installation of industrial machinery and equipment',
            'details': 'This class includes the specialised installation of machinery. However, the installation of equipment that forms an integral part of buildings or similar structures, such as installation of escalators, electrical wiring, burglar alarm systems or air-conditioning systems, is classified as construction.\n\nThis class includes:\n- installation of industrial machinery in industrial plant\n- installation and assembly of industrial process control equipment\n- installation of other industrial equipment, e.g.:\n  . communications equipment\n  . mainframe and similar computers\n  . irradiation and electromedical equipment etc.\n- dismantling large-scale machinery and equipment\n- activities of millwrights\n- machine rigging\n- installation of bowling alley equipment'
        },
        {
            'id': 285,
            'code': '35.11',
            'description': 'Production of electricity',
            'details': 'This class includes:\n- operation of generation facilities that produce electric energy; including thermal, nuclear, hydroelectric, gas turbine, diesel and renewable'
        },
        {
            'id': 286,
            'code': '35.12',
            'description': 'Transmission of electricity',
            'details': 'This class includes:\n- operation of transmission systems that convey the electricity from the generation facility to the distribution system'
        },
        {
            'id': 287,
            'code': '35.13',
            'description': 'Distribution of electricity',
            'details': 'This class includes:\n- operation of distribution systems (i.e., consisting of lines, poles, meters, and wiring) that convey electric power received from the generation facility or the transmission system to the final consumer'
        },
        {
            'id': 288,
            'code': '35.14',
            'description': 'Trade of electricity',
            'details': 'This class includes:\n- sale of electricity to the user\n- activities of electric power brokers or agents that arrange the sale of electricity via power distribution systems operated by others\n- operation of electricity and transmission capacity exchanges for electric power'
        },
        {
            'id': 289,
            'code': '35.21',
            'description': 'Manufacture of gas',
            'details': 'This class includes:\n- production of gas for the purpose of gas supply by carbonation of coal, from by-products of agriculture or from waste\n- manufacture of gaseous fuels with a specified calorific value, by purification, blending and other processes from gases of various types including natural gas'
        },
        {
            'id': 290,
            'code': '35.22',
            'description': 'Distribution of gaseous fuels through mains',
            'details': 'This class includes:\n- distribution and supply of gaseous fuels of all kinds through a system of mains'
        },
        {
            'id': 291,
            'code': '35.23',
            'description': 'Trade of gas through mains',
            'details': 'This class includes:\n- sale of gas to the user through mains\n- activities of gas brokers or agents that arrange the sale of gas over gas distribution systems operated by others\n- commodity and transport capacity exchanges for gaseous fuels'
        },
        {
            'id': 292,
            'code': '35.30',
            'description': 'Steam and air conditioning supply',
            'details': 'This class includes:\n- production, collection and distribution of steam and hot water for heating, power and other purposes\n- production and distribution of cooled air\n- production and distribution of chilled water for cooling purposes\n- production of ice, for food and non-food (e.g. cooling) purposes'
        },
        {
            'id': 293,
            'code': '36.00',
            'description': 'Water collection, treatment and supply',
            'details': 'This class includes water collection, treatment and distribution activities for domestic and industrial needs. Collection of water from various sources, as well as distribution by various means is included.\n\nThis class includes:\n- collection of water from rivers, lakes, wells etc.\n- collection of rain water\n- purification of water for water supply purposes\n- treatment of water for industrial and other purposes\n- desalting of sea or ground water to produce water as the principal product of interest\n- distribution of water through mains, by trucks or other means\n- operation of irrigation canals'
        },
        {
            'id': 294,
            'code': '37.00',
            'description': 'Sewerage',
            'details': 'This class includes:\n- operation of sewer systems or sewer treatment facilities\n- collecting and transporting of human or industrial wastewater from one or several users, as well as rain water by means of sewerage networks, collectors, tanks and other means of transport (sewage vehicles etc.) \n- emptying and cleaning of cesspools and septic tanks, sinks and pits from sewage; servicing of chemical toilets\n- treatment of wastewater (including human and industrial wastewater, water from swimming pools etc.) by means of physical, chemical and biological processes like dilution, screening, filtering, sedimentation etc.\n- maintenance and cleaning of sewers and drains, including sewer rodding'
        },
        {
            'id': 295,
            'code': '38.11',
            'description': 'Collection of non-hazardous waste',
            'details': 'This class includes:\n- collection of non-hazardous solid waste (i.e. garbage) within a local area, such as collection of waste from households and businesses by means of refuse bins, wheeled bins, containers etc may include mixed recoverable materials\n- collection of recyclable materials\n- collection of refuse in litter-bins in public places'
        },
        {
            'id': 296,
            'code': '38.12',
            'description': 'Collection of hazardous waste',
            'details': 'This class includes the collection of solid and non-solid hazardous waste, i.e. explosive, oxidizing, flammable, toxic, irritant, carcinogenic, corrosive, infectious and other substances and preparations harmful for human health and environment. It may also entail identification, treatment, packaging and labeling of waste for the purposes of transport.\n\nThis class includes:\n- collection of hazardous waste, such as:\n  . used oil from shipment or garages\n  . bio-hazardous waste\n  . nuclear waste\n  . used batteries etc.\n- operation of waste transfer stations for hazardous waste'
        },
        {
            'id': 297,
            'code': '38.21',
            'description': 'Treatment and disposal of non-hazardous waste',
            'details': 'This class includes the disposal and treatment prior to disposal of solid or non-solid non-hazardous waste:\n- operation of landfills for the disposal of non-hazardous waste\n- disposal of non-hazardous waste by combustion or incineration or other methods, with or without the resulting production of electricity or steam, compost, substitute fuels, biogas, ashes or other by-products for further use etc.\n- treatment of organic waste for disposal'
        },
        {
            'id': 298,
            'code': '38.22',
            'description': 'Treatment and disposal of hazardous waste',
            'details': 'This class includes the disposal and treatment prior to disposal of solid or non-solid hazardous waste, including waste that if explosive, oxidising, flammable, toxic, irritant, carcinogenic, corrosive, infectious and other substances and preparations harmful for human health and environment.\n\nThis class includes:\n- operation of facilities for treatment of hazardous waste\n- treatment and disposal of toxic live or dead animals and other contaminated waste\n- incineration of hazardous waste\n- disposal of used goods such as refrigerators to eliminate harmful waste\n- treatment, disposal and storage of radioactive nuclear waste including: \n  . treatment and disposal of transition radioactive waste, i.e. decaying within the period of transport, from hospitals\n  . encapsulation, preparation and other treatment of nuclear waste for storage'
        },
        {
            'id': 299,
            'code': '38.31',
            'description': 'Dismantling of wrecks',
            'details': 'This class includes dismantling of wrecks of any type (automobiles, ships, computers, televisions and other equipment) for materials recovery.'
        },
        {
            'id': 300,
            'code': '38.32',
            'description': 'Recovery of sorted materials',
            'details': 'This class includes the processing of metal and non-metal waste and scrap and other articles into secondary raw materials, usually involving a mechanical or chemical transformation process.\n\nExamples of the mechanical or chemical transformation processes that are undertaken are:\n- mechanical crushing of metal waste from used cars, washing machines, bikes etc.\n- mechanical reduction of large iron pieces such as railway wagons\n- shredding of metal waste, end-of-life vehicles etc.\n- other methods of mechanical treatment as cutting, pressing to reduce the volume\n- reclaiming metals out of photographic waste, e.g. fixer solution or photographic films and paper \n- reclaiming of rubber such as used tyres to produce secondary raw material\n- sorting and pelleting of plastics to produce secondary raw material for tubes, flower pots, pallets and the like\n- processing (cleaning, melting, grinding) of plastic or rubber waste to granulates\n- crushing, cleaning and sorting of glass\n- crushing, cleaning and sorting of other waste such as demolition waste to obtain secondary raw material\n- processing of used cooking oils and fats into secondary raw materials\n- processing of other food, beverage and tobacco waste and residual substances into secondary raw materials'
        },
        {
            'id': 301,
            'code': '39.00',
            'description': 'Remediation activities and other waste management services',
            'details': 'This class includes:\n- decontamination of soils and groundwater at the place of pollution, either in situ or ex situ, using e.g. mechanical, chemical or biological methods\n- decontamination of industrial plants or sites, including nuclear plants and sites\n- decontamination and cleaning up of surface water following accidental pollution, e.g. through collection of pollutants or through application of chemicals\n- cleaning up oil spills and other pollutions on land, in surface water, in ocean and seas, including coastal areas\n- asbestos, lead paint, and other toxic material abatement\n- clearing of landmines and the like (including detonation)\n- other specialised pollution-control activities'
        },
        {
            'id': 302,
            'code': '41.10',
            'description': 'Development of building projects',
            'details': 'This class includes:\n- development of building projects for residential and non-residential buildings by bringing together financial, technical and physical means to realise the building projects for later sale'
        },
        {
            'id': 303,
            'code': '41.20',
            'description': 'Construction of residential and non-residential buildings',
            'details': 'This class includes:\n- construction of all types of residential buildings:\n  . single-family houses\n  . multi-family buildings, including high-rise buildings\n- construction of all types of non-residential buildings:\n  . buildings for industrial production, e.g. factories, workshops, assembly plants etc.\n  . hospitals, schools, office buildings\n  . hotels, stores, shopping malls, restaurants\n  . airport buildings\n  . indoor sports facilities\n  . parking garages, including underground parking garages\n  . warehouses\n  . religious buildings\n- assembly and erection of prefabricated constructions on the site'
        },
        {
            'id': 304,
            'code': '42.11',
            'description': 'Construction of roads and motorways',
            'details': 'This class includes:\n- construction of motorways, streets, roads, other vehicular and pedestrian ways\n- surface work on streets, roads, highways, bridges or tunnels:\n  . asphalt paving of roads\n  . road painting and other marking\n  . installation of crash barriers, traffic signs and the like\n- construction of airfield runways'
        },
        {
            'id': 305,
            'code': '42.12',
            'description': 'Construction of railways and underground railways',
            'details': 'This class includes:\n- construction of railways and subways'
        },
        {
            'id': 306,
            'code': '42.13',
            'description': 'Construction of bridges and tunnels',
            'details': 'This class includes:\n- construction of bridges, including those for elevated highways \n- construction of tunnels'
        },
        {
            'id': 307,
            'code': '42.21',
            'description': 'Construction of utility projects for fluids',
            'details': 'This class includes the construction of distribution lines for transportation of fluids and related buildings and structures that are integral part of these systems.\n\nThis class includes:\n- construction of civil engineering constructions for:\n  . long-distance and urban pipelines\n  . water main and line construction\n  . irrigation systems (canals)\n  . reservoirs\n- construction of:\n  . sewer systems, including repair\n  . sewage disposal plants\n  . pumping stations'
        },
        {
            'id': 308,
            'code': '42.22',
            'description': 'Construction of utility projects for electricity and telecommunications',
            'details': 'This class includes the construction of distribution lines for electricity and telecommunications and related buildings and structures that are integral part of these systems.\n\nThis class includes:\n- construction of civil engineering constructions for:\n  . long-distance and urban communication and power lines\n  . power plants'
        },
        {
            'id': 309,
            'code': '42.91',
            'description': 'Construction of water projects',
            'details': 'This class includes:\n- construction of:\n  . waterways, harbour and river works, pleasure ports (marinas), locks, etc.\n  . dams and dykes\n- dredging of waterways'
        },
        {
            'id': 310,
            'code': '42.99',
            'description': 'Construction of other civil engineering projects n.e.c.',
            'details': 'This class includes:\n- construction of industrial facilities, except buildings, such as:\n  . refineries\n  . chemical plants\n- construction work, other than buildings, such as:\n  . outdoor sports facilities'
        },
        {
            'id': 311,
            'code': '43.11',
            'description': 'Demolition',
            'details': 'This class includes:\n- demolition or wrecking of buildings and other structures'
        },
        {
            'id': 312,
            'code': '43.12',
            'description': 'Site preparation',
            'details': 'This class includes:\n- clearing of building sites\n- earth moving: excavation, landfill, levelling and grading of construction sites, trench digging, rock removal, blasting, etc.'
        },
        {
            'id': 313,
            'code': '43.13',
            'description': 'Test drilling and boring',
            'details': 'This class includes:\n- test drilling, test boring and core sampling for construction, geophysical, geological or similar purposes'
        },
        {
            'id': 314,
            'code': '43.21',
            'description': 'Electrical installation',
            'details': 'This class includes the installation of electrical systems in all kinds of buildings and civil engineering structures of electrical systems.\n\nThis class includes:\n- installation of:\n  . electrical wiring and fittings\n  . telecommunications wiring\n  . computer network and cable television wiring, including fibre optic\n  . satellite dishes\n  . lighting systems\n  . fire alarms\n  . burglar alarm systems\n  . street lighting and electrical signals\n  . airport runway lighting\n  . electric solar energy collectors'
        },
        {
            'id': 315,
            'code': '43.22',
            'description': 'Plumbing, heat and air-conditioning installation',
            'details': 'This class includes the installation of plumbing, heating and air-conditioning systems, including additions, alterations, maintenance and repair.\n\nThis class includes:\n- installation in buildings or other construction projects of:\n  . heating systems (electric, gas and oil)\n  . furnaces, cooling towers\n  . non-electric solar energy collectors\n  . plumbing and sanitary equipment\n  . ventilation and air-conditioning equipment and ducts\n  . gas fittings\n  . steam piping\n  . fire sprinkler systems\n  . lawn sprinkler systems\n- duct work installation'
        },
        {
            'id': 316,
            'code': '43.29',
            'description': 'Other construction installation',
            'details': 'This class includes the installation of equipment other than electrical, plumbing, heating and air-conditioning systems or industrial machinery in buildings and civil engineering structures.\n\nThis class includes:\n- installation in buildings or other construction projects of:\n  . elevators, escalators, including repair and maintenance\n  . automated and revolving doors\n  . lightning conductors\n  . vacuum cleaning systems\n  . thermal, sound or vibration insulation'
        },
        {
            'id': 317,
            'code': '43.31',
            'description': 'Plastering',
            'details': 'This class includes:\n- application in buildings or other construction projects of interior and exterior plaster or stucco, including related lathing materials'
        },
        {
            'id': 318,
            'code': '43.32',
            'description': 'Joinery installation',
            'details': 'This class includes:\n- installation of doors (except automated and revolving), windows, door and window frames, of wood or other materials\n- installation of fitted kitchens, built-in cupboards, staircases, shop fittings and the like\n- interior completion such as ceilings, movable partitions, etc.'
        },
        {
            'id': 319,
            'code': '43.33',
            'description': 'Floor and wall covering',
            'details': 'This class includes:\n- laying, tiling, hanging or fitting in buildings or other construction projects of:\n  . ceramic, concrete or cut stone wall or floor tiles, ceramic stove fitting\n  . parquet and other wooden floor coverings, wooden wall coverings\n  . carpets and linoleum floor coverings, including of rubber or plastic\n  . terrazzo, marble, granite or slate floor or wall coverings\n  . wallpaper'
        },
        {
            'id': 320,
            'code': '43.34',
            'description': 'Painting and glazing',
            'details': 'This class includes:\n- interior and exterior painting of buildings\n- painting of civil engineering structures\n- installation of glass, mirrors, etc.'
        },
        {
            'id': 321,
            'code': '43.39',
            'description': 'Other building completion and finishing',
            'details': 'This class includes:\n- cleaning of new buildings after construction\n- other building completion and finishing work n.e.c.'
        },
        {
            'id': 322,
            'code': '43.91',
            'description': 'Roofing activities',
            'details': 'This class includes:\n- erection of roofs\n- roof covering'
        },
        {
            'id': 323,
            'code': '43.99',
            'description': 'Other specialised construction activities n.e.c.',
            'details': 'This class includes:\n- construction activities specialising in one aspect common to different kind of structures, requiring specialised skill or equipment:\n  . construction of foundations, including pile driving\n  . damp proofing and water proofing works\n  . de-humidification of buildings\n  . shaft sinking\n  . erection of steel elements\n  . steel bending\n  . bricklaying and stone setting\n  . scaffolds and work platform erecting and dismantling, excluding rental of scaffolds and work platforms\n  . erection of chimneys and industrial ovens\n  . work with specialist access requirements necessitating climbing skills and the use of related equipment, e.g. working at height on tall structures\n- subsurface work\n- construction of outdoor swimming pools\n- steam cleaning, sand blasting and similar activities for building exteriors\n- rental of cranes and other building equipment, which cannot be allocated to a specific construction type, with operator'
        },
        {
            'id': 324,
            'code': '45.11',
            'description': 'Sale of cars and light motor vehicles',
            'details': 'This class includes:\n- wholesale and retail sale of new and used vehicles:\n  . passenger motor vehicles, including specialised passenger motor vehicles such as ambulances and minibuses, etc. (with a weight not exceeding 3,5 tons)'
        },
        {
            'id': 325,
            'code': '45.19',
            'description': 'Sale of other motor vehicles',
            'details': 'This class includes:\n- wholesale and retail sale of new and used vehicles:\n  . lorries, trailers and semi-trailers\n  . camping vehicles such as caravans and motor homes'
        },
        {
            'id': 326,
            'code': '45.20',
            'description': 'Maintenance and repair of motor vehicles',
            'details': 'This class includes:\n- maintenance and repair of motor vehicles:\n  . mechanical repairs\n  . electrical repairs\n  . electronic injection systems repair\n  . ordinary servicing\n  . bodywork repair\n  . repair of motor vehicle parts\n  . washing, polishing, etc.\n  . spraying and painting\n  . repair of screens and windows\n  . repair of motor vehicle seats\n- tyre and tube repair, fitting or replacement\n- anti-rust treatment\n- installation of parts and accessories not as part of the manufacturing process'
        },
        {
            'id': 327,
            'code': '45.31',
            'description': 'Wholesale trade of motor vehicle parts and accessories'
        },
        {
            'id': 328,
            'code': '45.32',
            'description': 'Retail trade of motor vehicle parts and accessories'
        },
        {
            'id': 329,
            'code': '45.40',
            'description': 'Sale, maintenance and repair of motorcycles and related parts and accessories',
            'details': 'This class includes:\n- wholesale and retail sale of motorcycles, including mopeds\n- wholesale and retail sale of parts and accessories for motorcycles (including by commission agents and mail order houses) \n- maintenance and repair of motorcycles'
        },
        {
            'id': 330,
            'code': '46.11',
            'description': 'Agents involved in the sale of agricultural raw materials, live animals, textile raw materials and semi-finished goods'
        },
        {
            'id': 331,
            'code': '46.12',
            'description': 'Agents involved in the sale of fuels, ores, metals and industrial chemicals',
            'details': 'This class includes agents involved in the sale of:\n  . fuels, ores, metals and industrial chemicals, including fertilisers'
        },
        {
            'id': 332,
            'code': '46.13',
            'description': 'Agents involved in the sale of timber and building materials'
        },
        {
            'id': 333,
            'code': '46.14',
            'description': 'Agents involved in the sale of machinery, industrial equipment, ships and aircraft',
            'details': 'This class includes agents involved in the sale of:\n  . machinery, including office machinery and computers, industrial equipment, ships and aircraft'
        },
        {
            'id': 334,
            'code': '46.15',
            'description': 'Agents involved in the sale of furniture, household goods, hardware and ironmongery'
        },
        {
            'id': 335,
            'code': '46.16',
            'description': 'Agents involved in the sale of textiles, clothing, fur, footwear and leather goods'
        },
        {
            'id': 336,
            'code': '46.17',
            'description': 'Agents involved in the sale of food, beverages and tobacco'
        },
        {
            'id': 337,
            'code': '46.18',
            'description': 'Agents specialised in the sale of other particular products'
        },
        {
            'id': 338,
            'code': '46.19',
            'description': 'Agents involved in the sale of a variety of goods'
        },
        {
            'id': 339,
            'code': '46.21',
            'description': 'Wholesale of grain, unmanufactured tobacco, seeds and animal feeds',
            'details': 'This class includes:\n- wholesale of grains and seeds\n- wholesale of oleaginous fruits\n- wholesale of unmanufactured tobacco\n- wholesale of animal feeds and agricultural raw material n.e.c.'
        },
        {
            'id': 340,
            'code': '46.22',
            'description': 'Wholesale of flowers and plants',
            'details': 'This class includes:\n- wholesale of flowers, plants and bulbs'
        },
        {
            'id': 341,
            'code': '46.23',
            'description': 'Wholesale of live animals'
        },
        {
            'id': 342,
            'code': '46.24',
            'description': 'Wholesale of hides, skins and leather'
        },
        {
            'id': 343,
            'code': '46.31',
            'description': 'Wholesale of fruit and vegetables',
            'details': 'This class includes:\n- wholesale of fresh fruits and vegetables\n- wholesale of preserved fruits and vegetables'
        },
        {
            'id': 344,
            'code': '46.32',
            'description': 'Wholesale of meat and meat products'
        },
        {
            'id': 345,
            'code': '46.33',
            'description': 'Wholesale of dairy products, eggs and edible oils and fats',
            'details': 'This class includes:\n- wholesale of dairy products\n- wholesale of eggs and egg products\n- wholesale of edible oils and fats of animal or vegetable origin'
        },
        {
            'id': 346,
            'code': '46.34',
            'description': 'Wholesale of beverages',
            'details': 'This class includes:\n- wholesale of alcoholic beverages\n- wholesale of non-alcoholic beverages'
        },
        {
            'id': 347,
            'code': '46.35',
            'description': 'Wholesale of tobacco products'
        },
        {
            'id': 348,
            'code': '46.36',
            'description': 'Wholesale of sugar and chocolate and sugar confectionery',
            'details': 'This class includes:\n- wholesale of sugar, chocolate and sugar confectionery\n- wholesale of bakery products'
        },
        {
            'id': 349,
            'code': '46.37',
            'description': 'Wholesale of coffee, tea, cocoa and spices'
        },
        {
            'id': 350,
            'code': '46.38',
            'description': 'Wholesale of other food, including fish, crustaceans and molluscs'
        },
        {
            'id': 351,
            'code': '46.39',
            'description': 'Non-specialised wholesale of food, beverages and tobacco'
        },
        {
            'id': 352,
            'code': '46.41',
            'description': 'Wholesale of textiles',
            'details': 'This class includes:\n- wholesale of yarn\n- wholesale of fabrics\n- wholesale of household linen etc.\n- wholesale of haberdashery: needles, sewing thread etc.'
        },
        {
            'id': 353,
            'code': '46.42',
            'description': 'Wholesale of clothing and footwear',
            'details': 'This class includes:\n- wholesale of clothing, including sports clothes\n- wholesale of clothing accessories such as gloves, ties and braces\n- wholesale of footwear\n- wholesale of fur articles\n- wholesale of umbrellas'
        },
        {
            'id': 354,
            'code': '46.43',
            'description': 'Wholesale of electrical household appliances',
            'details': 'This class includes:\n- wholesale of electrical household appliances\n- wholesale of radio and television equipment\n- wholesale of photographic and optical goods\n- wholesale of electrical heating appliances\n- wholesale of recorded audio and video tapes, CDs, DVDs'
        },
        {
            'id': 355,
            'code': '46.44',
            'description': 'Wholesale of china and glassware and cleaning materials',
            'details': 'This class includes:\n- wholesale of china and glassware\n- wholesale of cleaning materials'
        },
        {
            'id': 356,
            'code': '46.45',
            'description': 'Wholesale of perfume and cosmetics',
            'details': 'This class includes:\n- wholesale of perfumeries, cosmetics and soaps'
        },
        {
            'id': 357,
            'code': '46.46',
            'description': 'Wholesale of pharmaceutical goods',
            'details': 'This class includes:\n- wholesale of pharmaceutical and medical goods'
        },
        {
            'id': 358,
            'code': '46.47',
            'description': 'Wholesale of furniture, carpets and lighting equipment',
            'details': 'This class includes:\n- wholesale of household furniture\n- wholesale of carpets\n- wholesale of lighting equipment'
        },
        {
            'id': 359,
            'code': '46.48',
            'description': 'Wholesale of watches and jewellery'
        },
        {
            'id': 360,
            'code': '46.49',
            'description': 'Wholesale of other household goods',
            'details': 'This class includes:\n- wholesale of woodenware, wickerwork and corkware etc.\n- wholesale of bicycles and their parts and accessories\n- wholesale of stationery, books, magazines and newspapers\n- wholesale of leather goods and travel accessories\n- wholesale of musical instruments\n- wholesale of games and toys\n- wholesale of sports goods, including special sports footwear such as ski boots'
        },
        {
            'id': 361,
            'code': '46.51',
            'description': 'Wholesale of computers, computer peripheral equipment and software',
            'details': 'This class includes:\n- wholesale of computers and computer peripheral equipment\n- wholesale of software'
        },
        {
            'id': 362,
            'code': '46.52',
            'description': 'Wholesale of electronic and telecommunications equipment and parts',
            'details': 'This class includes:\n- wholesale of electronic valves and tubes\n- wholesale of semi-conductor devices\n- wholesale of microchips and integrated circuits\n- wholesale of printed circuits\n- wholesale of blank audio and video tapes and diskettes, magnetic and optical disks (CDs, DVDs)\n- wholesale of telephone and communications equipment'
        },
        {
            'id': 363,
            'code': '46.61',
            'description': 'Wholesale of agricultural machinery, equipment and supplies',
            'details': 'This class includes:\n- wholesale of agricultural machinery and equipment:\n  . ploughs, manure spreaders, seeders\n  . harvesters\n  . threshers\n  . milking machines\n  . poultry-keeping machines, bee-keeping machines\n  . tractors used in agriculture and forestry'
        },
        {
            'id': 364,
            'code': '46.62',
            'description': 'Wholesale of machine tools',
            'details': 'This class includes:\n- wholesale of machine tools of any type and for any material'
        },
        {
            'id': 365,
            'code': '46.63',
            'description': 'Wholesale of mining, construction and civil engineering machinery'
        },
        {
            'id': 366,
            'code': '46.64',
            'description': 'Wholesale of machinery for the textile industry and of sewing and knitting machines'
        },
        {
            'id': 367,
            'code': '46.65',
            'description': 'Wholesale of office furniture',
            'details': 'This class includes:\n- wholesale trade services related to:\n  . goods classified in 31.01 (Manufacture of office and shop furniture)'
        },
        {
            'id': 368,
            'code': '46.66',
            'description': 'Wholesale of other office machinery and equipment',
            'details': 'This class includes:\n- wholesale of office machinery and equipment, except computers and computer peripheral equipment'
        },
        {
            'id': 369,
            'code': '46.69',
            'description': 'Wholesale of other machinery and equipment',
            'details': 'This class includes:\n- wholesale of transport equipment except motor vehicles, motorcycles and bicycles\n- wholesale of production-line robots\n- wholesale of wires and switches and other installation equipment for industrial use\n- wholesale of other electrical material such as electrical motors, transformers\n- wholesale of other machinery n.e.c. for use in industry (except mining, construction, civil engineering and textile industry), trade and navigation and other services'
        },
        {
            'id': 370,
            'code': '46.71',
            'description': 'Wholesale of solid, liquid and gaseous fuels and related products',
            'details': 'This class includes:\n- wholesale of fuels, greases, lubricants, oils such as:\n  . charcoal, coal, coke, fuel wood, naphtha\n  . crude petroleum, crude oil, diesel fuel, gasoline, fuel oil, heating oil, kerosene\n  . liquefied petroleum gases, butane and propane gas\n  . lubricating oils and greases, refined petroleum products'
        },
        {
            'id': 371,
            'code': '46.72',
            'description': 'Wholesale of metals and metal ores',
            'details': 'This class includes:\n- wholesale of ferrous and non-ferrous metal ores\n- wholesale of ferrous and non-ferrous metals in primary forms\n- wholesale of ferrous and non-ferrous semi-finished metal products n.e.c.\n- wholesale of gold and other precious metals'
        },
        {
            'id': 372,
            'code': '46.73',
            'description': 'Wholesale of wood, construction materials and sanitary equipment',
            'details': 'This class includes:\n- wholesale of wood in the rough\n- wholesale of products of primary processing of wood\n- wholesale of paint and varnish\n- wholesale of construction materials:\n  . sand, gravel\n- wholesale of wallpaper and floor coverings\n- wholesale of flat glass\n- wholesale of sanitary equipment:\n  . baths, washbasins, toilets and other sanitary porcelain\n- wholesale of prefabricated buildings'
        },
        {
            'id': 373,
            'code': '46.74',
            'description': 'Wholesale of hardware, plumbing and heating equipment and supplies',
            'details': 'This class includes:\n- wholesale of hardware and locks\n- wholesale of fittings and fixtures\n- wholesale of hot water heaters\n- wholesale of sanitary installation equipment:\n  . tubes, pipes, fittings, taps, T-pieces, connections, rubber pipes etc.\n- wholesale of tools such as hammers, saws, screwdrivers and other hand tools'
        },
        {
            'id': 374,
            'code': '46.75',
            'description': 'Wholesale of chemical products',
            'details': 'This class includes:\n- wholesale of industrial chemicals:\n  . aniline, printing ink, essential oils, industrial gases, chemical glues, colouring matter, synthetic resin, methanol, paraffin, scents and flavourings, soda, industrial salt, acids and sulphurs, starch derivates etc.\n- wholesale of fertilisers and agrochemical products'
        },
        {
            'id': 375,
            'code': '46.76',
            'description': 'Wholesale of other intermediate products',
            'details': 'This class includes:\n- wholesale of plastic materials in primary forms\n- wholesale of rubber\n- wholesale of textile fibres etc.\n- wholesale of paper in bulk\n- wholesale of precious stones'
        },
        {
            'id': 376,
            'code': '46.77',
            'description': 'Wholesale of waste and scrap',
            'details': 'This class includes:\n- wholesale of metal and non-metal waste and scrap and materials for recycling, including collecting, sorting, separating, stripping of used goods such as cars in order to obtain reusable parts, packing and repacking, storage and delivery, but without a real transformation process. Additionally, the purchased and sold waste has a remaining value.'
        },
        {
            'id': 377,
            'code': '46.90',
            'description': 'Non-specialised wholesale trade',
            'details': 'This class includes:\n- wholesale of a variety of goods without any particular specialisation'
        },
        {
            'id': 378,
            'code': '47.11',
            'description': 'Retail sale in non-specialised stores with food, beverages or tobacco predominating',
            'details': 'This class includes:\n- retail sale of a large variety of goods of which, however, food products, beverages or tobacco should be predominant:\n  . activities of general stores that have, apart from their main sales of food products, beverages or tobacco, several other lines of merchandise such as wearing apparel, furniture, appliances, hardware, cosmetics etc.'
        },
        {
            'id': 379,
            'code': '47.19',
            'description': 'Other retail sale in non-specialised stores',
            'details': 'This class includes:\n- retail sale of a large variety of goods of which food products, beverages or tobacco are not predominant\n- activities of department stores carrying a general line of merchandise, including wearing apparel, furniture, appliances, hardware, cosmetics, jewellery, toys, sports goods etc.'
        },
        {
            'id': 380,
            'code': '47.21',
            'description': 'Retail sale of fruit and vegetables in specialised stores',
            'details': 'This class includes:\n- retail sale of fresh fruit and vegetables\n- retail sale of prepared and preserved fruits and vegetables'
        },
        {
            'id': 381,
            'code': '47.22',
            'description': 'Retail sale of meat and meat products in specialised stores',
            'details': 'This class includes:\n- retail sale of meat and meat products (including poultry)'
        },
        {
            'id': 382,
            'code': '47.23',
            'description': 'Retail sale of fish, crustaceans and molluscs in specialised stores',
            'details': 'This class includes:\n- retail sale of fish, other seafood and products thereof'
        },
        {
            'id': 383,
            'code': '47.24',
            'description': 'Retail sale of bread, cakes, flour confectionery and sugar confectionery in specialised stores'
        },
        {
            'id': 384,
            'code': '47.25',
            'description': 'Retail sale of beverages in specialised stores',
            'details': 'This class includes:\n- retail sale of beverages (not for consumption on the premises):\n  . alcoholic beverages\n  . non-alcoholic beverages'
        },
        {
            'id': 385,
            'code': '47.26',
            'description': 'Retail sale of tobacco products in specialised stores',
            'details': 'This class includes:\n- retail sale of tobacco\n- retail sale of tobacco products'
        },
        {
            'id': 386,
            'code': '47.29',
            'description': 'Other retail sale of food in specialised stores',
            'details': 'This class includes:\n- retail sale of dairy products and eggs\n- retail sale of other food products n.e.c.'
        },
        {
            'id': 387,
            'code': '47.30',
            'description': 'Retail sale of automotive fuel in specialised stores',
            'details': 'This class includes:\n- retail sale of fuel for motor vehicles and motorcycles'
        },
        {
            'id': 388,
            'code': '47.41',
            'description': 'Retail sale of computers, peripheral units and software in specialised stores',
            'details': 'This class includes:\n- retail sale of computers\n- retail sale of computer peripheral equipment\n- retail sale of video game consoles\n- retail sale of non-customised software, including video games'
        },
        {
            'id': 389,
            'code': '47.42',
            'description': 'Retail sale of telecommunications equipment in specialised stores'
        },
        {
            'id': 390,
            'code': '47.43',
            'description': 'Retail sale of audio and video equipment in specialised stores',
            'details': 'This class includes:\n- retail sale of radio and television equipment\n- retail sale of audio and video equipment\n- retail sale of CD, DVD etc. players and recorders'
        },
        {
            'id': 391,
            'code': '47.51',
            'description': 'Retail sale of textiles in specialised stores',
            'details': 'This class includes:\n- retail sale of fabrics\n- retail sale of knitting yarn\n- retail sale of basic materials for rug, tapestry or embroidery making\n- retail sale of textiles\n- retail sale of haberdashery: needles, sewing thread etc.'
        },
        {
            'id': 392,
            'code': '47.52',
            'description': 'Retail sale of hardware, paints and glass in specialised stores',
            'details': 'This class includes:\n- retail sale of hardware\n- retail sale of paints, varnishes and lacquers\n- retail sale of flat glass\n- retail sale of other building material such as bricks, wood, sanitary equipment\n- retail sale of do-it-yourself material and equipment'
        },
        {
            'id': 393,
            'code': '47.53',
            'description': 'Retail sale of carpets, rugs, wall and floor coverings in specialised stores',
            'details': 'This class includes:\n- retail sale of carpets and rugs\n- retail sale of curtains and net curtains\n- retail sale of wallpaper and floor coverings'
        },
        {
            'id': 394,
            'code': '47.54',
            'description': 'Retail sale of electrical household appliances in specialised stores'
        },
        {
            'id': 395,
            'code': '47.59',
            'description': 'Retail sale of furniture, lighting equipment and other household articles in specialised stores',
            'details': 'This class includes:\n- retail sale of household furniture\n- retail sale of articles for lighting\n- retail sale of household utensils and cutlery, crockery, glassware, china and pottery\n- retail sale of wooden, cork and wickerwork goods\n- retail sale of non-electrical household appliances\n- retail sale of musical instruments and scores\n- retail sale of electrical security alarm systems, such as locking devices, safes, and vaults, without installation or maintenance services\n- retail sale of household articles and equipment n.e.c.'
        },
        {
            'id': 396,
            'code': '47.61',
            'description': 'Retail sale of books in specialised stores',
            'details': 'This class includes:\n- retail sale of books of all kinds'
        },
        {
            'id': 397,
            'code': '47.62',
            'description': 'Retail sale of newspapers and stationery in specialised stores'
        },
        {
            'id': 398,
            'code': '47.63',
            'description': 'Retail sale of music and video recordings in specialised stores',
            'details': 'This class includes:\n- retail sale of musical records, audio tapes, compact discs and cassettes\n- retail sale of video tapes and DVDs'
        },
        {
            'id': 399,
            'code': '47.64',
            'description': 'Retail sale of sporting equipment in specialised stores',
            'details': 'This class includes:\n- retail sale of sports goods, fishing gear, camping goods, boats and bicycles'
        },
        {
            'id': 400,
            'code': '47.65',
            'description': 'Retail sale of games and toys in specialised stores',
            'details': 'This class includes:\n- retail sale of games and toys, made of all materials'
        },
        {
            'id': 401,
            'code': '47.71',
            'description': 'Retail sale of clothing in specialised stores',
            'details': 'This class includes:\n- retail sale of articles of clothing\n- retail sale of articles of fur\n- retail sale of clothing accessories such as gloves, ties, braces etc.'
        },
        {
            'id': 402,
            'code': '47.72',
            'description': 'Retail sale of footwear and leather goods in specialised stores',
            'details': 'This class includes:\n- retail sale of footwear\n- retail sale of leather goods\n- retail sale of travel accessories of leather and leather substitutes'
        },
        {
            'id': 403,
            'code': '47.73',
            'description': 'Dispensing chemist in specialised stores',
            'details': 'This class includes:\n- retail sale of pharmaceuticals'
        },
        {
            'id': 404,
            'code': '47.74',
            'description': 'Retail sale of medical and orthopaedic goods in specialised stores'
        },
        {
            'id': 405,
            'code': '47.75',
            'description': 'Retail sale of cosmetic and toilet articles in specialised stores',
            'details': 'This class includes:\n- retail sale of perfumery, cosmetic and toilet articles'
        },
        {
            'id': 406,
            'code': '47.76',
            'description': 'Retail sale of flowers, plants, seeds, fertilisers, pet animals and pet food in specialised stores'
        },
        {
            'id': 407,
            'code': '47.77',
            'description': 'Retail sale of watches and jewellery in specialised stores'
        },
        {
            'id': 408,
            'code': '47.78',
            'description': 'Other retail sale of new goods in specialised stores',
            'details': 'This class includes:\n- retail sale of photographic, optical and precision equipment\n- activities of opticians\n- retail sale of souvenirs, craftwork and religious articles\n- activities of commercial art galleries\n- retail sale of household fuel oil, bottled gas, coal and fuel wood\n- retail sale of weapons and ammunition\n- retail sale of stamps and coins\n- retail trade services of commercial art galleries\n- retail sale of non-food products n.e.c.'
        },
        {
            'id': 409,
            'code': '47.79',
            'description': 'Retail sale of second-hand goods in stores',
            'details': 'This class includes:\n- retail sale of second-hand books\n- retail sale of other second-hand goods\n- retail sale of antiques\n- activities of auctioning houses (retail)'
        },
        {
            'id': 410,
            'code': '47.81',
            'description': 'Retail sale via stalls and markets of food, beverages and tobacco products'
        },
        {
            'id': 411,
            'code': '47.82',
            'description': 'Retail sale via stalls and markets of textiles, clothing and footwear'
        },
        {
            'id': 412,
            'code': '47.89',
            'description': 'Retail sale via stalls and markets of other goods',
            'details': 'This class includes:\n- retail sale of other goods via stalls or markets, such as:\n  . carpets and rugs\n  . books\n  . games and toys\n  . household appliances and consumer electronics\n  . music and video recordings'
        },
        {
            'id': 413,
            'code': '47.91',
            'description': 'Retail sale via mail order houses or via Internet',
            'details': 'This class includes retail sale activities via mail order houses or via Internet, i.e. retail sale activities where the buyer makes his choice on the basis of advertisements, catalogues, information provided on a website, models or any other means of advertising and places his order by mail, phone or over the Internet (usually through special means provided by a website). The products purchased can be either directly downloaded from the Internet or physically delivered to the customer.\n\nThis class includes:\n- retail sale of any kind of product by mail order \n- retail sale of any kind of product over the Internet'
        },
        {
            'id': 414,
            'code': '47.99',
            'description': 'Other retail sale not in stores, stalls or markets',
            'details': 'This class includes:\n- retail sale of any kind of product in any way that is not included in previous classes:\n  . by direct sales or door-to-door sales persons\n  . through vending machines etc.\n- direct selling of fuel (heating oil, firewood, etc.), delivered to the customers premises\n- activities of non-store auctions (retail, except Internet)\n- retail sale by (non-store) commission agents'
        },
        {
            'id': 415,
            'code': '49.10',
            'description': 'Passenger rail transport, interurban',
            'details': 'This class includes:\n- rail transportation of passengers using railroad rolling stock on mainline networks, spread over an extensive geographic area\n- passenger transport by interurban railways \n- operation of sleeping cars or dining cars as an integrated operation of railway companies'
        },
        {
            'id': 416,
            'code': '49.20',
            'description': 'Freight rail transport',
            'details': 'This class includes:\n- freight transport on mainline rail networks as well as short line freight railroads'
        },
        {
            'id': 417,
            'code': '49.31',
            'description': 'Urban and suburban passenger land transport',
            'details': 'This class includes:\n- land transport of passengers by urban or suburban transport systems. This may include different modes of land transport, such as by motor bus, tramway, streetcar, trolley bus, underground and elevated railways etc. The transport is carried out on scheduled routes normally following a fixed time schedule, entailing the picking up and setting down of passengers at normally fixed stops.'
        },
        {
            'id': 418,
            'code': '49.32',
            'description': 'Taxi operation'
        },
        {
            'id': 419,
            'code': '49.39',
            'description': 'Other passenger land transport n.e.c.',
            'details': 'This class includes:\n- other passenger road transport:\n  . scheduled long-distance bus services\n  . charters, excursions and other occasional coach services\n  . airport shuttles\n- operation of teleferics, funiculars, ski and cable lifts if not part of urban or suburban transit systems'
        },
        {
            'id': 420,
            'code': '49.41',
            'description': 'Freight transport by road',
            'details': 'This class includes:\n- all freight transport operations by road:\n  . logging haulage\n  . stock haulage\n  . refrigerated haulage\n  . heavy haulage\n  . bulk haulage, including haulage in tanker trucks including milk collection at farms\n  . haulage of automobiles\n  . transport of waste and waste materials, without collection or disposal'
        },
        {
            'id': 421,
            'code': '49.42',
            'description': 'Removal services',
            'details': 'This class includes:\n- removal (relocation) services to businesses and households by road transport'
        },
        {
            'id': 422,
            'code': '49.50',
            'description': 'Transport via pipeline',
            'details': 'This class includes:\n- transport of gases, liquids, water, slurry and other commodities via pipelines'
        },
        {
            'id': 423,
            'code': '50.10',
            'description': 'Sea and coastal passenger water transport',
            'details': 'This class includes:\n- transport of passengers over seas and coastal waters, whether scheduled or not:\n  . operation of excursion, cruise or sightseeing boats\n  . operation of ferries, water taxis etc.'
        },
        {
            'id': 424,
            'code': '50.20',
            'description': 'Sea and coastal freight water transport',
            'details': 'This class includes:\n- transport of freight over seas and coastal waters, whether scheduled or not\n- transport by towing or pushing of barges, oil rigs etc.'
        },
        {
            'id': 425,
            'code': '50.30',
            'description': 'Inland passenger water transport',
            'details': 'This class includes:\n- transport of passengers via rivers, canals, lakes and other inland waterways, including inside harbours and ports'
        },
        {
            'id': 426,
            'code': '50.40',
            'description': 'Inland freight water transport',
            'details': 'This class includes:\n- transport of freight via rivers, canals, lakes and other inland waterways, including inside harbours and ports'
        },
        {
            'id': 427,
            'code': '51.10',
            'description': 'Passenger air transport',
            'details': 'This class includes:\n- transport of passengers by air over regular routes and on regular schedules\n- charter flights for passengers\n- scenic and sightseeing flights'
        },
        {
            'id': 428,
            'code': '51.21',
            'description': 'Freight air transport',
            'details': 'This class includes:\n- transport freight by air over regular routes and on regular schedules\n- non-scheduled transport of freight by air'
        },
        {
            'id': 429,
            'code': '51.22',
            'description': 'Space transport',
            'details': 'This class includes:\n- launching of satellites and space vehicles\n- space transport of freight and passengers'
        },
        {
            'id': 430,
            'code': '52.10',
            'description': 'Warehousing and storage',
            'details': 'This class includes:\n- operation of storage and warehouse facilities for all kinds of goods:\n  . operation of grain silos, general merchandise warehouses, refrigerated warehouses, storage tanks etc.'
        },
        {
            'id': 431,
            'code': '52.21',
            'description': 'Service activities incidental to land transportation',
            'details': 'This class includes:\n- activities related to land transport of passengers, animals or freight:\n  . operation of terminal facilities such as railway stations, bus stations, stations for the handling of goods\n  . operation of railroad infrastructure\n  . operation of roads, bridges, tunnels, car parks or garages, bicycle parkings, winter storage of caravans\n- switching and shunting\n- towing and road side assistance'
        },
        {
            'id': 432,
            'code': '52.22',
            'description': 'Service activities incidental to water transportation',
            'details': 'This class includes:\n- activities related to water transport of passengers, animals or freight:\n  . operation of terminal facilities such as harbours and piers\n  . operation of waterway locks etc.\n  . navigation, pilotage and berthing activities\n  . lighterage, salvage activities\n  . lighthouse activities'
        },
        {
            'id': 433,
            'code': '52.23',
            'description': 'Service activities incidental to air transportation',
            'details': 'This class includes:\n- activities related to air transport of passengers, animals or freight:\n  . operation of terminal facilities such as airway terminals etc.\n  . airport and air-traffic-control activities\n  . ground service activities on airfields etc.'
        },
        {
            'id': 434,
            'code': '52.24',
            'description': 'Cargo handling',
            'details': "This class includes:\n- loading and unloading of goods or passengers' luggage irrespective of the mode of transport used for transportation\n- stevedoring\n- loading and unloading of freight railway cars"
        },
        {
            'id': 435,
            'code': '52.29',
            'description': 'Other transportation support activities ',
            'details': 'This class includes:\n- forwarding of freight\n- arranging or organising of transport operations by rail, road, sea or air\n- organisation of group and individual consignments (including pickup and delivery of goods and grouping of consignments)\n- issue and procurement of transport documents and waybills\n- activities of customs agents\n- activities of sea-freight forwarders and air-cargo agents\n- brokerage for ship and aircraft space\n- goods-handling operations, e.g. temporary crating for the sole purpose of protecting the goods during transit, uncrating, sampling, weighing of goods'
        },
        {
            'id': 436,
            'code': '53.10',
            'description': 'Postal activities under universal service obligation',
            'details': 'This class includes the activities of postal services operating under a universal service obligation by one or more designated universal service providers. The activities include use of the universal service infrastructure, including retail locations, sorting and processing facilities, and carrier routes to pickup and deliver the mail. The delivery can include letter-post, i.e. letters, postcards, printed papers (newspaper, periodicals, advertising items, etc.), small packets, goods or documents. Also included are other services necessary to support the universal service obligation.\n\nThis class includes:\n- pickup, sorting, transport and delivery (domestic or international) of letter-post and (mail-type) parcels and packages by postal services operating under a universal service obligation. One or more modes of transport may be involved and the activity may be carried out with either self-owned (private) transport or via public transport.\n- collection of letter-mail and parcels from public letter-boxes or from post offices'
        },
        {
            'id': 437,
            'code': '53.20',
            'description': 'Other postal and courier activities',
            'details': 'This class includes:\n- pickup, sorting, transport and delivery (domestic or international) of letter-post and (mail-type) parcels and packages by firms operating outside the scope of a universal service obligation. One or more modes of transport may be involved and the activity may be carried out with either self-owned (private) transport or via public transport.'
        },
        {
            'id': 438,
            'code': '55.10',
            'description': 'Hotels and similar accommodation',
            'details': 'This class includes the provision of accommodation, typically on a daily or weekly basis, principally for short stays by visitors. This includes the provision of furnished accommodation in guest rooms and suites. Services include daily cleaning and bed-making. A range of additional services may be provided such as food and beverage services, parking, laundry services, swimming pools and exercise rooms, recreational facilities as well as conference and convention facilities.\n\nThis class includes accommodation provided by:\n- hotels\n- resort hotels \n- suite/apartment hotels\n- motels'
        },
        {
            'id': 439,
            'code': '55.20',
            'description': 'Holiday and other short-stay accommodation',
            'details': "This class includes the provision of accommodation, typically on a daily or weekly basis, principally for short stays by visitors, in self-contained space consisting of complete furnished rooms or areas for living/dining and sleeping, with cooking facilities or fully equipped kitchens. This may take the form of apartments or flats in small free-standing multi-storey buildings or clusters of buildings, or single storey bungalows, chalets, cottages and cabins. Very minimal complementary services, if any, are provided. \n\nThis class includes accommodation provided by:\n- children's and other holiday homes\n- visitor flats and bungalows\n- cottages and cabins without housekeeping services\n- youth hostels and mountain refuges"
        },
        {
            'id': 440,
            'code': '55.30',
            'description': 'Camping grounds, recreational vehicle parks and trailer parks',
            'details': 'This class includes:\n- provision of accommodation in campgrounds, trailer parks, recreational camps and fishing and hunting camps for short stay visitors\n- provision of space and facilities for recreational vehicles'
        },
        {
            'id': 441,
            'code': '55.90',
            'description': 'Other accommodation',
            'details': 'This class includes the provision temporary or longer-term accommodation in single or shared rooms or dormitories for students, migrant (seasonal) workers and other individuals. \n\nThis class includes:\n- student residences\n- school dormitories\n- workers hostels \n- rooming and boarding houses\n- railway sleeping cars'
        },
        {
            'id': 442,
            'code': '56.10',
            'description': 'Restaurants and mobile food service activities',
            'details': 'This class includes the provision of food services to customers, whether they are served while seated or serve themselves from a display of items, whether they eat the prepared meals on the premises, take them out or have them delivered. This includes the preparation and serving of meals for immediate consumption from motorised vehicles or non-motorised carts.\n\nThis class includes activities of:\n- restaurants\n- cafeterias\n- fast-food restaurants\n- take-out eating places\n- ice cream truck vendors\n- mobile food carts\n- food preparation in market stalls'
        },
        {
            'id': 443,
            'code': '56.21',
            'description': 'Event catering activities',
            'details': 'This class includes the provision of food services based on contractual arrangements with the customer, at the location specified by the customer, for a specific event.'
        },
        {
            'id': 444,
            'code': '56.29',
            'description': 'Other food service activities',
            'details': 'This class includes industrial catering, i.e. the provision of food services based on contractual arrangements with the customer, for a specific period of time. Also included is the operation of food concessions at sports and similar facilities. The food is usually prepared in a central unit.\n\nThis class includes:\n- activities of food service contractors (e.g. for transportation companies)\n- operation of food concessions at sports and similar facilities\n- operation of canteens or cafeterias (e.g. for factories, offices, hospitals or schools) on a concession basis'
        },
        {
            'id': 445,
            'code': '56.30',
            'description': 'Beverage serving activities',
            'details': 'This class includes preparation and serving of beverages for immediate consumption on the premises.\n\nThis class includes activities of:\n- bars\n- taverns\n- cocktail lounges\n- discotheques (with beverage serving predominant)\n- beer parlours\n- coffee shops\n- fruit juice bars\n- mobile beverage vendors'
        },
        {
            'id': 446,
            'code': '58.11',
            'description': 'Book publishing',
            'details': 'This class includes the activities of publishing of books in print, electronic (CD, electronic displays etc.) or audio form or on the Internet.\n\nIncluded are:\n- publishing of books, brochures, leaflets and similar publications, including publishing of dictionaries and encyclopaedias\n- publishing of atlases, maps and charts\n- publishing of audio books\n- publishing of encyclopaedias etc. on CD-ROM'
        },
        {
            'id': 447,
            'code': '58.12',
            'description': 'Publishing of directories and mailing lists',
            'details': 'This class includes the publishing of lists of facts/information (databases), that are protected in their form, but not in their content. These lists can be published in printed or electronic form.\n\nThis class includes:\n- publishing of mailing lists\n- publishing of telephone books\n- publishing of other directories and compilations, such as case law, pharmaceutical compendia etc.'
        },
        {
            'id': 448,
            'code': '58.13',
            'description': 'Publishing of newspapers',
            'details': 'This class includes the publishing of newspapers, including advertising newspapers, appearing at least four times a week. Publishing can be done in print or electronic form, including on the Internet.'
        },
        {
            'id': 449,
            'code': '58.14',
            'description': 'Publishing of journals and periodicals',
            'details': 'This class includes the publishing of periodicals and other journals, appearing less than four times a week. Publishing can be done in print or electronic form, including on the Internet. Publishing of radio and television schedules is included here.'
        },
        {
            'id': 450,
            'code': '58.19',
            'description': 'Other publishing activities',
            'details': 'This class includes:\n- publishing (including on-line) of:\n  . catalogues \n  . photos, engravings and postcards\n  . greeting cards\n  . forms\n  . posters, reproduction of works of art\n  . advertising material\n  . other printed matter\n- on-line publishing of statistics and other information'
        },
        {
            'id': 451,
            'code': '58.21',
            'description': 'Publishing of computer games',
            'details': 'This class includes: \n- publishing of computer games for all platforms'
        },
        {
            'id': 452,
            'code': '58.29',
            'description': 'Other software publishing',
            'details': 'This class includes:\n- publishing of ready-made (non-customised) software, including translation or adaptation of non-customised software for a particular market on own account:\n  . operating systems\n  . business and other applications'
        },
        {
            'id': 453,
            'code': '59.11',
            'description': 'Motion picture, video and television programme production activities',
            'details': 'This class includes:\n- production of motion pictures, videos, television programmes (televisions series, documentaries etc.), or television advertisements'
        },
        {
            'id': 454,
            'code': '59.12',
            'description': 'Motion picture, video and television programme post-production activities',
            'details': 'This class includes post-production activities such as editing, film/tape transfers, titling, subtitling, credits, closed captioning, computer-produced graphics, animation and special effects, developing and processing motion picture film, as well as activities of motion picture film laboratories and activities of special laboratories for animated films.'
        },
        {
            'id': 455,
            'code': '59.13',
            'description': 'Motion picture, video and television programme distribution activities',
            'details': 'This class includes:\n- distributing film, video tapes, DVDs and similar productions to motion picture theatres, television networks and stations, and exhibitors'
        },
        {
            'id': 456,
            'code': '59.14',
            'description': 'Motion picture projection activities',
            'details': 'This class includes:\n- activities of motion picture or video tape projection in cinemas, in the open air or in other projection facilities\n- activities of cine-clubs'
        },
        {
            'id': 457,
            'code': '59.20',
            'description': 'Sound recording and music publishing activities',
            'details': 'This class includes the activities of production of original (sound) master recordings, such as tapes, CDs; releasing, promoting and distributing sound recordings to wholesalers, retailers or directly to the public. These activities might be integrated or not with the production of master recordings in the same unit. If not, the unit exercising these activities has to obtain the reproduction and distribution rights to master recordings.'
        },
        {
            'id': 458,
            'code': '60.10',
            'description': 'Radio broadcasting',
            'details': 'This class includes:\n- activities of broadcasting audio signals through radio broadcasting studios and facilities for the transmission of aural programming to the public, to affiliates or to subscribers'
        },
        {
            'id': 459,
            'code': '60.20',
            'description': 'Television programming and broadcasting activities',
            'details': 'This class includes the creation of a complete television channel programme, from purchased programme components (e.g. movies, documentaries etc.), self produced programme components (e.g. local news, live reports) or a combination thereof. \n\nThis complete television programme can be either broadcast by the producing unit or produced for transmission by a third party distributor, such as cable companies or satellite television providers.\n\nThe programming may be of a general or specialised nature (e.g. limited formats such as news, sports, education or youth oriented programming). This class includes programming that is made freely available to users, as well as programming that is available only on a subscription basis. The programming of video-on-demand channels is also included here.'
        },
        {
            'id': 460,
            'code': '61.10',
            'description': 'Wired telecommunications activities',
            'details': 'This class includes:\n- operating, maintaining or providing access to facilities for the transmission of voice, data, text, sound and video using a wired telecommunications infrastructure, including:\n  . operating and maintaining switching and transmission facilities to provide point-to-point communications via landlines, microwave or a combination of landlines and satellite linkups\n  . operating of cable distribution systems (e.g. for distribution of data and television signals)\n  . furnishing telegraph and other non-vocal communications using own facilities\n\nThe transmission facilities that carry out these activities, may be based on a single technology or a combination of technologies.'
        },
        {
            'id': 461,
            'code': '61.20',
            'description': 'Wireless telecommunications activities',
            'details': 'This class includes:\n- operating, maintaining or providing access to facilities for the transmission of voice, data, text, sound, and video using a wireless telecommunications infrastructure\n- maintaining and operating paging as well as cellular and other wireless telecommunications networks\n\nThe transmission facilities provide omni-directional transmission via airwaves and may be based on a single technology or a combination of technologies.'
        },
        {
            'id': 462,
            'code': '61.30',
            'description': 'Satellite telecommunications activities',
            'details': 'This class includes:\n- operating, maintaining or providing access to facilities for the transmission of voice, data, text, sound and video using a satellite telecommunications infrastructure\n- delivery of visual, aural or textual programming received from cable networks, local television stations or radio networks to consumers via direct-to-home satellite systems. (The units classified here do not generally originate programming material.)'
        },
        {
            'id': 463,
            'code': '61.90',
            'description': 'Other telecommunications activities',
            'details': 'This class includes:\n- provision of specialised telecommunications applications, such as satellite tracking, communications telemetry, and radar station operations\n- operation of satellite terminal stations and associated facilities operationally connected with one or more terrestrial communications systems and capable of transmitting telecommunications to or receiving telecommunications from satellite systems\n- provision of Internet access over networks between the client and the ISP not owned or controlled by the ISP, such as dial-up Internet access etc.\n- provision of telephone and Internet access in facilities open to the public\n- provision of telecommunications services over existing telecom connections:\n  . VOIP (Voice Over Internet Protocol) provision\n- telecommunications resellers (i.e. purchasing and reselling network capacity without providing additional services)'
        },
        {
            'id': 464,
            'code': '62.01',
            'description': 'Computer programming activities',
            'details': "This class includes the writing, modifying, testing and supporting of software.\n\nThis class includes:\n- designing the structure and content of, and/or writing the computer code necessary to create and implement:\n  . systems software (including updates and patches)\n  . software applications (including updates and patches)\n  . databases\n  . web pages\n- customising of software, i.e. modifying and configuring an existing application so that it is functional within the clients' information system environment"
        },
        {
            'id': 465,
            'code': '62.02',
            'description': 'Computer consultancy activities',
            'details': 'This class includes the planning and designing of computer systems which integrate computer hardware, software and communication technologies. Services may include related users training.'
        },
        {
            'id': 466,
            'code': '62.03',
            'description': 'Computer facilities management activities',
            'details': "This class includes the provision of on-site management and operation of clients' computer systems and/or data processing facilities, as well as related support services."
        },
        {
            'id': 467,
            'code': '62.09',
            'description': 'Other information technology and computer service activities',
            'details': 'This class includes other information technology and computer related activities not elsewhere classified, such as:\n- computer disaster recovery services\n- installation (setting-up) of personal computers\n- software installation services'
        },
        {
            'id': 468,
            'code': '63.11',
            'description': 'Data processing, hosting and related activities',
            'details': 'This class includes:\n- provision of infrastructure for hosting, data processing services and related activities\n- specialized hosting activities such as:\n  . Web hosting\n  . streaming services\n  . application hosting\n- application service provisioning\n- general time-share provision of mainframe facilities to clients\n- data processing activities:\n  . complete processing of data supplied by clients\n  . generation of specialized reports from data supplied by clients\n- provision of data entry services'
        },
        {
            'id': 469,
            'code': '63.12',
            'description': 'Web portals',
            'details': 'This class includes: \n- operation of web sites that use a search engine to generate and maintain extensive databases of Internet addresses and content in an easily searchable format\n- operation of other websites that act as portals to the Internet, such as media sites providing periodically updated content'
        },
        {
            'id': 470,
            'code': '63.91',
            'description': 'News agency activities',
            'details': 'This class includes:\n- news syndicate and news agency activities furnishing news, pictures and features to the media'
        },
        {
            'id': 471,
            'code': '63.99',
            'description': 'Other information service activities n.e.c.',
            'details': 'This class includes other information service activities not elsewhere classified such as:\n- computer-based telephone information services\n- information search services on a contract or fee basis\n- news clipping services, press clipping services, etc.'
        },
        {
            'id': 472,
            'code': '64.11',
            'description': 'Central banking',
            'details': "This class includes:\n- issuing and managing the country's currency\n- monitoring and control of the money supply\n- taking deposits that are used for clearance between financial institutions\n- supervising banking operations\n- holding the country's international reserves\n- acting as banker to the government\n\nThe activities of central banks will vary for institutional reasons."
        },
        {
            'id': 473,
            'code': '64.19',
            'description': 'Other monetary intermediation',
            'details': 'This class includes the receiving of deposits and/or close substitutes for deposits and extending of credit or lending funds. The granting of credit can take a variety of forms, such as loans, mortgages, credit cards etc. These activities are generally carried out by monetary institutions other than central banks, such as:\n- banks\n- savings banks\n- credit unions'
        },
        {
            'id': 474,
            'code': '64.20',
            'description': 'Activities of holding companies',
            'details': 'This class includes the activities of holding companies, i.e. units that hold the assets (owning controlling-levels of equity) of a group of subsidiary corporations and whose principal activity is owning the group. The holding companies in this class do not provide any other service to the businesses in which the equity is held, i.e. they do not administer or manage other units.'
        },
        {
            'id': 475,
            'code': '64.30',
            'description': 'Trusts, funds and similar financial entities',
            'details': 'This class includes legal entities organised to pool securities or other financial assets, without managing, on behalf of shareholders or beneficiaries. The portfolios are customised to achieve specific investment characteristics, such as diversification, risk, rate of return and price volatility. These entities earn interest, dividends and other property income, but have little or no employment and no revenue from the sale of services.\n\nThis class includes:\n- open-end investment funds\n- closed-end investment funds\n- trusts, estates or agency accounts, administered on behalf of the beneficiaries under the terms of a trust agreement, will or agency agreement\n- unit investment trust funds'
        },
        {
            'id': 476,
            'code': '64.91',
            'description': 'Financial leasing',
            'details': 'This class includes:\n- leasing where the term approximately covers the expected life of the asset and the lessee acquires substantially all the benefits of its use and takes all the risks associated with its ownership. The ownership of the asset may or may not eventually be transferred. Such leases cover all or virtually all costs including interest.'
        },
        {
            'id': 477,
            'code': '64.92',
            'description': 'Other credit granting',
            'details': 'This class includes:\n- financial service activities primarily concerned with making loans by institutions not involved in monetary intermediation, where the granting of credit can take a variety of forms, such as loans, mortgages, credit cards etc., providing the following types of services:\n  . granting of consumer credit\n  . international trade financing\n  . provision of long-term finance to industry by industrial banks\n  . money lending outside the banking system\n  . credit granting for house purchase by specialised non-depository institutions\n  . pawnshops and pawnbrokers'
        },
        {
            'id': 478,
            'code': '64.99',
            'description': 'Other financial service activities, except insurance and pension funding n.e.c.',
            'details': 'This class includes:\n- other financial service activities primarily concerned with distributing funds other than by making loans:\n  . factoring activities\n  . writing of swaps, options and other hedging arrangements\n  . activities of viatical settlement companies\n- own-account investment activities, such as by venture capital companies, investment clubs etc.'
        },
        {
            'id': 479,
            'code': '65.11',
            'description': 'Life insurance',
            'details': 'This class includes:\n- underwriting annuities and life insurance policies, disability income insurance policies, and accidental death and dismemberment insurance policies (with or without a substantial savings element)'
        },
        {
            'id': 480,
            'code': '65.12',
            'description': 'Non-life insurance',
            'details': 'This class includes:\n- provision of insurance services other than life insurance:\n  . accident and fire insurance\n  . health insurance\n  . travel insurance\n  . property insurance\n  . motor, marine, aviation and transport insurance\n  . pecuniary loss and liability insurance'
        },
        {
            'id': 481,
            'code': '65.20',
            'description': 'Reinsurance',
            'details': 'This class includes:\n- activities of assuming all or part of the risk associated with existing insurance policies originally underwritten by other insurance carriers'
        },
        {
            'id': 482,
            'code': '65.30',
            'description': 'Pension funding',
            'details': "This class includes legal entities (i.e. funds, plans and/or programmes) organised to provide retirement income benefits exclusively for the sponsor's employees or members. This includes pension plans with defined benefits, as well as individual plans where benefits are simply defined through the member’s contribution.\n\nThis class includes:\n- employee benefit plans\n- pension funds and plans\n- retirement plans"
        },
        {
            'id': 483,
            'code': '66.11',
            'description': 'Administration of financial markets',
            'details': 'This class includes the operation and supervision of financial markets other than by public authorities, such as:\n- commodity contracts exchanges\n- futures commodity contracts exchanges\n- securities exchanges\n- stock exchanges\n- stock or commodity options exchanges'
        },
        {
            'id': 484,
            'code': '66.12',
            'description': 'Security and commodity contracts brokerage',
            'details': 'This class includes:\n- dealing in financial markets on behalf of others (e.g. stock broking) and related activities\n- securities brokerage\n- commodity contracts brokerage \n- activities of bureaux de change etc.'
        },
        {
            'id': 485,
            'code': '66.19',
            'description': 'Other activities auxiliary to financial services, except insurance and pension funding',
            'details': 'This class includes activities auxiliary to financial service activities not elsewhere classified, such as:\n- financial transaction processing and settlement activities, including for credit card transactions\n- investment advisory services \n- activities of mortgage advisers and brokers'
        },
        {
            'id': 486,
            'code': '66.21',
            'description': 'Risk and damage evaluation',
            'details': 'This class includes the provision of administration services of insurance, such as assessing and settling insurance claims, such as:\n- assessing insurance claims\n  . claims adjusting\n  . risk assessing\n  . risk and damage evaluation\n  . average and loss adjusting\n- settling insurance claims'
        },
        {
            'id': 487,
            'code': '66.22',
            'description': 'Activities of insurance agents and brokers',
            'details': 'This class includes:\n- activities of insurance agents and brokers (insurance intermediaries) in selling, negotiating or soliciting of annuities and insurance and reinsurance policies'
        },
        {
            'id': 488,
            'code': '66.29',
            'description': 'Other activities auxiliary to insurance and pension funding',
            'details': 'This class includes:\n- activities involved in or closely related to insurance and pension funding (except financial intermediation, claims adjusting and activities of insurance agents):\n  . salvage administration\n  . actuarial services'
        },
        {
            'id': 489,
            'code': '66.30',
            'description': 'Fund management activities',
            'details': 'This class includes portfolio and fund management activities on a fee or contract basis, for individuals, businesses and others, such as:\n- management of mutual funds\n- management of other investment funds\n- management of pension funds'
        },
        {
            'id': 490,
            'code': '68.10',
            'description': 'Buying and selling of own real estate',
            'details': 'This class includes:\n- buying and selling of self-owned real estate:\n  . apartment buildings and dwellings\n  . non-residential buildings, including exhibition halls, self-storage facilities, malls and shopping centres\n  . land'
        },
        {
            'id': 491,
            'code': '68.20',
            'description': 'Rental and operating of own or leased real estate',
            'details': 'This class includes:\n- rental and operating of self-owned or leased real estate:\n  . apartment buildings and dwellings\n  . non-residential buildings, including exhibition halls, self-storage facilities\n  . land\n- provision of homes and furnished or unfurnished flats or apartments for more permanent use, typically on a monthly or annual basis'
        },
        {
            'id': 492,
            'code': '68.31',
            'description': 'Real estate agencies',
            'details': 'This class includes the provision of real estate activities by real estate agencies:\n- intermediation in buying, selling and rental of real estate on a fee or contract basis\n- advisory activities and appraisal services in connection to buying, selling and rental of real estate, on a fee or contract basis\n- real estate escrow agents activities'
        },
        {
            'id': 493,
            'code': '68.32',
            'description': 'Management of real estate on a fee or contract basis'
        },
        {
            'id': 494,
            'code': '69.10',
            'description': 'Legal activities',
            'details': "This class includes:\n- legal representation of one party's interest against another party, whether or not before courts or other judicial bodies by, or under supervision of, persons who are members of the bar:\n  . advice and representation in civil cases\n  . advice and representation in criminal cases\n  . advice and representation in connection with labour disputes\n- general counselling and advising, preparation of legal documents:\n  . articles of incorporation, partnership agreements or similar documents in connection with company formation\n  . patents and copyrights\n  . preparation of deeds, wills, trusts etc.\n- other activities of notaries public, civil law notaries, bailiffs, arbitrators, examiners and referees"
        },
        {
            'id': 495,
            'code': '69.20',
            'description': 'Accounting, bookkeeping and auditing activities; tax consultancy',
            'details': 'This class includes:\n- recording of commercial transactions from businesses or others\n- preparation or auditing of financial accounts\n- examination of accounts and certification of their accuracy\n- preparation of personal and business income tax returns\n- advisory activities and representation on behalf of clients before tax authorities'
        },
        {
            'id': 496,
            'code': '70.10',
            'description': 'Activities of head offices',
            'details': 'This class includes the overseeing and managing of other units of the company or enterprise; undertaking the strategic or organisational planning and decision making role of the company or enterprise; exercising operational control and managing the day-to-day operations of their related units.\n\nThis class includes activities of:\n- head offices\n- centralised administrative offices\n- corporate offices\n- district and regional offices\n- subsidiary management offices'
        },
        {
            'id': 497,
            'code': '70.21',
            'description': 'Public relations and communication activities',
            'details': 'This class includes the provision of advice, guidance and operational assistance, including lobbying activities, to businesses and other organisations on public relations and communication.'
        },
        {
            'id': 498,
            'code': '70.22',
            'description': 'Business and other management consultancy activities',
            'details': 'This class includes the provision of advice, guidance and operational assistance to businesses and other organisations on management issues, such as corporate strategic and organisational planning, business process reengineering, change management, cost reduction and other financial issues; marketing objectives and policies; human resource policies, practices and planning; compensation and retirement strategies; production scheduling and control planning.\n\nThis provision of business services may include advice, guidance or operational assistance to businesses and the public service regarding:\n- design of accounting methods or procedures, cost accounting programmes, budgetary control procedures\n- advice and help to businesses and public services in planning, organisation, efficiency and control, management information etc.'
        },
        {
            'id': 499,
            'code': '71.11',
            'description': 'Architectural activities ',
            'details': 'This class includes:\n- architectural consulting activities:\n  . building design and drafting\n  . town and city planning and landscape architecture'
        },
        {
            'id': 500,
            'code': '71.12',
            'description': 'Engineering activities and related technical consultancy',
            'details': 'This class includes:\n- engineering design (i.e. applying physical laws and principles of engineering in the design of machines, materials, instruments, structures, processes and systems) and consulting activities for:\n  . machinery, industrial processes and industrial plant\n  . projects involving civil engineering, hydraulic engineering, traffic engineering\n  . water management projects\n  . projects elaboration and realisation relative to electrical and electronic engineering, mining engineering, chemical engineering, mechanical, industrial and systems engineering, safety engineering\n- elaboration of projects using air conditioning, refrigeration, sanitary and pollution control engineering, acoustical engineering etc.\n- geophysical, geologic and seismic surveying\n- geodetic surveying activities:\n  . land and boundary surveying activities\n  . hydrologic surveying activities\n  . subsurface surveying activities\n  . cartographic and spatial information activities'
        },
        {
            'id': 501,
            'code': '71.20',
            'description': 'Technical testing and analysis',
            'details': 'This class includes the performance of physical, chemical and other analytical testing of all types of materials and products, such as:\n  . acoustics and vibration testing\n  . testing of composition and purity of minerals etc.\n  . testing activities in the field of food hygiene, including veterinary testing and control in relation to food production\n  . testing of physical characteristics and performance of materials, such as strength, thickness, durability, radioactivity etc.\n  . qualification and reliability testing\n  . performance testing of complete machinery: motors, automobiles, electronic equipment etc.\n  . radiographic testing of welds and joints\n  . failure analysis\n  . testing and measuring of environmental indicators: air and water pollution etc.\n- certification of products, including consumer goods, motor vehicles, aircraft, pressurised containers, nuclear plants etc.\n- periodic road-safety testing of motor vehicles\n- testing with use of models or mock-ups (e.g. of aircraft, ships, dams etc.)\n- operation of police laboratories'
        },
        {
            'id': 502,
            'code': '72.11',
            'description': 'Research and experimental development on biotechnology',
            'details': 'This class includes research and experimental development on biotechnology:\n- DNA/RNA: genomics, pharmacogenomics, gene probes, genetic engineering, DNA/RNA sequencing/synthesis/amplification, gene expression profiling, and use of antisense technology\n- proteins and other molecules: sequencing/synthesis/engineering of proteins and peptides (including large molecule hormones); improved delivery methods for large molecule drugs; proteomics, protein isolation and purification, signalling, identification of cell receptors\n- cell and tissue culture and engineering: cell/tissue culture, tissue engineering (including tissue scaffolds and biomedical engineering), cellular fusion, vaccine/immune stimulants, embryo manipulation\n- process biotechnology techniques: fermentation using bioreactors, bioprocessing, bioleaching, biopulping, biobleaching, biodesulphurisation, bioremediation, biofiltration and phytoremediation\n- gene and RNA vectors: gene therapy, viral vectors\n- bioinformatics: construction of databases on genomes, protein sequences; modelling complex biological processes, including systems biology\n- nanobiotechnology: applies the tools and processes of nano/microfabrication to build devices for studying biosystems and applications in drug delivery, diagnostics etc.'
        },
        {
            'id': 503,
            'code': '72.19',
            'description': 'Other research and experimental development on natural sciences and engineering',
            'details': 'This class includes:\n- research and experimental development on natural science and engineering other than biotechnological research and experimental development:\n  . research and development on natural sciences\n  . research and development on engineering and technology\n  . research and development on medical sciences\n  . research and development on agricultural sciences\n  . interdisciplinary research and development, predominantly on natural sciences and engineering'
        },
        {
            'id': 504,
            'code': '72.20',
            'description': 'Research and experimental development on social sciences and humanities',
            'details': 'This class includes:\n- research and development on social sciences\n- research and development on humanities\n- interdisciplinary research and development, predominantly on social sciences and humanities'
        },
        {
            'id': 505,
            'code': '73.11',
            'description': 'Advertising agencies',
            'details': 'This class includes the provision of a full range of advertising services (i.e., through in-house capabilities or subcontracting), including advice, creative services, production of advertising material, and buying. \n\nIt includes:\n- creation and realisation of advertising campaigns:\n  . creating and placing advertising in newspapers, periodicals, radio, television, the Internet and other media\n  . creating and placing of outdoor advertising, e.g. billboards, panels, bulletins and frames, window dressing, showroom design, car and bus carding etc.\n  . aerial advertising\n  . distribution or delivery of advertising material or samples\n  . creation of stands and other display structures and sites\n- conducting marketing campaigns and other advertising services aimed at attracting and retaining customers\n  . promotion of products\n  . point-of-sale marketing\n  . direct mail advertising\n  . marketing consulting'
        },
        {
            'id': 506,
            'code': '73.12',
            'description': 'Media representation',
            'details': 'This class includes\n- media representation, i.e. sale or re-sale of time and space for various media soliciting advertising'
        },
        {
            'id': 507,
            'code': '73.20',
            'description': 'Market research and public opinion polling',
            'details': 'This class includes:\n- investigation into market potential, awareness, acceptance and familiarity of goods and services and buying habits of consumers for the purpose of sales promotion and development of new goods and services, including statistical analyses of the results\n- investigation into collective opinions of the public about political, economic and social issues and statistical analysis thereof'
        },
        {
            'id': 508,
            'code': '74.10',
            'description': 'Specialised design activities',
            'details': 'This class includes:\n- fashion design related to textiles, wearing apparel, shoes, jewellery, furniture and other interior decoration and other fashion goods as well as other personal or household goods\n- industrial design, i.e. creating and developing designs and specifications that optimise the use, value and appearance of products, including the determination of the materials, mechanism, shape, colour and surface finishes of the product, taking into consideration human characteristics and needs, safety, market appeal in distribution, use and maintenance\n- activities of graphic designers\n- activities of interior decorators'
        },
        {
            'id': 509,
            'code': '74.20',
            'description': 'Photographic activities',
            'details': 'This class includes:\n- commercial and consumer photograph production:\n  . portrait photography for passports, schools, weddings etc.\n  . photography for commercials, publishers, fashion, real estate or tourism purposes\n  . aerial photography \n  . videotaping of events: weddings, meetings etc.\n- film processing:\n  . developing, printing and enlarging from client-taken negatives or cine-films\n  . film developing and photo printing laboratories \n  . one hour photo shops (not part of camera stores)\n  . mounting of slides\n  . copying and restoring or transparency retouching in connection with photographs\n- activities of photojournalists'
        },
        {
            'id': 510,
            'code': '74.30',
            'description': 'Translation and interpretation activities'
        },
        {
            'id': 511,
            'code': '74.90',
            'description': 'Other professional, scientific and technical activities n.e.c.',
            'details': 'This class includes a great variety of service activities generally delivered to commercial clients. It includes those activities for which more advanced professional, scientific and technical skill levels are required, but does not include ongoing, routine business functions that are generally of short duration.\n\nThis class includes:\n- business brokerage activities, i.e. arranging for the purchase and sale of small and medium-sized businesses, including professional practices, but not including real estate brokerage\n- patent brokerage activities (arranging for the purchase and sale of patents)\n- appraisal activities other than for real estate and insurance (for antiques, jewellery, etc.)\n- bill auditing and freight rate information\n- weather forecasting activities\n- security consulting\n- agronomy consulting\n- environmental consulting\n- other technical consulting\n- activities of consultants other than architecture, engineering and management consultants\n- activities of quantity surveyors'
        },
        {
            'id': 512,
            'code': '75.00',
            'description': 'Veterinary activities',
            'details': 'This class includes:\n- animal health care and control activities for farm animals\n- animal health care and control activities for pet animals\n\nThese activities are carried out by qualified veterinarians when working in veterinary hospitals as well as when visiting farms, kennels or homes, in own consulting and surgery rooms or elsewhere.'
        },
        {
            'id': 513,
            'code': '77.11',
            'description': 'Rental and leasing of cars and light motor vehicles',
            'details': 'This class includes:\n- rental and operational leasing of the following types of vehicles:\n  . passenger cars and other light motor vehicles (with a weight not exceeding 3,5 tons) without driver'
        },
        {
            'id': 514,
            'code': '77.12',
            'description': 'Rental and leasing of trucks',
            'details': 'This class includes:\n- rental and operational leasing of the following types of vehicles:\n  . trucks, utility trailers and heavy motor vehicles (with a weight exceeding 3,5 tons)\n  . recreational vehicles'
        },
        {
            'id': 515,
            'code': '77.21',
            'description': 'Rental and leasing of recreational and sports goods',
            'details': 'This class includes rental of recreational and sports equipment:\n- pleasure boats, canoes, sailboats\n- bicycles\n- beach chairs and umbrellas\n- other sports equipment\n- skis'
        },
        {
            'id': 516,
            'code': '77.22',
            'description': 'Rental of video tapes and disks',
            'details': 'This class includes:\n- rental of video tapes, records, CDs, DVDs etc.'
        },
        {
            'id': 517,
            'code': '77.29',
            'description': 'Rental and leasing of other personal and household goods',
            'details': 'This class includes:\n- rental of all kinds of household or personal goods, to households or industries (except recreational and sports equipment):\n  . textiles, wearing apparel and footwear\n  . furniture, pottery and glass, kitchen and tableware, electrical appliances and house wares\n  . jewellery, musical instruments, scenery and costumes\n  . books, journals and magazines\n  . machinery and equipment used by amateurs or as a hobby e.g. tools for home repairs\n  . flowers and plants\n  . electronic equipment for household use'
        },
        {
            'id': 518,
            'code': '77.31',
            'description': 'Rental and leasing of agricultural machinery and equipment',
            'details': 'This class includes:\n- rental and operational leasing of agricultural and forestry machinery and equipment without operator:\n  . rental of products produced by class 28.30, such as agricultural tractors etc.'
        },
        {
            'id': 519,
            'code': '77.32',
            'description': 'Rental and leasing of construction and civil engineering machinery and equipment',
            'details': 'This class includes:\n- rental and operational leasing of construction and civil engineering machinery and equipment without operator:\n  . crane lorries\n  . scaffolds and work platforms, without erection and dismantling'
        },
        {
            'id': 520,
            'code': '77.33',
            'description': 'Rental and leasing of office machinery and equipment (including computers)',
            'details': 'This class includes:\n- rental and operational leasing of office machinery and equipment without operator:\n  . computers and computer peripheral equipment\n  . duplicating machines, typewriters and word-processing machines\n  . accounting machinery and equipment: cash registers, electronic calculators etc.\n  . office furniture'
        },
        {
            'id': 521,
            'code': '77.34',
            'description': 'Rental and leasing of water transport equipment',
            'details': 'This class includes:\n- rental and operational leasing of water-transport equipment without operator: \n  . commercial boats and ships'
        },
        {
            'id': 522,
            'code': '77.35',
            'description': 'Rental and leasing of air transport equipment',
            'details': 'This class includes:\n- rental and operational leasing of air transport equipment without operator:\n  . airplanes\n  . hot-air balloons'
        },
        {
            'id': 523,
            'code': '77.39',
            'description': 'Rental and leasing of other machinery, equipment and tangible goods n.e.c.',
            'details': 'This class includes:\n- rental and operational leasing, without operator, of other machinery and equipment that are generally used as capital goods by industries:\n  . engines and turbines\n  . machine tools\n  . mining and oilfield equipment\n  . professional radio, television and communication equipment\n  . motion picture production equipment\n  . measuring and controlling equipment\n  . other scientific, commercial and industrial machinery\n- rental and operational leasing of land-transport equipment (other than motor vehicles) without drivers:\n  . motorcycles, caravans and campers etc.\n  . railroad vehicles'
        },
        {
            'id': 524,
            'code': '77.40',
            'description': 'Leasing of intellectual property and similar products, except copyrighted works',
            'details': 'This class includes the activities of allowing others to use intellectual property products and similar products for which a royalty payment or licensing fee is paid to the owner of the product (i.e. the asset holder). The leasing of these products can take various forms, such as permission for reproduction, use in subsequent processes or products, operating businesses under a franchise etc. The current owners may or may not have created these products.\n\nThis class includes:\n- leasing of intellectual property products (except copyrighted works, such as books or software)\n- receiving royalties or licensing fees for the use of:\n  . patented entities\n  . trademarks or service marks\n  . brand names\n  . mineral exploration and evaluation\n  . franchise agreements'
        },
        {
            'id': 525,
            'code': '78.10',
            'description': 'Activities of employment placement agencies',
            'details': 'This class includes listing employment vacancies and referring or placing applicants for employment, where the individuals referred or placed are not employees of the employment agencies.\n\nThis class includes:\n- personnel search, selection referral and placement activities, including executive placement and search activities\n- activities of casting agencies and bureaus, such as theatrical casting agencies\n- activities of on-line employment placement agencies'
        },
        {
            'id': 526,
            'code': '78.20',
            'description': 'Temporary employment agency activities',
            'details': "This class includes the activities of supplying workers to clients' businesses for limited periods of time to temporarily replace or supplement the working force of the client, where the individuals provided are employees of the temporary help service unit. However, units classified here do not provide direct supervision of their employees at the clients' work sites."
        },
        {
            'id': 527,
            'code': '78.30',
            'description': 'Other human resources provision',
            'details': 'This class includes the activities of providing human resources for client businesses. The units classified here represent the employer of record for the employees on matters relating to payroll, taxes, and other fiscal and human resource issues, but they are not responsible for direction and supervision of employees.\n\nThe provision of human resources is typically done on a long-term or permanent basis and the units classified here perform a wide range of human resource and personnel management duties associated with this provision.'
        },
        {
            'id': 528,
            'code': '79.11',
            'description': 'Travel agency activities',
            'details': 'This class includes:\n- activities of agencies, primarily engaged in selling travel, tour, transportation and accommodation services on a wholesale or retail basis to the general public and commercial clients'
        },
        {
            'id': 529,
            'code': '79.12',
            'description': 'Tour operator activities',
            'details': 'This class includes:\n- arranging and assembling tours that are sold through travel agencies or directly by tour operators. The tours may include any or all of the following:\n  . transportation\n  . accommodation\n  . food\n  . visits to museums, historical or cultural sites, theatrical, musical or sporting events'
        },
        {
            'id': 530,
            'code': '79.90',
            'description': 'Other reservation service and related activities',
            'details': 'This class includes:\n- other travel-related reservation services:\n  . reservations for transportation, hotels, restaurants, car rentals, entertainment and sport etc.\n- time-share exchange services\n- ticket sales activities for theatrical, sports and other amusement and entertainment events\n- visitor assistance services:\n  . provision of travel information to visitors\n  . activities of tourist guides\n- tourism promotion activities'
        },
        {
            'id': 531,
            'code': '80.10',
            'description': 'Private security activities',
            'details': 'This class includes the provision of one or more of the following: guard and patrol services, picking up and delivering money, receipts, or other valuable items with personnel and equipment to protect such properties while in transit.\n\nThis class includes:\n- armoured car services\n- bodyguard services\n- polygraph services\n- fingerprinting services\n- security guard services\n- security shredding of information on any media'
        },
        {
            'id': 532,
            'code': '80.20',
            'description': 'Security systems service activities',
            'details': 'This class includes:\n- monitoring or remote monitoring of electronic security alarm systems, such as burglar and fire alarms, including their installation and maintenance\n- installing, repairing, rebuilding, and adjusting mechanical or electronic locking devices, safes and security vaults in connection with later monitoring and remote monitoring\n\nThe units carrying out these activities may also engage in selling such security systems, mechanical or electronic locking devices, safes and security vaults.'
        },
        {
            'id': 533,
            'code': '80.30',
            'description': 'Investigation activities',
            'details': 'This class includes:\n- investigation and detective service activities\n- activities of all private investigators, independent of the type of client or purpose of investigation'
        },
        {
            'id': 534,
            'code': '81.10',
            'description': 'Combined facilities support activities',
            'details': "This class includes the provision of a combination of support services within a client's facilities. These services include general interior cleaning, maintenance, trash disposal, guard and security, mail routing, reception, laundry and related services to support operations within facilities. These support activities are performed by operating staff, which is not involved with or responsible for the core business or activities of the client."
        },
        {
            'id': 535,
            'code': '81.21',
            'description': 'General cleaning of buildings',
            'details': 'This class includes:\n- general (non-specialized) cleaning of all types of buildings, such as:\n  . offices \n  . houses or apartments\n  . factories \n  . shops \n  . institutions\n- general (non-specialized) cleaning of other business and professional premises and multiunit residential buildings\n\nThese activities are mostly interior cleaning although they may include the cleaning of associated exterior areas such as windows or passageways.'
        },
        {
            'id': 536,
            'code': '81.22',
            'description': 'Other building and industrial cleaning activities',
            'details': 'This class includes:\n- exterior cleaning of buildings of all types, including offices, factories, shops, institutions and other business and professional premises and multiunit residential buildings\n- specialised cleaning activities for buildings such as window cleaning, chimney cleaning and cleaning of fireplaces, stoves, furnaces, incinerators, boilers, ventilation ducts and exhaust units\n- cleaning of industrial machinery\n- other building and industrial cleaning activities, n.e.c.'
        },
        {
            'id': 537,
            'code': '81.29',
            'description': 'Other cleaning activities',
            'details': 'This class includes:\n- swimming pool cleaning and maintenance activities\n- cleaning of trains, buses, planes, etc.\n- cleaning of the inside of road and sea tankers \n- disinfecting and exterminating activities\n- bottle cleaning\n- street sweeping and snow and ice removal\n- other cleaning activities, n.e.c.'
        },
        {
            'id': 538,
            'code': '81.30',
            'description': 'Landscape service activities',
            'details': 'This class includes:\n- planting, care and maintenance of:\n  . parks and gardens for:\n    . private and public housing\n    . public and semi-public buildings (schools, hospitals, administrative buildings, church buildings etc.)\n    . municipal grounds (parks, green areas, cemeteries etc.)\n    . highway greenery (roads, train lines and tramlines, waterways, ports)\n    . industrial and commercial buildings\n- greenery for:\n  . buildings (roof gardens, façade greenery, indoor gardens etc.)\n  . sports grounds (football fields, golf courses etc.), play grounds, lawns for sunbathing and other recreational parks\n  . stationary and flowing water (basins, alternating wet areas, ponds, swimming pools, ditches, watercourses, plant sewage systems)\n- plants for protection against noise, wind, erosion, visibility and dazzling'
        },
        {
            'id': 539,
            'code': '82.11',
            'description': 'Combined office administrative service activities',
            'details': 'This class includes the provision of a combination of day-to-day office administrative services, such as reception, financial planning, billing and record keeping, personnel and mail services etc. for others on a contract or fee basis.'
        },
        {
            'id': 540,
            'code': '82.19',
            'description': 'Photocopying, document preparation and other specialised office support activities',
            'details': 'This class includes a variety of copying, document preparation and specialised office support activities. The document copying/printing activities included here cover only short-run type printing activities.\n\nThis class includes: \n- document preparation\n- document editing or proofreading \n- typing and word processing \n- secretarial support services\n- transcription of documents, and other secretarial services\n- letter or resume writing \n- provision of mailbox rental and other postal and mailing services, such as pre-sorting, addressing, etc. \n- photocopying \n- duplicating\n- blueprinting\n- other document copying services (without also providing printing services, such as offset printing, quick printing, digital printing, pre-press services)'
        },
        {
            'id': 541,
            'code': '82.20',
            'description': 'Activities of call centres',
            'details': 'This class includes the activities of: \n- inbound call centres, answering calls from clients by using human operators, automatic call distribution, computer telephone integration, interactive voice response systems or similar methods to receive orders, provide product information, deal with customer requests for assistance or address customer complaints \n- outbound call centres using similar methods to sell or market goods or services to potential customers, undertake market research or public opinion polling and similar activities for clients'
        },
        {
            'id': 542,
            'code': '82.30',
            'description': 'Organisation of conventions and trade shows',
            'details': 'This class includes the organisation, promotion and/or management of events, such as business and trade shows, conventions, conferences and meetings, whether or not including the management and provision of the staff to operate the facilities in which these events take place.'
        },
        {
            'id': 543,
            'code': '82.91',
            'description': 'Activities of collection agencies and credit bureaus',
            'details': 'This class includes:\n- collection of payments for claims and remittance of payments collected to the clients, such as bill or debt collection services\n- compiling of information, such as credit and employment histories on individuals and credit histories on businesses and providing the information to financial institutions, retailers and others who have a need to evaluate the creditworthiness of these persons and businesses'
        },
        {
            'id': 544,
            'code': '82.92',
            'description': 'Packaging activities',
            'details': 'This class includes:\n- packaging activities on a fee or contract basis, whether or not these involve an automated process:\n  . bottling of liquids, including beverages and food\n  . packaging of solids (blister packaging, foil-covered etc.)\n  . security packaging of pharmaceutical preparations\n  . labelling, stamping and imprinting\n  . parcel-packing and gift-wrapping'
        },
        {
            'id': 545,
            'code': '82.99',
            'description': 'Other business support service activities n.e.c.',
            'details': 'This class includes:\n- providing verbatim reporting and stenotype recording of live legal proceedings and transcribing subsequent recorded materials, such as:\n  . court reporting or stenotype recording services\n  . public stenography services\n- real-time (i.e. simultaneous) closed captioning of live television performances of meetings, conferences \n- address bar coding services\n- bar code imprinting services\n- fundraising organisation services on a contract or fee basis\n- repossession services\n- parking meter coin collection services\n- activities of independent auctioneers \n- administration of loyalty programmes\n- other support activities typically provided to businesses not elsewhere classified'
        },
        {
            'id': 546,
            'code': '84.11',
            'description': 'General public administration activities',
            'details': 'This class includes:\n- executive and legislative administration of central, regional and local bodies\n- administration and supervision of fiscal affairs:\n  . operation of taxation schemes\n  . duty/tax collection on goods and tax violation investigation\n  . customs administration\n- budget implementation and management of public funds and public debt:\n  . raising and receiving of money and control of their disbursement\n- administration of overall (civil) research and development policy and associated funds\n- administration and operation of overall economic and social planning and statistical services at the various levels of government'
        },
        {
            'id': 547,
            'code': '84.12',
            'description': 'Regulation of the activities of providing health care, education, cultural services and other social services, excluding social security',
            'details': 'This class includes:\n- public administration of programmes aimed to increase personal well-being:\n  . health\n  . education\n  . culture\n  . sport\n  . recreation\n  . environment\n  . housing\n  . social services\n- public administration of research and development policies and associated funds for these areas'
        },
        {
            'id': 548,
            'code': '84.13',
            'description': 'Regulation of and contribution to more efficient operation of businesses',
            'details': 'This class includes:\n- public administration and regulation, including subsidy allocation, for different economic sectors: \n  . agriculture\n  . land use\n  . energy and mining resources\n  . infrastructure\n  . transport\n  . communication\n  . hotels and tourism\n  . wholesale and retail trade\n- administration of research and development policies and associated funds to improve economic performance\n- administration of general labour affairs\n- implementation of regional development policy measures, e.g. to reduce unemployment'
        },
        {
            'id': 549,
            'code': '84.21',
            'description': 'Foreign affairs',
            'details': 'This class includes:\n- administration and operation of the ministry of foreign affairs and diplomatic and consular missions stationed abroad or at offices of international organisations\n- administration, operation and support for information and cultural services intended for distribution beyond national boundaries\n- aid to foreign countries, whether or not routed through international organisations\n- provision of military aid to foreign countries\n- management of foreign trade, international financial and foreign technical affairs'
        },
        {
            'id': 550,
            'code': '84.22',
            'description': 'Defence activities',
            'details': 'This class includes:\n- administration, supervision and operation of military defence affairs and land, sea, air and space defence forces such as:\n  . combat forces of army, navy and air force\n  . engineering, transport, communications, intelligence, material, personnel and other non-combat forces and commands\n  . reserve and auxiliary forces of the defence establishment\n  . military logistics (provision of equipment, structures, supplies etc.)\n  . health activities for military personnel in the field\n- administration, operation and support of civil defence forces\n- support for the working out of contingency plans and the carrying out of exercises in which civilian institutions and populations are involved\n- administration of defence-related research and development policies and related funds'
        },
        {
            'id': 551,
            'code': '84.23',
            'description': 'Justice and judicial activities',
            'details': 'This class includes:\n- administration and operation of administrative civil and criminal law courts, military tribunals and the judicial system, including legal representation and advice on behalf of the government or when provided by the government in cash or services\n- rendering of judgements and interpretations of the law\n- arbitration of civil actions\n- prison administration and provision of correctional services, including rehabilitation services, regardless of whether their administration and operation is done by government units or by private units on a contract or fee basis'
        },
        {
            'id': 552,
            'code': '84.24',
            'description': 'Public order and safety activities',
            'details': 'This class includes:\n- administration and operation of regular and auxiliary police forces supported by public authorities and of port, border, coastguards and other special police forces, including traffic regulation, alien registration, maintenance of arrest records\n- provision of supplies for domestic emergency use in case of peacetime disasters'
        },
        {
            'id': 553,
            'code': '84.25',
            'description': 'Fire service activities',
            'details': 'This class includes:\n- fire fighting and fire prevention:\n  . administration and operation of regular and auxiliary fire brigades in fire prevention, fire fighting, rescue of persons and animals, assistance in civic disasters, floods, road accidents etc.'
        },
        {
            'id': 554,
            'code': '84.30',
            'description': 'Compulsory social security activities',
            'details': 'This class includes:\n- funding and administration of government-provided social security programmes:\n  . sickness, work-accident and unemployment insurance\n  . retirement pensions\n  . programmes covering losses of income due to maternity, temporary disablement, widowhood etc.'
        },
        {
            'id': 555,
            'code': '85.10',
            'description': 'Pre-primary education ',
            'details': 'This class includes:\n- pre-primary education (education preceding the first level). Pre-primary education is defined as the initial stage of organised instruction designed primarily to introduce very young children to a school-type environment, that is, to provide a bridge between the home and a school-based atmosphere.'
        },
        {
            'id': 556,
            'code': '85.20',
            'description': 'Primary education ',
            'details': 'This class includes primary education: the furnishing of academic courses and associated course work that give students a sound basic education in reading, writing and mathematics and an elementary understanding of other subjects such as history, geography, natural science, social science, art and music. \n\nSuch education is generally provided for children, however the provision of literacy programmes within or outside the school system, which are similar in content to programmes in primary education but are intended for those considered too old to enter elementary schools, is also included (i.e. adult literacy programmes).'
        },
        {
            'id': 557,
            'code': '85.31',
            'description': 'General secondary education ',
            'details': 'This class includes provision of the type of education that lays the foundation for lifelong learning and human development and is capable of furthering education opportunities. Such units provide programmes that are usually on a more subject-oriented pattern using more specialised teachers, and more often employ several teachers conducting classes in their field of specialisation. \n\nSubject specialisation at this level often begins to have some influence even on the educational experience of those pursuing a general programme. Such programmes are designated to qualify students either for technical and vocational education or for entrance to higher education without any special subject prerequisite.\n\nThis class includes:\n- lower general secondary education corresponding more or less to the period of compulsory school attendance\n- upper general secondary education giving, in principle, access to higher education'
        },
        {
            'id': 558,
            'code': '85.32',
            'description': 'Technical and vocational secondary education ',
            'details': 'This class includes provision of education typically emphasising subject-matter specialisation and instruction in both theoretical background and practical skills generally associated with present or prospective employment. The aim of a programme can vary from preparation for a general field of employment to a very specific job.\n\nThis class includes:\n- technical and vocational education below the level of higher education as defined in 85.4'
        },
        {
            'id': 559,
            'code': '85.41',
            'description': 'Post-secondary non-tertiary education',
            'details': 'This class includes provision of post-secondary education, which cannot be considered tertiary education. For example provision of supplementary post-secondary education to prepare for tertiary education or post-secondary non-tertiary vocational.'
        },
        {
            'id': 560,
            'code': '85.42',
            'description': 'Tertiary education',
            'details': 'This class includes:\n- first, second and third stages of tertiary education'
        },
        {
            'id': 561,
            'code': '85.51',
            'description': 'Sports and recreation education',
            'details': "This class includes the provision of instruction in athletic activities to groups of individuals, such as by camps and schools. Overnight and day sports instruction camps are also included. It does not include academic schools, colleges and universities. Instruction may be provided in diverse settings, such as the unit's or client's training facilities, educational institutions or by other means. Instruction provided in this class is formally organised.\n\nThis class includes:\n- sports instruction (baseball, basketball, cricket, football, etc)\n- camps, sports instruction\n- gymnastics instruction\n- riding instruction, academies or schools\n- swimming instruction\n- professional sports instructors, teachers, coaches\n- martial arts instruction\n- card game instruction (such as bridge)\n- yoga instruction"
        },
        {
            'id': 562,
            'code': '85.52',
            'description': 'Cultural education',
            'details': 'This class includes provision of instruction in the arts, drama and music. Units giving this type of instructions might be named "schools”, "studios”, "classes” etc. They provide formally organised instruction, mainly for hobby, recreational or self-development purposes, but such instruction does not lead to a professional diploma, baccalaureate or graduate degree.\n\nThis class includes:\n- piano teachers and other music instruction\n- art instruction\n- dance instruction and dance studios\n- drama schools (except academic)\n- fine arts schools (except academic)\n- performing arts schools (except academic)\n- photography schools (except commercial)'
        },
        {
            'id': 563,
            'code': '85.53',
            'description': 'Driving school activities'
        },
        {
            'id': 564,
            'code': '85.59',
            'description': 'Other education n.e.c.',
            'details': 'This class includes:\n- education that is not definable by level\n- academic tutoring \n- learning centres offering remedial courses\n- professional examination review courses\n- language instruction and conversational skills instruction\n- computer training\n- religious instruction'
        },
        {
            'id': 565,
            'code': '85.60',
            'description': 'Educational support activities',
            'details': 'This class includes:\n- provision of non-instructional activities that support educational processes or systems:\n  . educational consulting\n  . educational guidance counselling activities\n  . educational testing evaluation activities\n  . educational testing activities\n  . organisation of student exchange programmes'
        },
        {
            'id': 566,
            'code': '86.10',
            'description': 'Hospital activities',
            'details': 'This class includes:\n- short- or long-term hospital activities, i.e. medical, diagnostic and treatment activities, of general hospitals (e.g. community and regional hospitals, hospitals of non-profit organisations, university hospitals, military-base and prison hospitals) and specialised hospitals (e.g. mental health and substance abuse hospitals, hospitals for infectious diseases, maternity hospitals, specialised sanatoriums).\n\nThe activities are chiefly directed to inpatients, are carried out under the direct supervision of medical doctors and include:\n  . services of medical and paramedical staff\n  . services of laboratory and technical facilities, including radiologic and anaesthesiologic services\n  . emergency room services\n  . provision of operating room services, pharmacy services, food and other hospital services\n  . services of family planning centres providing medical treatment such as sterilisation and termination of pregnancy, with accommodation'
        },
        {
            'id': 567,
            'code': '86.21',
            'description': 'General medical practice activities',
            'details': 'This class includes:\n- medical consultation and treatment in the field of general medicine carried out by general practitioners.'
        },
        {
            'id': 568,
            'code': '86.22',
            'description': 'Specialist medical practice activities',
            'details': 'This class includes:\n- medical consultation and treatment in the field of specialised medicine by medical specialists and surgeons'
        },
        {
            'id': 569,
            'code': '86.23',
            'description': 'Dental practice activities',
            'details': 'This class includes:\n- dental practice activities of a general or specialised nature, e.g. dentistry, endodontic and pediatric dentistry; oral pathology \n- orthodontic activities'
        },
        {
            'id': 570,
            'code': '86.90',
            'description': 'Other human health activities',
            'details': "This class includes:\n- activities for human health not performed by hospitals or by medical doctors or dentists:\n  . activities of nurses, midwives, physiotherapists or other paramedical practitioners in the field of optometry, hydrotherapy, medical massage, occupational therapy, speech therapy, chiropody, homeopathy, chiropractic, acupuncture etc.\n\nThese activities may be carried out in health clinics such as those attached to firms, schools, homes for the aged, labour organisations and fraternal organisations and in residential health facilities other than hospitals, as well as in own consulting rooms, patients' homes or elsewhere."
        },
        {
            'id': 571,
            'code': '87.10',
            'description': 'Residential nursing care activities',
            'details': 'This class includes:\n- activities of:\n  . homes for the elderly with nursing care\n  . convalescent homes\n  . rest homes with nursing care\n  . nursing care facilities\n  . nursing homes'
        },
        {
            'id': 572,
            'code': '87.20',
            'description': 'Residential care activities for mental retardation, mental health and substance abuse',
            'details': 'This class includes the provision of residential care (but not licensed hospital care) to people with mental retardation, mental illness, or substance abuse problems. Facilities provide room, board, protective supervision and counselling and some health care. \n\nThis class includes:\n- activities of:\n  . facilities for alcoholism or drug addiction treatment\n  . psychiatric convalescent homes\n  . residential group homes for the emotionally disturbed\n  . mental retardation facilities\n  . mental health halfway houses'
        },
        {
            'id': 573,
            'code': '87.30',
            'description': 'Residential care activities for the elderly and disabled',
            'details': 'This class includes the provision of residential and personal care services for the elderly and disabled who are unable to fully care for themselves and/or who do not desire to live independently. The care typically includes room, board, supervision, and assistance in daily living, such as housekeeping services. In some instances these units provide skilled nursing care for residents in separate on-site facilities.\n\nThis class includes:\n- activities of:\n  . assisted-living facilities\n  . continuing care retirement communities\n  . homes for the elderly with minimal nursing care\n  . rest homes without nursing care'
        },
        {
            'id': 574,
            'code': '87.90',
            'description': 'Other residential care activities',
            'details': "This class includes the provision of residential and personal care services for persons, except the elderly and disabled, who are unable to fully care for themselves or who do not desire to live independently.\n\nThis class includes:\n- activities provided on a round-the-clock basis directed to provide social assistance to children and special categories of persons with some limits on ability for self-care, but where medical treatment or education are not important elements:\n  . orphanages\n  . children's boarding homes and hostels\n  . temporary homeless shelters\n  . institutions that take care of unmarried mothers and their children\nThe activities may be carried out by government offices or private organisations."
        },
        {
            'id': 575,
            'code': '88.10',
            'description': 'Social work activities without accommodation for the elderly and disabled',
            'details': 'This class includes:\n- social, counselling, welfare, referral and similar services which are aimed at the elderly and disabled in their homes or elsewhere and carried out by government offices or by private organisations, national or local self-help organisations and by specialists providing counselling services:\n  . visiting of the elderly and disabled\n  . day-care activities for the elderly or for disabled adults\n  . vocational rehabilitation and habilitation activities for disabled persons provided that the education component is limited'
        },
        {
            'id': 576,
            'code': '88.91',
            'description': 'Child day-care activities'
        },
        {
            'id': 577,
            'code': '88.99',
            'description': 'Other social work activities without accommodation n.e.c.',
            'details': 'This class includes:\n- social, counselling, welfare, refugee, referral and similar services which are delivered to individuals and families in their homes or elsewhere and carried out by government offices or by private organisations, disaster relief organisations and national or local self-help organisations and by specialists providing counselling services:\n  . welfare and guidance activities for children and adolescents\n  . adoption activities, activities for the prevention of cruelty to children and others\n  . household budget counselling, marriage and family guidance, credit and debt counselling services\n  . community and neighbourhood activities\n  . activities for disaster victims, refugees, immigrants etc., including temporary or extended shelter for them\n  . vocational rehabilitation and habilitation activities for unemployed persons provided that the education component is limited\n  . eligibility determination in connection with welfare aid, rent supplements or food stamps\n  . day facilities for the homeless and other socially weak groups\n  . charitable activities like fund-raising or other supporting activities aimed at social work'
        },
        {
            'id': 578,
            'code': '90.01',
            'description': 'Performing arts',
            'details': 'This class includes:\n- production of live theatrical presentations, concerts and opera or dance productions and other stage productions:\n  . activities of groups, circuses or companies, orchestras or bands\n  . activities of individual artists such as actors, dancers, musicians, lecturers or speakers'
        },
        {
            'id': 579,
            'code': '90.02',
            'description': 'Support activities to performing arts',
            'details': 'This class includes:\n- support activities to performing arts for production of live theatrical presentations, concerts and opera or dance productions and other stage productions:\n  . activities of directors, producers, stage-set designers and builders, scene shifters, lighting engineers etc.'
        },
        {
            'id': 580,
            'code': '90.03',
            'description': 'Artistic creation',
            'details': 'This class includes:\n- activities of individual artists such as sculptors, painters, cartoonists, engravers, etchers etc.\n- activities of individual writers, for all subjects including fictional writing, technical writing etc.\n- activities of independent journalists\n- restoring of works of art such as paintings etc.'
        },
        {
            'id': 581,
            'code': '90.04',
            'description': 'Operation of arts facilities',
            'details': 'This class includes:\n- operation of concert and theatre halls and other arts facilities'
        },
        {
            'id': 582,
            'code': '91.01',
            'description': 'Library and archives activities',
            'details': 'This class includes:\n- documentation and information activities of libraries of all kinds, reading, listening and viewing rooms, public archives providing service to the general public or to a special clientele, such as students, scientists, staff, members as well as operation of government archives:\n  . organisation of a collection, whether specialised or not\n  . cataloguing collections\n  . lending and storage of books, maps, periodicals, films, records, tapes, works of art etc.\n  . retrieval activities in order to comply with information requests etc.\n- stock photo and movie libraries and services'
        },
        {
            'id': 583,
            'code': '91.02',
            'description': 'Museums activities',
            'details': 'This class includes:\n- operation of museums of all kinds:\n  . art museums, museums of jewellery, furniture, costumes, ceramics, silverware\n  . natural history, science and technological museums, historical museums, including military museums \n  . other specialised museums\n  . open-air museums'
        },
        {
            'id': 584,
            'code': '91.03',
            'description': 'Operation of historical sites and buildings and similar visitor attractions',
            'details': 'This class includes:\n- operation and preservation of historical sites and buildings'
        },
        {
            'id': 585,
            'code': '91.04',
            'description': 'Botanical and zoological gardens and nature reserves activities',
            'details': "This class includes:\n- operation of botanical and zoological gardens, including children's zoos\n- operation of nature reserves, including wildlife preservation, etc."
        },
        {
            'id': 586,
            'code': '92.00',
            'description': 'Gambling and betting activities',
            'details': 'This class includes gambling and betting activities such as:\n- sale of lottery tickets\n- operation (exploitation) of coin-operated gambling machines\n- operation of virtual gambling web sites\n- bookmaking and other betting operations\n- off-track betting\n- operation of casinos, including "floating casinos”'
        },
        {
            'id': 587,
            'code': '93.11',
            'description': 'Operation of sports facilities',
            'details': 'This class includes:\n- operation of facilities for indoor or outdoor sports events (open, closed or covered, with or without spectator seating):\n  . football, hockey, cricket, rugby stadiums\n  . racetracks for car, dog, horse races\n  . swimming pools and stadiums\n  . track and field stadiums\n  . winter sports arenas and stadiums\n  . ice-hockey arenas\n  . boxing arenas\n  . golf courses\n  . bowling lanes\n- organisation and operation of outdoor or indoor sports events for professionals or amateurs by organisations with own facilities'
        },
        {
            'id': 588,
            'code': '93.12',
            'description': 'Activities of sports clubs',
            'details': 'This class includes the activities of sports clubs, which, whether professional, semi-professional or amateur clubs, give their members the opportunity to engage in sporting activities.\n\nThis class includes:\n- operation of sports clubs:\n  . football clubs\n  . bowling clubs\n  . swimming clubs\n  . golf clubs\n  . boxing clubs\n  . winter sports clubs\n  . chess clubs\n  . track and field clubs\n  . shooting clubs, etc.'
        },
        {
            'id': 589,
            'code': '93.13',
            'description': 'Fitness facilities',
            'details': 'This class includes:\n- fitness and body-building clubs and facilities'
        },
        {
            'id': 590,
            'code': '93.19',
            'description': 'Other sports activities',
            'details': 'This class includes:\n- activities of producers or promoters of sports events, with or without facilities\n- activities of individual own-account sportsmen and athletes, referees, judges, timekeepers etc.\n- activities of sports leagues and regulating bodies\n- activities related to promotion of sporting events\n- activities of racing stables, kennels and garages\n- operation of sport fishing and hunting preserves\n- activities of mountain guides\n- support activities for sport or recreational hunting and fishing'
        },
        {
            'id': 591,
            'code': '93.21',
            'description': 'Activities of amusement parks and theme parks',
            'details': 'This class includes activities of amusement parks or theme parks. It includes the operation of a variety of attractions, such as mechanical rides, water rides, games, shows, theme exhibits and picnic grounds.'
        },
        {
            'id': 592,
            'code': '93.29',
            'description': 'Other amusement and recreation activities',
            'details': 'This class includes activities related to entertainment and recreation (except amusement parks and theme parks) not elsewhere classified:\n- operation (exploitation) of coin-operated games\n- activities of recreation parks (without accommodation)\n- operation of recreational transport facilities, e.g. marinas\n- operation of ski hills\n- rental of leisure and pleasure equipment as an integral part of recreational facilities\n- fairs and shows of a recreational nature\n- activities of beaches, including rental of facilities such as bathhouses, lockers, chairs etc.\n- operation of dance floors'
        },
        {
            'id': 593,
            'code': '94.11',
            'description': 'Activities of business and employers membership organisations',
            'details': "This class includes:\n- activities of organisations whose members' interests centre on the development and prosperity of enterprises in a particular line of business or trade, including farming, or on the economic growth and climate of a particular geographical area or political subdivision without regard for the line of business.\n- activities of federations of such associations\n- activities of chambers of commerce, guilds and similar organisations\n- dissemination of information, representation before government agencies, public relations and labour negotiations of business and employer organisations"
        },
        {
            'id': 594,
            'code': '94.12',
            'description': 'Activities of professional membership organisations',
            'details': "This class includes:\n- activities of organisations whose members' interests centre chiefly on a particular scholarly discipline or professional practice or technical field, such as medical associations, legal associations, accounting associations, engineering associations, architects associations etc.\n- activities of associations of specialists engaged in scientific, academic or cultural activities, such as associations of writers, painters, performers of various kinds, journalists etc.\n- dissemination of information, the establishment and supervision of standards of practice, representation before government agencies and public relations of professional organisations"
        },
        {
            'id': 595,
            'code': '94.20',
            'description': 'Activities of trade unions',
            'details': 'This class includes:\n- promoting of the interests of organised labour and union employees'
        },
        {
            'id': 596,
            'code': '94.91',
            'description': 'Activities of religious organisations',
            'details': 'This class includes:\n- activities of religious organisations or individuals providing services directly to worshippers in churches, mosques, temples, synagogues or other places\n- activities of organisations furnishing monastery and convent services\n- religious retreat activities'
        },
        {
            'id': 597,
            'code': '94.92',
            'description': 'Activities of political organisations',
            'details': "This class includes:\n- activities of political organisations and auxiliary organisations such as young people's auxiliaries associated with a political party. These organisations chiefly engage in influencing decision-taking in public governing bodies by placing members of the party or those sympathetic to the party in political office and involve the dissemination of information, public relations, fund-raising etc."
        },
        {
            'id': 598,
            'code': '94.99',
            'description': 'Activities of other membership organisations n.e.c.',
            'details': "This class includes:\n- activities of organisations (not directly affiliated to a political party) furthering a public cause or issue by means of public education, political influence, fund-raising etc.:\n  . citizens initiative or protest movements\n  . environmental and ecological movements\n  . organisations supporting community and educational facilities n.e.c.\n  . organisations for the protection and betterment of special groups, e.g. ethnic and minority groups\n  . associations for patriotic purposes, including war veterans' associations\n- consumer associations\n- automobile associations\n- associations for the purpose of social acquaintanceship such as rotary clubs, lodges etc.\n- associations of youth, young persons' associations, student associations, clubs and fraternities etc.\n- associations for the pursuit of a cultural or recreational activity or hobby (other than sports or games), e.g. poetry, literature and book clubs, historical clubs, gardening clubs, film and photo clubs, music and art clubs, craft and collectors' clubs, social clubs, carnival clubs etc."
        },
        {
            'id': 599,
            'code': '95.11',
            'description': 'Repair of computers and peripheral equipment',
            'details': 'This class includes the repair of electronic equipment, such as computers and computing machinery and peripheral equipment.\n\nThis class includes the repair and maintenance of:\n- desktop computers\n- laptop computers\n- magnetic disk drives, flash drives and other storage devices\n- optical disk drives (CD-RW, CD-ROM, DVD-ROM, DVD-RW)\n- printers\n- monitors\n- keyboards\n- mice, joysticks and trackball accessories\n- internal and external computer modems\n- dedicated computer terminals\n- computer servers\n- scanners, including bar code scanners\n- smart card readers\n- virtual reality helmets\n- computer projectors'
        },
        {
            'id': 600,
            'code': '95.12',
            'description': 'Repair of communication equipment',
            'details': 'This class includes repair and maintenance of communications equipment such as:\n- cordless telephones\n- cellular phones\n- carrier equipment modems\n- fax machines\n- communications transmission equipment (e.g. routers, bridges, modems)\n- two-way radios\n- commercial TV and video cameras'
        },
        {
            'id': 601,
            'code': '95.21',
            'description': 'Repair of consumer electronics',
            'details': 'This class includes repair and maintenance of consumer electronics:\n- repair of consumer electronics:\n  . television, radio receivers\n  . video cassette recorders (VCR)\n  . CD players\n  . household-type video cameras'
        },
        {
            'id': 602,
            'code': '95.22',
            'description': 'Repair of household appliances and home and garden equipment',
            'details': 'This class includes the repair and servicing household appliances and home and garden equipment:\n- repair and servicing of household appliances\n  . refrigerators, stoves, washing machines, clothes dryers, room air conditioners, etc.\n- repair and servicing of home and garden equipment\n  . lawnmowers, edgers, snow- and leaf- blowers, trimmers, etc.'
        },
        {
            'id': 603,
            'code': '95.23',
            'description': 'Repair of footwear and leather goods',
            'details': 'This class includes repair and maintenance of footwear and leather goods:\n- repair of boots, shoes, luggage and the like\n- fitting of heels'
        },
        {
            'id': 604,
            'code': '95.24',
            'description': 'Repair of furniture and home furnishings',
            'details': 'This class includes:\n- reupholstering, refinishing, repairing and restoring of furniture and home furnishings including office furniture'
        },
        {
            'id': 605,
            'code': '95.25',
            'description': 'Repair of watches, clocks and jewellery',
            'details': 'This class includes:\n- repair of watches, clocks and their parts such as watch cases and housings of all materials; movements, chronometers, etc.\n- repair of jewellery'
        },
        {
            'id': 606,
            'code': '95.29',
            'description': 'Repair of other personal and household goods',
            'details': 'This class includes repair of personal and household goods:\n- repair of bicycles\n- repair and alteration of clothing\n- repair of sporting goods (except sporting guns) and camping equipment\n- repair of books\n- repair of musical instruments (except organs and historical musical instruments)\n- repair of toys and similar articles\n- repair of other personal and household goods\n- piano-tuning'
        },
        {
            'id': 607,
            'code': '96.01',
            'description': 'Washing and (dry-)cleaning of textile and fur products',
            'details': "This class includes:\n- laundering and dry cleaning, pressing etc., of all kinds of clothing (including fur) and textiles, provided by mechanical equipment, by hand or by self-service coin-operated machines, whether for the general public or for industrial or commercial clients\n- laundry collection and delivery\n- carpet and rug shampooing and drapery and curtain cleaning, whether on clients' premises or not\n- provision of linens, work uniforms and related items by laundries\n- diaper supply services"
        },
        {
            'id': 608,
            'code': '96.02',
            'description': 'Hairdressing and other beauty treatment',
            'details': 'This class includes:\n- hair washing, trimming and cutting, setting, dyeing, tinting, waving, straightening and similar activities for men and women\n- shaving and beard trimming\n- facial massage, manicure and pedicure, make-up etc.'
        },
        {
            'id': 609,
            'code': '96.03',
            'description': 'Funeral and related activities',
            'details': "This class includes:\n- burial and incineration of human or animal corpses and related activities:\n  . preparing the dead for burial or cremation and embalming and morticians' services\n  . providing burial or cremation services\n  . rental of equipped space in funeral parlours\n- rental or sale of graves\n- maintenance of graves and mausoleums"
        },
        {
            'id': 610,
            'code': '96.04',
            'description': 'Physical well-being activities',
            'details': 'This class includes:\n- activities of Turkish baths, sauna and steam baths, solariums, reducing and slendering salons, massage salons etc.'
        },
        {
            'id': 611,
            'code': '96.09',
            'description': 'Other personal service activities n.e.c.',
            'details': "This class includes:\n- astrological and spiritualists' activities\n- social activities such as escort services, dating services, services of marriage bureaux\n- pet care services such as boarding, grooming, sitting and training pets\n- genealogical organisations\n- activities of tattooing and piercing studios\n- shoe shiners, porters, valet car parkers etc.\n- concession operation of coin-operated personal service machines (photo booths, weighing machines, machines for checking blood pressure, coin-operated lockers etc.)"
        },
        {
            'id': 612,
            'code': '97.00',
            'description': 'Activities of households as employers of domestic personnel',
            'details': 'This class includes the activities of households as employers of domestic personnel such as maids, cooks, waiters, valets, butlers, laundresses, gardeners, gatekeepers, stable-lads, chauffeurs, caretakers, governesses, babysitters, tutors, secretaries etc. \n\nIt allows the domestic personnel employed to state the activity of their employer in censuses or studies, even though the employer is an individual. The product produced by this activity is consumed by the employing household.'
        },
        {
            'id': 613,
            'code': '98.10',
            'description': 'Undifferentiated goods-producing activities of private households for own use',
            'details': 'This class includes the undifferentiated subsistence goods-producing activities of households, that is to say, the activities of households that are engaged in a variety of activities that produce goods for their own subsistence. These activities include hunting and gathering, farming, the production of shelter and clothing and other goods produced by the household for its own subsistence. \n\nIf households are also engaged in the production of marketed goods, they are classified to the appropriate goods-producing industry of NACE. If they are principally engaged in a specific goods-producing subsistence activity, they are classified to the appropriate goods-producing industry of NACE.'
        },
        {
            'id': 614,
            'code': '98.20',
            'description': 'Undifferentiated service-producing activities of private households for own use',
            'details': 'This class includes the undifferentiated subsistence services-producing activities of households. These activities include cooking, teaching, caring for household members and other services produced by the household for its own subsistence. \n\nIf households are also engaged in the production of multiple goods for subsistence purposes, they are classified to the undifferentiated goods-producing subsistence activities of households.'
        },
        {
            'id': 615,
            'code': '99.00',
            'description': 'Activities of extraterritorial organisations and bodies',
            'details': 'This class includes:\n- activities of international organisations such as the United Nations and the specialised agencies of the United Nations system, regional bodies etc., the International Monetary Fund, the World Bank, the World Customs Organisation, the Organisation for Economic Co-operation and Development, the organisation of Petroleum Exporting Countries, the European Communities, the European Free Trade Association etc.'
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
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 2,
            'classId': 13
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 3,
            'classId': 17
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 1,
            'classId': 4
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 1,
            'classId': 3
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 1,
            'classId': 2
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 1,
            'classId': 1
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 1,
            'classId': 6
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 1,
            'classId': 5
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 1,
            'classId': 7
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 6,
            'classId': 30
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 6,
            'classId': 29
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 6,
            'classId': 28
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 6,
            'classId': 27
        },
        {
            'sectionId': 1,
            'divisionId': 1,
            'groupId': 7,
            'classId': 31
        },
        {
            'sectionId': 1,
            'divisionId': 2,
            'groupId': 10,
            'classId': 34
        },
        {
            'sectionId': 1,
            'divisionId': 2,
            'groupId': 11,
            'classId': 35
        },
        {
            'sectionId': 1,
            'divisionId': 2,
            'groupId': 8,
            'classId': 32
        },
        {
            'sectionId': 1,
            'divisionId': 2,
            'groupId': 9,
            'classId': 33
        },
        {
            'sectionId': 1,
            'divisionId': 3,
            'groupId': 13,
            'classId': 38
        },
        {
            'sectionId': 1,
            'divisionId': 3,
            'groupId': 13,
            'classId': 39
        },
        {
            'sectionId': 1,
            'divisionId': 3,
            'groupId': 12,
            'classId': 36
        },
        {
            'sectionId': 1,
            'divisionId': 3,
            'groupId': 12,
            'classId': 37
        },
        {
            'sectionId': 2,
            'divisionId': 4,
            'groupId': 14,
            'classId': 40
        },
        {
            'sectionId': 2,
            'divisionId': 4,
            'groupId': 15,
            'classId': 41
        },
        {
            'sectionId': 2,
            'divisionId': 5,
            'groupId': 16,
            'classId': 42
        },
        {
            'sectionId': 2,
            'divisionId': 5,
            'groupId': 17,
            'classId': 43
        },
        {
            'sectionId': 2,
            'divisionId': 6,
            'groupId': 19,
            'classId': 46
        },
        {
            'sectionId': 2,
            'divisionId': 6,
            'groupId': 19,
            'classId': 45
        },
        {
            'sectionId': 2,
            'divisionId': 6,
            'groupId': 18,
            'classId': 44
        },
        {
            'sectionId': 2,
            'divisionId': 7,
            'groupId': 21,
            'classId': 50
        },
        {
            'sectionId': 2,
            'divisionId': 7,
            'groupId': 21,
            'classId': 51
        },
        {
            'sectionId': 2,
            'divisionId': 7,
            'groupId': 21,
            'classId': 49
        },
        {
            'sectionId': 2,
            'divisionId': 7,
            'groupId': 21,
            'classId': 52
        },
        {
            'sectionId': 2,
            'divisionId': 7,
            'groupId': 20,
            'classId': 48
        },
        {
            'sectionId': 2,
            'divisionId': 7,
            'groupId': 20,
            'classId': 47
        },
        {
            'sectionId': 2,
            'divisionId': 8,
            'groupId': 23,
            'classId': 54
        },
        {
            'sectionId': 2,
            'divisionId': 8,
            'groupId': 22,
            'classId': 53
        },
        {
            'sectionId': 3,
            'divisionId': 11,
            'groupId': 34,
            'classId': 87
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 66,
            'classId': 166
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 66,
            'classId': 167
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 65,
            'classId': 161
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 65,
            'classId': 162
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 65,
            'classId': 163
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 65,
            'classId': 164
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 65,
            'classId': 165
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 64,
            'classId': 159
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 64,
            'classId': 160
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 63,
            'classId': 158
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 62,
            'classId': 153
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 62,
            'classId': 154
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 62,
            'classId': 155
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 62,
            'classId': 156
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 62,
            'classId': 157
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 69,
            'classId': 176
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 69,
            'classId': 175
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 68,
            'classId': 174
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 67,
            'classId': 169
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 67,
            'classId': 170
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 67,
            'classId': 171
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 67,
            'classId': 172
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 67,
            'classId': 173
        },
        {
            'sectionId': 3,
            'divisionId': 22,
            'groupId': 67,
            'classId': 168
        },
        {
            'sectionId': 3,
            'divisionId': 12,
            'groupId': 37,
            'classId': 90
        },
        {
            'sectionId': 3,
            'divisionId': 12,
            'groupId': 36,
            'classId': 89
        },
        {
            'sectionId': 3,
            'divisionId': 12,
            'groupId': 35,
            'classId': 88
        },
        {
            'sectionId': 3,
            'divisionId': 12,
            'groupId': 38,
            'classId': 97
        },
        {
            'sectionId': 3,
            'divisionId': 12,
            'groupId': 38,
            'classId': 96
        },
        {
            'sectionId': 3,
            'divisionId': 12,
            'groupId': 38,
            'classId': 91
        },
        {
            'sectionId': 3,
            'divisionId': 12,
            'groupId': 38,
            'classId': 94
        },
        {
            'sectionId': 3,
            'divisionId': 12,
            'groupId': 38,
            'classId': 95
        },
        {
            'sectionId': 3,
            'divisionId': 12,
            'groupId': 38,
            'classId': 92
        },
        {
            'sectionId': 3,
            'divisionId': 12,
            'groupId': 38,
            'classId': 93
        },
        {
            'sectionId': 3,
            'divisionId': 23,
            'groupId': 73,
            'classId': 183
        },
        {
            'sectionId': 3,
            'divisionId': 23,
            'groupId': 73,
            'classId': 184
        },
        {
            'sectionId': 3,
            'divisionId': 23,
            'groupId': 73,
            'classId': 185
        },
        {
            'sectionId': 3,
            'divisionId': 23,
            'groupId': 73,
            'classId': 186
        },
        {
            'sectionId': 3,
            'divisionId': 23,
            'groupId': 73,
            'classId': 187
        },
        {
            'sectionId': 3,
            'divisionId': 23,
            'groupId': 73,
            'classId': 188
        },
        {
            'sectionId': 3,
            'divisionId': 23,
            'groupId': 72,
            'classId': 179
        },
        {
            'sectionId': 3,
            'divisionId': 23,
            'groupId': 72,
            'classId': 180
        },
        {
            'sectionId': 3,
            'divisionId': 23,
            'groupId': 72,
            'classId': 181
        },
        {
            'sectionId': 3,
            'divisionId': 23,
            'groupId': 72,
            'classId': 182
        },
        {
            'sectionId': 3,
            'divisionId': 23,
            'groupId': 71,
            'classId': 178
        },
        {
            'sectionId': 3,
            'divisionId': 23,
            'groupId': 70,
            'classId': 177
        },
        {
            'sectionId': 3,
            'divisionId': 23,
            'groupId': 74,
            'classId': 190
        },
        {
            'sectionId': 3,
            'divisionId': 23,
            'groupId': 74,
            'classId': 191
        },
        {
            'sectionId': 3,
            'divisionId': 23,
            'groupId': 74,
            'classId': 192
        },
        {
            'sectionId': 3,
            'divisionId': 23,
            'groupId': 74,
            'classId': 189
        },
        {
            'sectionId': 3,
            'divisionId': 13,
            'groupId': 41,
            'classId': 104
        },
        {
            'sectionId': 3,
            'divisionId': 13,
            'groupId': 41,
            'classId': 105
        },
        {
            'sectionId': 3,
            'divisionId': 13,
            'groupId': 40,
            'classId': 103
        },
        {
            'sectionId': 3,
            'divisionId': 13,
            'groupId': 39,
            'classId': 98
        },
        {
            'sectionId': 3,
            'divisionId': 13,
            'groupId': 39,
            'classId': 99
        },
        {
            'sectionId': 3,
            'divisionId': 13,
            'groupId': 39,
            'classId': 100
        },
        {
            'sectionId': 3,
            'divisionId': 13,
            'groupId': 39,
            'classId': 101
        },
        {
            'sectionId': 3,
            'divisionId': 13,
            'groupId': 39,
            'classId': 102
        },
        {
            'sectionId': 3,
            'divisionId': 24,
            'groupId': 77,
            'classId': 197
        },
        {
            'sectionId': 3,
            'divisionId': 24,
            'groupId': 76,
            'classId': 195
        },
        {
            'sectionId': 3,
            'divisionId': 24,
            'groupId': 76,
            'classId': 196
        },
        {
            'sectionId': 3,
            'divisionId': 24,
            'groupId': 75,
            'classId': 194
        },
        {
            'sectionId': 3,
            'divisionId': 24,
            'groupId': 75,
            'classId': 193
        },
        {
            'sectionId': 3,
            'divisionId': 24,
            'groupId': 82,
            'classId': 209
        },
        {
            'sectionId': 3,
            'divisionId': 24,
            'groupId': 82,
            'classId': 206
        },
        {
            'sectionId': 3,
            'divisionId': 24,
            'groupId': 82,
            'classId': 205
        },
        {
            'sectionId': 3,
            'divisionId': 24,
            'groupId': 82,
            'classId': 208
        },
        {
            'sectionId': 3,
            'divisionId': 24,
            'groupId': 82,
            'classId': 207
        },
        {
            'sectionId': 3,
            'divisionId': 24,
            'groupId': 81,
            'classId': 203
        },
        {
            'sectionId': 3,
            'divisionId': 24,
            'groupId': 81,
            'classId': 202
        },
        {
            'sectionId': 3,
            'divisionId': 24,
            'groupId': 81,
            'classId': 204
        },
        {
            'sectionId': 3,
            'divisionId': 24,
            'groupId': 80,
            'classId': 200
        },
        {
            'sectionId': 3,
            'divisionId': 24,
            'groupId': 80,
            'classId': 201
        },
        {
            'sectionId': 3,
            'divisionId': 24,
            'groupId': 79,
            'classId': 199
        },
        {
            'sectionId': 3,
            'divisionId': 24,
            'groupId': 78,
            'classId': 198
        },
        {
            'sectionId': 3,
            'divisionId': 14,
            'groupId': 43,
            'classId': 108
        },
        {
            'sectionId': 3,
            'divisionId': 14,
            'groupId': 42,
            'classId': 107
        },
        {
            'sectionId': 3,
            'divisionId': 14,
            'groupId': 42,
            'classId': 106
        },
        {
            'sectionId': 3,
            'divisionId': 25,
            'groupId': 84,
            'classId': 212
        },
        {
            'sectionId': 3,
            'divisionId': 25,
            'groupId': 83,
            'classId': 210
        },
        {
            'sectionId': 3,
            'divisionId': 25,
            'groupId': 83,
            'classId': 211
        },
        {
            'sectionId': 3,
            'divisionId': 25,
            'groupId': 90,
            'classId': 219
        },
        {
            'sectionId': 3,
            'divisionId': 25,
            'groupId': 89,
            'classId': 218
        },
        {
            'sectionId': 3,
            'divisionId': 25,
            'groupId': 88,
            'classId': 217
        },
        {
            'sectionId': 3,
            'divisionId': 25,
            'groupId': 87,
            'classId': 215
        },
        {
            'sectionId': 3,
            'divisionId': 25,
            'groupId': 87,
            'classId': 216
        },
        {
            'sectionId': 3,
            'divisionId': 25,
            'groupId': 86,
            'classId': 214
        },
        {
            'sectionId': 3,
            'divisionId': 25,
            'groupId': 85,
            'classId': 213
        },
        {
            'sectionId': 3,
            'divisionId': 15,
            'groupId': 44,
            'classId': 109
        },
        {
            'sectionId': 3,
            'divisionId': 15,
            'groupId': 45,
            'classId': 113
        },
        {
            'sectionId': 3,
            'divisionId': 15,
            'groupId': 45,
            'classId': 112
        },
        {
            'sectionId': 3,
            'divisionId': 15,
            'groupId': 45,
            'classId': 111
        },
        {
            'sectionId': 3,
            'divisionId': 15,
            'groupId': 45,
            'classId': 114
        },
        {
            'sectionId': 3,
            'divisionId': 15,
            'groupId': 45,
            'classId': 110
        },
        {
            'sectionId': 3,
            'divisionId': 26,
            'groupId': 91,
            'classId': 220
        },
        {
            'sectionId': 3,
            'divisionId': 26,
            'groupId': 91,
            'classId': 221
        },
        {
            'sectionId': 3,
            'divisionId': 26,
            'groupId': 96,
            'classId': 229
        },
        {
            'sectionId': 3,
            'divisionId': 26,
            'groupId': 95,
            'classId': 227
        },
        {
            'sectionId': 3,
            'divisionId': 26,
            'groupId': 95,
            'classId': 228
        },
        {
            'sectionId': 3,
            'divisionId': 26,
            'groupId': 94,
            'classId': 226
        },
        {
            'sectionId': 3,
            'divisionId': 26,
            'groupId': 93,
            'classId': 225
        },
        {
            'sectionId': 3,
            'divisionId': 26,
            'groupId': 93,
            'classId': 223
        },
        {
            'sectionId': 3,
            'divisionId': 26,
            'groupId': 93,
            'classId': 224
        },
        {
            'sectionId': 3,
            'divisionId': 26,
            'groupId': 92,
            'classId': 222
        },
        {
            'sectionId': 3,
            'divisionId': 16,
            'groupId': 47,
            'classId': 121
        },
        {
            'sectionId': 3,
            'divisionId': 16,
            'groupId': 47,
            'classId': 119
        },
        {
            'sectionId': 3,
            'divisionId': 16,
            'groupId': 47,
            'classId': 120
        },
        {
            'sectionId': 3,
            'divisionId': 16,
            'groupId': 47,
            'classId': 117
        },
        {
            'sectionId': 3,
            'divisionId': 16,
            'groupId': 47,
            'classId': 118
        },
        {
            'sectionId': 3,
            'divisionId': 16,
            'groupId': 46,
            'classId': 116
        },
        {
            'sectionId': 3,
            'divisionId': 16,
            'groupId': 46,
            'classId': 115
        },
        {
            'sectionId': 3,
            'divisionId': 27,
            'groupId': 101,
            'classId': 244
        },
        {
            'sectionId': 3,
            'divisionId': 27,
            'groupId': 101,
            'classId': 247
        },
        {
            'sectionId': 3,
            'divisionId': 27,
            'groupId': 101,
            'classId': 248
        },
        {
            'sectionId': 3,
            'divisionId': 27,
            'groupId': 101,
            'classId': 245
        },
        {
            'sectionId': 3,
            'divisionId': 27,
            'groupId': 101,
            'classId': 246
        },
        {
            'sectionId': 3,
            'divisionId': 27,
            'groupId': 101,
            'classId': 250
        },
        {
            'sectionId': 3,
            'divisionId': 27,
            'groupId': 101,
            'classId': 249
        },
        {
            'sectionId': 3,
            'divisionId': 27,
            'groupId': 100,
            'classId': 243
        },
        {
            'sectionId': 3,
            'divisionId': 27,
            'groupId': 100,
            'classId': 242
        },
        {
            'sectionId': 3,
            'divisionId': 27,
            'groupId': 99,
            'classId': 241
        },
        {
            'sectionId': 3,
            'divisionId': 27,
            'groupId': 98,
            'classId': 239
        },
        {
            'sectionId': 3,
            'divisionId': 27,
            'groupId': 98,
            'classId': 237
        },
        {
            'sectionId': 3,
            'divisionId': 27,
            'groupId': 98,
            'classId': 238
        },
        {
            'sectionId': 3,
            'divisionId': 27,
            'groupId': 98,
            'classId': 240
        },
        {
            'sectionId': 3,
            'divisionId': 27,
            'groupId': 98,
            'classId': 235
        },
        {
            'sectionId': 3,
            'divisionId': 27,
            'groupId': 98,
            'classId': 236
        },
        {
            'sectionId': 3,
            'divisionId': 27,
            'groupId': 97,
            'classId': 233
        },
        {
            'sectionId': 3,
            'divisionId': 27,
            'groupId': 97,
            'classId': 234
        },
        {
            'sectionId': 3,
            'divisionId': 27,
            'groupId': 97,
            'classId': 231
        },
        {
            'sectionId': 3,
            'divisionId': 27,
            'groupId': 97,
            'classId': 232
        },
        {
            'sectionId': 3,
            'divisionId': 27,
            'groupId': 97,
            'classId': 230
        },
        {
            'sectionId': 3,
            'divisionId': 28,
            'groupId': 104,
            'classId': 254
        },
        {
            'sectionId': 3,
            'divisionId': 28,
            'groupId': 104,
            'classId': 253
        },
        {
            'sectionId': 3,
            'divisionId': 28,
            'groupId': 103,
            'classId': 252
        },
        {
            'sectionId': 3,
            'divisionId': 28,
            'groupId': 102,
            'classId': 251
        },
        {
            'sectionId': 3,
            'divisionId': 17,
            'groupId': 49,
            'classId': 126
        },
        {
            'sectionId': 3,
            'divisionId': 17,
            'groupId': 48,
            'classId': 124
        },
        {
            'sectionId': 3,
            'divisionId': 17,
            'groupId': 48,
            'classId': 125
        },
        {
            'sectionId': 3,
            'divisionId': 17,
            'groupId': 48,
            'classId': 122
        },
        {
            'sectionId': 3,
            'divisionId': 17,
            'groupId': 48,
            'classId': 123
        },
        {
            'sectionId': 3,
            'divisionId': 18,
            'groupId': 51,
            'classId': 128
        },
        {
            'sectionId': 3,
            'divisionId': 18,
            'groupId': 50,
            'classId': 127
        },
        {
            'sectionId': 3,
            'divisionId': 29,
            'groupId': 109,
            'classId': 262
        },
        {
            'sectionId': 3,
            'divisionId': 29,
            'groupId': 109,
            'classId': 261
        },
        {
            'sectionId': 3,
            'divisionId': 29,
            'groupId': 109,
            'classId': 260
        },
        {
            'sectionId': 3,
            'divisionId': 29,
            'groupId': 108,
            'classId': 259
        },
        {
            'sectionId': 3,
            'divisionId': 29,
            'groupId': 107,
            'classId': 258
        },
        {
            'sectionId': 3,
            'divisionId': 29,
            'groupId': 106,
            'classId': 257
        },
        {
            'sectionId': 3,
            'divisionId': 29,
            'groupId': 105,
            'classId': 256
        },
        {
            'sectionId': 3,
            'divisionId': 29,
            'groupId': 105,
            'classId': 255
        },
        {
            'sectionId': 3,
            'divisionId': 19,
            'groupId': 57,
            'classId': 144
        },
        {
            'sectionId': 3,
            'divisionId': 19,
            'groupId': 56,
            'classId': 143
        },
        {
            'sectionId': 3,
            'divisionId': 19,
            'groupId': 56,
            'classId': 142
        },
        {
            'sectionId': 3,
            'divisionId': 19,
            'groupId': 56,
            'classId': 141
        },
        {
            'sectionId': 3,
            'divisionId': 19,
            'groupId': 56,
            'classId': 140
        },
        {
            'sectionId': 3,
            'divisionId': 19,
            'groupId': 55,
            'classId': 139
        },
        {
            'sectionId': 3,
            'divisionId': 19,
            'groupId': 55,
            'classId': 138
        },
        {
            'sectionId': 3,
            'divisionId': 19,
            'groupId': 54,
            'classId': 137
        },
        {
            'sectionId': 3,
            'divisionId': 19,
            'groupId': 53,
            'classId': 136
        },
        {
            'sectionId': 3,
            'divisionId': 19,
            'groupId': 52,
            'classId': 135
        },
        {
            'sectionId': 3,
            'divisionId': 19,
            'groupId': 52,
            'classId': 134
        },
        {
            'sectionId': 3,
            'divisionId': 19,
            'groupId': 52,
            'classId': 133
        },
        {
            'sectionId': 3,
            'divisionId': 19,
            'groupId': 52,
            'classId': 132
        },
        {
            'sectionId': 3,
            'divisionId': 19,
            'groupId': 52,
            'classId': 131
        },
        {
            'sectionId': 3,
            'divisionId': 19,
            'groupId': 52,
            'classId': 130
        },
        {
            'sectionId': 3,
            'divisionId': 19,
            'groupId': 52,
            'classId': 129
        },
        {
            'sectionId': 3,
            'divisionId': 30,
            'groupId': 110,
            'classId': 264
        },
        {
            'sectionId': 3,
            'divisionId': 30,
            'groupId': 110,
            'classId': 263
        },
        {
            'sectionId': 3,
            'divisionId': 30,
            'groupId': 110,
            'classId': 265
        },
        {
            'sectionId': 3,
            'divisionId': 30,
            'groupId': 110,
            'classId': 266
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 30,
            'classId': 69
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 30,
            'classId': 68
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 30,
            'classId': 70
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 29,
            'classId': 66
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 29,
            'classId': 67
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 28,
            'classId': 65
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 28,
            'classId': 64
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 27,
            'classId': 62
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 27,
            'classId': 63
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 26,
            'classId': 60
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 26,
            'classId': 59
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 26,
            'classId': 61
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 25,
            'classId': 58
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 24,
            'classId': 56
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 24,
            'classId': 55
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 24,
            'classId': 57
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 32,
            'classId': 79
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 32,
            'classId': 78
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 31,
            'classId': 73
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 31,
            'classId': 72
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 31,
            'classId': 75
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 31,
            'classId': 74
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 31,
            'classId': 76
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 31,
            'classId': 77
        },
        {
            'sectionId': 3,
            'divisionId': 9,
            'groupId': 31,
            'classId': 71
        },
        {
            'sectionId': 3,
            'divisionId': 20,
            'groupId': 59,
            'classId': 146
        },
        {
            'sectionId': 3,
            'divisionId': 20,
            'groupId': 58,
            'classId': 145
        },
        {
            'sectionId': 3,
            'divisionId': 31,
            'groupId': 115,
            'classId': 273
        },
        {
            'sectionId': 3,
            'divisionId': 31,
            'groupId': 114,
            'classId': 272
        },
        {
            'sectionId': 3,
            'divisionId': 31,
            'groupId': 113,
            'classId': 271
        },
        {
            'sectionId': 3,
            'divisionId': 31,
            'groupId': 112,
            'classId': 270
        },
        {
            'sectionId': 3,
            'divisionId': 31,
            'groupId': 111,
            'classId': 269
        },
        {
            'sectionId': 3,
            'divisionId': 31,
            'groupId': 111,
            'classId': 267
        },
        {
            'sectionId': 3,
            'divisionId': 31,
            'groupId': 111,
            'classId': 268
        },
        {
            'sectionId': 3,
            'divisionId': 31,
            'groupId': 116,
            'classId': 274
        },
        {
            'sectionId': 3,
            'divisionId': 31,
            'groupId': 116,
            'classId': 275
        },
        {
            'sectionId': 3,
            'divisionId': 10,
            'groupId': 33,
            'classId': 81
        },
        {
            'sectionId': 3,
            'divisionId': 10,
            'groupId': 33,
            'classId': 80
        },
        {
            'sectionId': 3,
            'divisionId': 10,
            'groupId': 33,
            'classId': 83
        },
        {
            'sectionId': 3,
            'divisionId': 10,
            'groupId': 33,
            'classId': 82
        },
        {
            'sectionId': 3,
            'divisionId': 10,
            'groupId': 33,
            'classId': 85
        },
        {
            'sectionId': 3,
            'divisionId': 10,
            'groupId': 33,
            'classId': 84
        },
        {
            'sectionId': 3,
            'divisionId': 10,
            'groupId': 33,
            'classId': 86
        },
        {
            'sectionId': 3,
            'divisionId': 21,
            'groupId': 61,
            'classId': 149
        },
        {
            'sectionId': 3,
            'divisionId': 21,
            'groupId': 61,
            'classId': 150
        },
        {
            'sectionId': 3,
            'divisionId': 21,
            'groupId': 61,
            'classId': 151
        },
        {
            'sectionId': 3,
            'divisionId': 21,
            'groupId': 61,
            'classId': 152
        },
        {
            'sectionId': 3,
            'divisionId': 21,
            'groupId': 60,
            'classId': 147
        },
        {
            'sectionId': 3,
            'divisionId': 21,
            'groupId': 60,
            'classId': 148
        },
        {
            'sectionId': 3,
            'divisionId': 32,
            'groupId': 118,
            'classId': 284
        },
        {
            'sectionId': 3,
            'divisionId': 32,
            'groupId': 117,
            'classId': 283
        },
        {
            'sectionId': 3,
            'divisionId': 32,
            'groupId': 117,
            'classId': 281
        },
        {
            'sectionId': 3,
            'divisionId': 32,
            'groupId': 117,
            'classId': 282
        },
        {
            'sectionId': 3,
            'divisionId': 32,
            'groupId': 117,
            'classId': 279
        },
        {
            'sectionId': 3,
            'divisionId': 32,
            'groupId': 117,
            'classId': 280
        },
        {
            'sectionId': 3,
            'divisionId': 32,
            'groupId': 117,
            'classId': 277
        },
        {
            'sectionId': 3,
            'divisionId': 32,
            'groupId': 117,
            'classId': 278
        },
        {
            'sectionId': 3,
            'divisionId': 32,
            'groupId': 117,
            'classId': 276
        },
        {
            'sectionId': 4,
            'divisionId': 33,
            'groupId': 121,
            'classId': 292
        },
        {
            'sectionId': 4,
            'divisionId': 33,
            'groupId': 120,
            'classId': 291
        },
        {
            'sectionId': 4,
            'divisionId': 33,
            'groupId': 120,
            'classId': 290
        },
        {
            'sectionId': 4,
            'divisionId': 33,
            'groupId': 120,
            'classId': 289
        },
        {
            'sectionId': 4,
            'divisionId': 33,
            'groupId': 119,
            'classId': 288
        },
        {
            'sectionId': 4,
            'divisionId': 33,
            'groupId': 119,
            'classId': 287
        },
        {
            'sectionId': 4,
            'divisionId': 33,
            'groupId': 119,
            'classId': 286
        },
        {
            'sectionId': 4,
            'divisionId': 33,
            'groupId': 119,
            'classId': 285
        },
        {
            'sectionId': 5,
            'divisionId': 34,
            'groupId': 122,
            'classId': 293
        },
        {
            'sectionId': 5,
            'divisionId': 35,
            'groupId': 123,
            'classId': 294
        },
        {
            'sectionId': 5,
            'divisionId': 36,
            'groupId': 125,
            'classId': 298
        },
        {
            'sectionId': 5,
            'divisionId': 36,
            'groupId': 125,
            'classId': 297
        },
        {
            'sectionId': 5,
            'divisionId': 36,
            'groupId': 126,
            'classId': 299
        },
        {
            'sectionId': 5,
            'divisionId': 36,
            'groupId': 126,
            'classId': 300
        },
        {
            'sectionId': 5,
            'divisionId': 36,
            'groupId': 124,
            'classId': 295
        },
        {
            'sectionId': 5,
            'divisionId': 36,
            'groupId': 124,
            'classId': 296
        },
        {
            'sectionId': 5,
            'divisionId': 37,
            'groupId': 127,
            'classId': 301
        },
        {
            'sectionId': 6,
            'divisionId': 38,
            'groupId': 128,
            'classId': 302
        },
        {
            'sectionId': 6,
            'divisionId': 38,
            'groupId': 129,
            'classId': 303
        },
        {
            'sectionId': 6,
            'divisionId': 39,
            'groupId': 132,
            'classId': 309
        },
        {
            'sectionId': 6,
            'divisionId': 39,
            'groupId': 132,
            'classId': 310
        },
        {
            'sectionId': 6,
            'divisionId': 39,
            'groupId': 130,
            'classId': 305
        },
        {
            'sectionId': 6,
            'divisionId': 39,
            'groupId': 130,
            'classId': 306
        },
        {
            'sectionId': 6,
            'divisionId': 39,
            'groupId': 130,
            'classId': 304
        },
        {
            'sectionId': 6,
            'divisionId': 39,
            'groupId': 131,
            'classId': 307
        },
        {
            'sectionId': 6,
            'divisionId': 39,
            'groupId': 131,
            'classId': 308
        },
        {
            'sectionId': 6,
            'divisionId': 40,
            'groupId': 136,
            'classId': 322
        },
        {
            'sectionId': 6,
            'divisionId': 40,
            'groupId': 136,
            'classId': 323
        },
        {
            'sectionId': 6,
            'divisionId': 40,
            'groupId': 133,
            'classId': 313
        },
        {
            'sectionId': 6,
            'divisionId': 40,
            'groupId': 133,
            'classId': 311
        },
        {
            'sectionId': 6,
            'divisionId': 40,
            'groupId': 133,
            'classId': 312
        },
        {
            'sectionId': 6,
            'divisionId': 40,
            'groupId': 134,
            'classId': 316
        },
        {
            'sectionId': 6,
            'divisionId': 40,
            'groupId': 134,
            'classId': 314
        },
        {
            'sectionId': 6,
            'divisionId': 40,
            'groupId': 134,
            'classId': 315
        },
        {
            'sectionId': 6,
            'divisionId': 40,
            'groupId': 135,
            'classId': 321
        },
        {
            'sectionId': 6,
            'divisionId': 40,
            'groupId': 135,
            'classId': 317
        },
        {
            'sectionId': 6,
            'divisionId': 40,
            'groupId': 135,
            'classId': 318
        },
        {
            'sectionId': 6,
            'divisionId': 40,
            'groupId': 135,
            'classId': 319
        },
        {
            'sectionId': 6,
            'divisionId': 40,
            'groupId': 135,
            'classId': 320
        },
        {
            'sectionId': 7,
            'divisionId': 41,
            'groupId': 137,
            'classId': 325
        },
        {
            'sectionId': 7,
            'divisionId': 41,
            'groupId': 137,
            'classId': 324
        },
        {
            'sectionId': 7,
            'divisionId': 41,
            'groupId': 138,
            'classId': 326
        },
        {
            'sectionId': 7,
            'divisionId': 41,
            'groupId': 139,
            'classId': 328
        },
        {
            'sectionId': 7,
            'divisionId': 41,
            'groupId': 139,
            'classId': 327
        },
        {
            'sectionId': 7,
            'divisionId': 41,
            'groupId': 140,
            'classId': 329
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 145,
            'classId': 361
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 145,
            'classId': 362
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 146,
            'classId': 363
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 146,
            'classId': 364
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 146,
            'classId': 369
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 146,
            'classId': 367
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 146,
            'classId': 368
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 146,
            'classId': 365
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 146,
            'classId': 366
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 147,
            'classId': 371
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 147,
            'classId': 372
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 147,
            'classId': 370
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 147,
            'classId': 375
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 147,
            'classId': 376
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 147,
            'classId': 373
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 147,
            'classId': 374
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 148,
            'classId': 377
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 141,
            'classId': 337
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 141,
            'classId': 338
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 141,
            'classId': 335
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 141,
            'classId': 336
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 141,
            'classId': 333
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 141,
            'classId': 334
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 141,
            'classId': 331
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 141,
            'classId': 332
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 141,
            'classId': 330
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 142,
            'classId': 341
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 142,
            'classId': 342
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 142,
            'classId': 339
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 142,
            'classId': 340
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 143,
            'classId': 350
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 143,
            'classId': 351
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 143,
            'classId': 348
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 143,
            'classId': 349
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 143,
            'classId': 346
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 143,
            'classId': 347
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 143,
            'classId': 344
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 143,
            'classId': 345
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 143,
            'classId': 343
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 144,
            'classId': 360
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 144,
            'classId': 358
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 144,
            'classId': 359
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 144,
            'classId': 356
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 144,
            'classId': 357
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 144,
            'classId': 354
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 144,
            'classId': 355
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 144,
            'classId': 352
        },
        {
            'sectionId': 7,
            'divisionId': 42,
            'groupId': 144,
            'classId': 353
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 152,
            'classId': 388
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 152,
            'classId': 389
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 152,
            'classId': 390
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 153,
            'classId': 391
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 153,
            'classId': 392
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 153,
            'classId': 395
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 153,
            'classId': 393
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 153,
            'classId': 394
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 154,
            'classId': 397
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 154,
            'classId': 398
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 154,
            'classId': 396
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 154,
            'classId': 399
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 154,
            'classId': 400
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 155,
            'classId': 403
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 155,
            'classId': 404
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 155,
            'classId': 401
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 155,
            'classId': 402
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 155,
            'classId': 409
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 155,
            'classId': 407
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 155,
            'classId': 408
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 155,
            'classId': 405
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 155,
            'classId': 406
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 156,
            'classId': 411
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 156,
            'classId': 410
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 156,
            'classId': 412
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 157,
            'classId': 413
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 157,
            'classId': 414
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 149,
            'classId': 379
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 149,
            'classId': 378
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 150,
            'classId': 386
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 150,
            'classId': 385
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 150,
            'classId': 383
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 150,
            'classId': 384
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 150,
            'classId': 381
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 150,
            'classId': 382
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 150,
            'classId': 380
        },
        {
            'sectionId': 7,
            'divisionId': 43,
            'groupId': 151,
            'classId': 387
        },
        {
            'sectionId': 8,
            'divisionId': 44,
            'groupId': 159,
            'classId': 416
        },
        {
            'sectionId': 8,
            'divisionId': 44,
            'groupId': 160,
            'classId': 418
        },
        {
            'sectionId': 8,
            'divisionId': 44,
            'groupId': 160,
            'classId': 417
        },
        {
            'sectionId': 8,
            'divisionId': 44,
            'groupId': 160,
            'classId': 419
        },
        {
            'sectionId': 8,
            'divisionId': 44,
            'groupId': 161,
            'classId': 421
        },
        {
            'sectionId': 8,
            'divisionId': 44,
            'groupId': 161,
            'classId': 420
        },
        {
            'sectionId': 8,
            'divisionId': 44,
            'groupId': 162,
            'classId': 422
        },
        {
            'sectionId': 8,
            'divisionId': 44,
            'groupId': 158,
            'classId': 415
        },
        {
            'sectionId': 8,
            'divisionId': 45,
            'groupId': 163,
            'classId': 423
        },
        {
            'sectionId': 8,
            'divisionId': 45,
            'groupId': 164,
            'classId': 424
        },
        {
            'sectionId': 8,
            'divisionId': 45,
            'groupId': 165,
            'classId': 425
        },
        {
            'sectionId': 8,
            'divisionId': 45,
            'groupId': 166,
            'classId': 426
        },
        {
            'sectionId': 8,
            'divisionId': 46,
            'groupId': 167,
            'classId': 427
        },
        {
            'sectionId': 8,
            'divisionId': 46,
            'groupId': 168,
            'classId': 429
        },
        {
            'sectionId': 8,
            'divisionId': 46,
            'groupId': 168,
            'classId': 428
        },
        {
            'sectionId': 8,
            'divisionId': 47,
            'groupId': 169,
            'classId': 430
        },
        {
            'sectionId': 8,
            'divisionId': 47,
            'groupId': 170,
            'classId': 434
        },
        {
            'sectionId': 8,
            'divisionId': 47,
            'groupId': 170,
            'classId': 432
        },
        {
            'sectionId': 8,
            'divisionId': 47,
            'groupId': 170,
            'classId': 433
        },
        {
            'sectionId': 8,
            'divisionId': 47,
            'groupId': 170,
            'classId': 435
        },
        {
            'sectionId': 8,
            'divisionId': 47,
            'groupId': 170,
            'classId': 431
        },
        {
            'sectionId': 8,
            'divisionId': 48,
            'groupId': 171,
            'classId': 436
        },
        {
            'sectionId': 8,
            'divisionId': 48,
            'groupId': 172,
            'classId': 437
        },
        {
            'sectionId': 9,
            'divisionId': 50,
            'groupId': 177,
            'classId': 442
        },
        {
            'sectionId': 9,
            'divisionId': 50,
            'groupId': 178,
            'classId': 444
        },
        {
            'sectionId': 9,
            'divisionId': 50,
            'groupId': 178,
            'classId': 443
        },
        {
            'sectionId': 9,
            'divisionId': 50,
            'groupId': 179,
            'classId': 445
        },
        {
            'sectionId': 9,
            'divisionId': 49,
            'groupId': 176,
            'classId': 441
        },
        {
            'sectionId': 9,
            'divisionId': 49,
            'groupId': 173,
            'classId': 438
        },
        {
            'sectionId': 9,
            'divisionId': 49,
            'groupId': 174,
            'classId': 439
        },
        {
            'sectionId': 9,
            'divisionId': 49,
            'groupId': 175,
            'classId': 440
        },
        {
            'sectionId': 10,
            'divisionId': 51,
            'groupId': 180,
            'classId': 450
        },
        {
            'sectionId': 10,
            'divisionId': 51,
            'groupId': 180,
            'classId': 449
        },
        {
            'sectionId': 10,
            'divisionId': 51,
            'groupId': 180,
            'classId': 448
        },
        {
            'sectionId': 10,
            'divisionId': 51,
            'groupId': 180,
            'classId': 447
        },
        {
            'sectionId': 10,
            'divisionId': 51,
            'groupId': 180,
            'classId': 446
        },
        {
            'sectionId': 10,
            'divisionId': 51,
            'groupId': 181,
            'classId': 452
        },
        {
            'sectionId': 10,
            'divisionId': 51,
            'groupId': 181,
            'classId': 451
        },
        {
            'sectionId': 10,
            'divisionId': 52,
            'groupId': 182,
            'classId': 456
        },
        {
            'sectionId': 10,
            'divisionId': 52,
            'groupId': 182,
            'classId': 453
        },
        {
            'sectionId': 10,
            'divisionId': 52,
            'groupId': 182,
            'classId': 455
        },
        {
            'sectionId': 10,
            'divisionId': 52,
            'groupId': 182,
            'classId': 454
        },
        {
            'sectionId': 10,
            'divisionId': 52,
            'groupId': 183,
            'classId': 457
        },
        {
            'sectionId': 10,
            'divisionId': 53,
            'groupId': 185,
            'classId': 459
        },
        {
            'sectionId': 10,
            'divisionId': 53,
            'groupId': 184,
            'classId': 458
        },
        {
            'sectionId': 10,
            'divisionId': 54,
            'groupId': 186,
            'classId': 460
        },
        {
            'sectionId': 10,
            'divisionId': 54,
            'groupId': 188,
            'classId': 462
        },
        {
            'sectionId': 10,
            'divisionId': 54,
            'groupId': 187,
            'classId': 461
        },
        {
            'sectionId': 10,
            'divisionId': 54,
            'groupId': 189,
            'classId': 463
        },
        {
            'sectionId': 10,
            'divisionId': 55,
            'groupId': 190,
            'classId': 464
        },
        {
            'sectionId': 10,
            'divisionId': 55,
            'groupId': 190,
            'classId': 465
        },
        {
            'sectionId': 10,
            'divisionId': 55,
            'groupId': 190,
            'classId': 466
        },
        {
            'sectionId': 10,
            'divisionId': 55,
            'groupId': 190,
            'classId': 467
        },
        {
            'sectionId': 10,
            'divisionId': 56,
            'groupId': 191,
            'classId': 468
        },
        {
            'sectionId': 10,
            'divisionId': 56,
            'groupId': 191,
            'classId': 469
        },
        {
            'sectionId': 10,
            'divisionId': 56,
            'groupId': 192,
            'classId': 471
        },
        {
            'sectionId': 10,
            'divisionId': 56,
            'groupId': 192,
            'classId': 470
        },
        {
            'sectionId': 11,
            'divisionId': 57,
            'groupId': 196,
            'classId': 476
        },
        {
            'sectionId': 11,
            'divisionId': 57,
            'groupId': 196,
            'classId': 477
        },
        {
            'sectionId': 11,
            'divisionId': 57,
            'groupId': 196,
            'classId': 478
        },
        {
            'sectionId': 11,
            'divisionId': 57,
            'groupId': 194,
            'classId': 474
        },
        {
            'sectionId': 11,
            'divisionId': 57,
            'groupId': 193,
            'classId': 473
        },
        {
            'sectionId': 11,
            'divisionId': 57,
            'groupId': 193,
            'classId': 472
        },
        {
            'sectionId': 11,
            'divisionId': 57,
            'groupId': 195,
            'classId': 475
        },
        {
            'sectionId': 11,
            'divisionId': 58,
            'groupId': 197,
            'classId': 480
        },
        {
            'sectionId': 11,
            'divisionId': 58,
            'groupId': 197,
            'classId': 479
        },
        {
            'sectionId': 11,
            'divisionId': 58,
            'groupId': 199,
            'classId': 482
        },
        {
            'sectionId': 11,
            'divisionId': 58,
            'groupId': 198,
            'classId': 481
        },
        {
            'sectionId': 11,
            'divisionId': 59,
            'groupId': 201,
            'classId': 488
        },
        {
            'sectionId': 11,
            'divisionId': 59,
            'groupId': 201,
            'classId': 486
        },
        {
            'sectionId': 11,
            'divisionId': 59,
            'groupId': 201,
            'classId': 487
        },
        {
            'sectionId': 11,
            'divisionId': 59,
            'groupId': 200,
            'classId': 485
        },
        {
            'sectionId': 11,
            'divisionId': 59,
            'groupId': 200,
            'classId': 484
        },
        {
            'sectionId': 11,
            'divisionId': 59,
            'groupId': 200,
            'classId': 483
        },
        {
            'sectionId': 11,
            'divisionId': 59,
            'groupId': 202,
            'classId': 489
        },
        {
            'sectionId': 12,
            'divisionId': 60,
            'groupId': 204,
            'classId': 491
        },
        {
            'sectionId': 12,
            'divisionId': 60,
            'groupId': 203,
            'classId': 490
        },
        {
            'sectionId': 12,
            'divisionId': 60,
            'groupId': 205,
            'classId': 493
        },
        {
            'sectionId': 12,
            'divisionId': 60,
            'groupId': 205,
            'classId': 492
        },
        {
            'sectionId': 13,
            'divisionId': 61,
            'groupId': 206,
            'classId': 494
        },
        {
            'sectionId': 13,
            'divisionId': 61,
            'groupId': 207,
            'classId': 495
        },
        {
            'sectionId': 13,
            'divisionId': 62,
            'groupId': 208,
            'classId': 496
        },
        {
            'sectionId': 13,
            'divisionId': 62,
            'groupId': 209,
            'classId': 498
        },
        {
            'sectionId': 13,
            'divisionId': 62,
            'groupId': 209,
            'classId': 497
        },
        {
            'sectionId': 13,
            'divisionId': 63,
            'groupId': 211,
            'classId': 501
        },
        {
            'sectionId': 13,
            'divisionId': 63,
            'groupId': 210,
            'classId': 500
        },
        {
            'sectionId': 13,
            'divisionId': 63,
            'groupId': 210,
            'classId': 499
        },
        {
            'sectionId': 13,
            'divisionId': 64,
            'groupId': 212,
            'classId': 503
        },
        {
            'sectionId': 13,
            'divisionId': 64,
            'groupId': 212,
            'classId': 502
        },
        {
            'sectionId': 13,
            'divisionId': 64,
            'groupId': 213,
            'classId': 504
        },
        {
            'sectionId': 13,
            'divisionId': 65,
            'groupId': 215,
            'classId': 507
        },
        {
            'sectionId': 13,
            'divisionId': 65,
            'groupId': 214,
            'classId': 506
        },
        {
            'sectionId': 13,
            'divisionId': 65,
            'groupId': 214,
            'classId': 505
        },
        {
            'sectionId': 13,
            'divisionId': 66,
            'groupId': 216,
            'classId': 508
        },
        {
            'sectionId': 13,
            'divisionId': 66,
            'groupId': 218,
            'classId': 510
        },
        {
            'sectionId': 13,
            'divisionId': 66,
            'groupId': 217,
            'classId': 509
        },
        {
            'sectionId': 13,
            'divisionId': 66,
            'groupId': 219,
            'classId': 511
        },
        {
            'sectionId': 13,
            'divisionId': 67,
            'groupId': 220,
            'classId': 512
        },
        {
            'sectionId': 14,
            'divisionId': 69,
            'groupId': 225,
            'classId': 525
        },
        {
            'sectionId': 14,
            'divisionId': 69,
            'groupId': 227,
            'classId': 527
        },
        {
            'sectionId': 14,
            'divisionId': 69,
            'groupId': 226,
            'classId': 526
        },
        {
            'sectionId': 14,
            'divisionId': 70,
            'groupId': 229,
            'classId': 530
        },
        {
            'sectionId': 14,
            'divisionId': 70,
            'groupId': 228,
            'classId': 528
        },
        {
            'sectionId': 14,
            'divisionId': 70,
            'groupId': 228,
            'classId': 529
        },
        {
            'sectionId': 14,
            'divisionId': 71,
            'groupId': 230,
            'classId': 531
        },
        {
            'sectionId': 14,
            'divisionId': 71,
            'groupId': 231,
            'classId': 532
        },
        {
            'sectionId': 14,
            'divisionId': 71,
            'groupId': 232,
            'classId': 533
        },
        {
            'sectionId': 14,
            'divisionId': 72,
            'groupId': 233,
            'classId': 534
        },
        {
            'sectionId': 14,
            'divisionId': 72,
            'groupId': 234,
            'classId': 537
        },
        {
            'sectionId': 14,
            'divisionId': 72,
            'groupId': 234,
            'classId': 536
        },
        {
            'sectionId': 14,
            'divisionId': 72,
            'groupId': 234,
            'classId': 535
        },
        {
            'sectionId': 14,
            'divisionId': 72,
            'groupId': 235,
            'classId': 538
        },
        {
            'sectionId': 14,
            'divisionId': 73,
            'groupId': 238,
            'classId': 542
        },
        {
            'sectionId': 14,
            'divisionId': 73,
            'groupId': 236,
            'classId': 540
        },
        {
            'sectionId': 14,
            'divisionId': 73,
            'groupId': 236,
            'classId': 539
        },
        {
            'sectionId': 14,
            'divisionId': 73,
            'groupId': 237,
            'classId': 541
        },
        {
            'sectionId': 14,
            'divisionId': 73,
            'groupId': 239,
            'classId': 544
        },
        {
            'sectionId': 14,
            'divisionId': 73,
            'groupId': 239,
            'classId': 543
        },
        {
            'sectionId': 14,
            'divisionId': 73,
            'groupId': 239,
            'classId': 545
        },
        {
            'sectionId': 14,
            'divisionId': 68,
            'groupId': 222,
            'classId': 517
        },
        {
            'sectionId': 14,
            'divisionId': 68,
            'groupId': 222,
            'classId': 515
        },
        {
            'sectionId': 14,
            'divisionId': 68,
            'groupId': 222,
            'classId': 516
        },
        {
            'sectionId': 14,
            'divisionId': 68,
            'groupId': 221,
            'classId': 513
        },
        {
            'sectionId': 14,
            'divisionId': 68,
            'groupId': 221,
            'classId': 514
        },
        {
            'sectionId': 14,
            'divisionId': 68,
            'groupId': 224,
            'classId': 524
        },
        {
            'sectionId': 14,
            'divisionId': 68,
            'groupId': 223,
            'classId': 523
        },
        {
            'sectionId': 14,
            'divisionId': 68,
            'groupId': 223,
            'classId': 518
        },
        {
            'sectionId': 14,
            'divisionId': 68,
            'groupId': 223,
            'classId': 519
        },
        {
            'sectionId': 14,
            'divisionId': 68,
            'groupId': 223,
            'classId': 520
        },
        {
            'sectionId': 14,
            'divisionId': 68,
            'groupId': 223,
            'classId': 521
        },
        {
            'sectionId': 14,
            'divisionId': 68,
            'groupId': 223,
            'classId': 522
        },
        {
            'sectionId': 15,
            'divisionId': 74,
            'groupId': 240,
            'classId': 546
        },
        {
            'sectionId': 15,
            'divisionId': 74,
            'groupId': 240,
            'classId': 548
        },
        {
            'sectionId': 15,
            'divisionId': 74,
            'groupId': 240,
            'classId': 547
        },
        {
            'sectionId': 15,
            'divisionId': 74,
            'groupId': 241,
            'classId': 553
        },
        {
            'sectionId': 15,
            'divisionId': 74,
            'groupId': 241,
            'classId': 550
        },
        {
            'sectionId': 15,
            'divisionId': 74,
            'groupId': 241,
            'classId': 549
        },
        {
            'sectionId': 15,
            'divisionId': 74,
            'groupId': 241,
            'classId': 552
        },
        {
            'sectionId': 15,
            'divisionId': 74,
            'groupId': 241,
            'classId': 551
        },
        {
            'sectionId': 15,
            'divisionId': 74,
            'groupId': 242,
            'classId': 554
        },
        {
            'sectionId': 16,
            'divisionId': 75,
            'groupId': 243,
            'classId': 555
        },
        {
            'sectionId': 16,
            'divisionId': 75,
            'groupId': 246,
            'classId': 559
        },
        {
            'sectionId': 16,
            'divisionId': 75,
            'groupId': 246,
            'classId': 560
        },
        {
            'sectionId': 16,
            'divisionId': 75,
            'groupId': 247,
            'classId': 562
        },
        {
            'sectionId': 16,
            'divisionId': 75,
            'groupId': 247,
            'classId': 561
        },
        {
            'sectionId': 16,
            'divisionId': 75,
            'groupId': 247,
            'classId': 563
        },
        {
            'sectionId': 16,
            'divisionId': 75,
            'groupId': 247,
            'classId': 564
        },
        {
            'sectionId': 16,
            'divisionId': 75,
            'groupId': 244,
            'classId': 556
        },
        {
            'sectionId': 16,
            'divisionId': 75,
            'groupId': 245,
            'classId': 558
        },
        {
            'sectionId': 16,
            'divisionId': 75,
            'groupId': 245,
            'classId': 557
        },
        {
            'sectionId': 16,
            'divisionId': 75,
            'groupId': 248,
            'classId': 565
        },
        {
            'sectionId': 17,
            'divisionId': 76,
            'groupId': 251,
            'classId': 570
        },
        {
            'sectionId': 17,
            'divisionId': 76,
            'groupId': 249,
            'classId': 566
        },
        {
            'sectionId': 17,
            'divisionId': 76,
            'groupId': 250,
            'classId': 567
        },
        {
            'sectionId': 17,
            'divisionId': 76,
            'groupId': 250,
            'classId': 568
        },
        {
            'sectionId': 17,
            'divisionId': 76,
            'groupId': 250,
            'classId': 569
        },
        {
            'sectionId': 17,
            'divisionId': 77,
            'groupId': 255,
            'classId': 574
        },
        {
            'sectionId': 17,
            'divisionId': 77,
            'groupId': 253,
            'classId': 572
        },
        {
            'sectionId': 17,
            'divisionId': 77,
            'groupId': 254,
            'classId': 573
        },
        {
            'sectionId': 17,
            'divisionId': 77,
            'groupId': 252,
            'classId': 571
        },
        {
            'sectionId': 17,
            'divisionId': 78,
            'groupId': 257,
            'classId': 577
        },
        {
            'sectionId': 17,
            'divisionId': 78,
            'groupId': 257,
            'classId': 576
        },
        {
            'sectionId': 17,
            'divisionId': 78,
            'groupId': 256,
            'classId': 575
        },
        {
            'sectionId': 18,
            'divisionId': 79,
            'groupId': 258,
            'classId': 580
        },
        {
            'sectionId': 18,
            'divisionId': 79,
            'groupId': 258,
            'classId': 579
        },
        {
            'sectionId': 18,
            'divisionId': 79,
            'groupId': 258,
            'classId': 581
        },
        {
            'sectionId': 18,
            'divisionId': 79,
            'groupId': 258,
            'classId': 578
        },
        {
            'sectionId': 18,
            'divisionId': 80,
            'groupId': 259,
            'classId': 584
        },
        {
            'sectionId': 18,
            'divisionId': 80,
            'groupId': 259,
            'classId': 585
        },
        {
            'sectionId': 18,
            'divisionId': 80,
            'groupId': 259,
            'classId': 582
        },
        {
            'sectionId': 18,
            'divisionId': 80,
            'groupId': 259,
            'classId': 583
        },
        {
            'sectionId': 18,
            'divisionId': 81,
            'groupId': 260,
            'classId': 586
        },
        {
            'sectionId': 18,
            'divisionId': 82,
            'groupId': 261,
            'classId': 590
        },
        {
            'sectionId': 18,
            'divisionId': 82,
            'groupId': 261,
            'classId': 587
        },
        {
            'sectionId': 18,
            'divisionId': 82,
            'groupId': 261,
            'classId': 589
        },
        {
            'sectionId': 18,
            'divisionId': 82,
            'groupId': 261,
            'classId': 588
        },
        {
            'sectionId': 18,
            'divisionId': 82,
            'groupId': 262,
            'classId': 592
        },
        {
            'sectionId': 18,
            'divisionId': 82,
            'groupId': 262,
            'classId': 591
        },
        {
            'sectionId': 19,
            'divisionId': 83,
            'groupId': 264,
            'classId': 595
        },
        {
            'sectionId': 19,
            'divisionId': 83,
            'groupId': 263,
            'classId': 594
        },
        {
            'sectionId': 19,
            'divisionId': 83,
            'groupId': 263,
            'classId': 593
        },
        {
            'sectionId': 19,
            'divisionId': 83,
            'groupId': 265,
            'classId': 597
        },
        {
            'sectionId': 19,
            'divisionId': 83,
            'groupId': 265,
            'classId': 596
        },
        {
            'sectionId': 19,
            'divisionId': 83,
            'groupId': 265,
            'classId': 598
        },
        {
            'sectionId': 19,
            'divisionId': 84,
            'groupId': 266,
            'classId': 599
        },
        {
            'sectionId': 19,
            'divisionId': 84,
            'groupId': 266,
            'classId': 600
        },
        {
            'sectionId': 19,
            'divisionId': 84,
            'groupId': 267,
            'classId': 606
        },
        {
            'sectionId': 19,
            'divisionId': 84,
            'groupId': 267,
            'classId': 605
        },
        {
            'sectionId': 19,
            'divisionId': 84,
            'groupId': 267,
            'classId': 601
        },
        {
            'sectionId': 19,
            'divisionId': 84,
            'groupId': 267,
            'classId': 602
        },
        {
            'sectionId': 19,
            'divisionId': 84,
            'groupId': 267,
            'classId': 603
        },
        {
            'sectionId': 19,
            'divisionId': 84,
            'groupId': 267,
            'classId': 604
        },
        {
            'sectionId': 19,
            'divisionId': 85,
            'groupId': 268,
            'classId': 611
        },
        {
            'sectionId': 19,
            'divisionId': 85,
            'groupId': 268,
            'classId': 610
        },
        {
            'sectionId': 19,
            'divisionId': 85,
            'groupId': 268,
            'classId': 607
        },
        {
            'sectionId': 19,
            'divisionId': 85,
            'groupId': 268,
            'classId': 608
        },
        {
            'sectionId': 19,
            'divisionId': 85,
            'groupId': 268,
            'classId': 609
        },
        {
            'sectionId': 20,
            'divisionId': 86,
            'groupId': 269,
            'classId': 612
        },
        {
            'sectionId': 20,
            'divisionId': 87,
            'groupId': 271,
            'classId': 614
        },
        {
            'sectionId': 20,
            'divisionId': 87,
            'groupId': 270,
            'classId': 613
        },
        {
            'sectionId': 21,
            'divisionId': 88,
            'groupId': 272,
            'classId': 615
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
