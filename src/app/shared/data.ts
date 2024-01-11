import { Employee, Group } from './type';

export const employees: Employee[] = [
  {
    id: '222663',
    username: 'evadavis',
    firstName: 'Eva',
    lastName: 'Davis',
    email: 'eva.davis@example.com',
    birthDate: new Date('1979-12-31T17:00:00.000Z'),
    basicSalary: 32226.16376331538,
    status: 'Active',
    group: 'Development',
    description: 'Description for user 0',
  },
  {
    id: '34435',
    username: 'alicebrown',
    firstName: 'Alice',
    lastName: 'Brown',
    email: 'alice.brown@example.com',
    birthDate: new Date('1980-12-31T17:00:00.000Z'),
    basicSalary: 34768.47296189411,
    status: 'Inactive',
    group: 'QA',
    description: 'Description for user 1',
  },
  {
    id: '964110',
    username: 'davidmoore',
    firstName: 'David',
    lastName: 'Moore',
    email: 'david.moore@example.com',
    birthDate: new Date('1981-12-31T17:00:00.000Z'),
    basicSalary: 38301.717974155385,
    status: 'Active',
    group: 'QA',
    description: 'Description for user 2',
  },
  {
    id: '369043',
    username: 'davidsmith',
    firstName: 'David',
    lastName: 'Smith',
    email: 'david.smith@example.com',
    birthDate: new Date('1982-12-31T17:00:00.000Z'),
    basicSalary: 36347.14355497295,
    status: 'Inactive',
    group: 'Development',
    description: 'Description for user 3',
  },
  {
    id: '973854',
    username: 'jackbrown',
    firstName: 'Jack',
    lastName: 'Brown',
    email: 'jack.brown@example.com',
    birthDate: new Date('1983-12-31T17:00:00.000Z'),
    basicSalary: 37957.62689953406,
    status: 'Active',
    group: 'QA',
    description: 'Description for user 4',
  },
  {
    id: '835208',
    username: 'bobmiller',
    firstName: 'Bob',
    lastName: 'Miller',
    email: 'bob.miller@example.com',
    birthDate: new Date('1984-12-31T17:00:00.000Z'),
    basicSalary: 38160.204449281264,
    status: 'Inactive',
    group: 'QA',
    description: 'Description for user 5',
  },
  {
    id: '659139',
    username: 'henryjohnson',
    firstName: 'Henry',
    lastName: 'Johnson',
    email: 'henry.johnson@example.com',
    birthDate: new Date('1985-12-31T17:00:00.000Z'),
    basicSalary: 30001.62673055422,
    status: 'Active',
    group: 'Development',
    description: 'Description for user 6',
  },
  {
    id: '565251',
    username: 'ivymoore',
    firstName: 'Ivy',
    lastName: 'Moore',
    email: 'ivy.moore@example.com',
    birthDate: new Date('1986-12-31T17:00:00.000Z'),
    basicSalary: 31235.771486082955,
    status: 'Inactive',
    group: 'QA',
    description: 'Description for user 7',
  },
  {
    id: '350794',
    username: 'jacktaylor',
    firstName: 'Jack',
    lastName: 'Taylor',
    email: 'jack.taylor@example.com',
    birthDate: new Date('1987-12-31T17:00:00.000Z'),
    basicSalary: 31362.15039715977,
    status: 'Active',
    group: 'QA',
    description: 'Description for user 8',
  },
  {
    id: '406888',
    username: 'gracewilson',
    firstName: 'Grace',
    lastName: 'Wilson',
    email: 'grace.wilson@example.com',
    birthDate: new Date('1988-12-31T17:00:00.000Z'),
    basicSalary: 32463.759861900522,
    status: 'Inactive',
    group: 'Development',
    description: 'Description for user 9',
  },
  {
    id: '129942',
    username: 'bobmiller',
    firstName: 'Bob',
    lastName: 'Miller',
    email: 'bob.miller@example.com',
    birthDate: new Date('1989-12-31T17:00:00.000Z'),
    basicSalary: 31265.733996613693,
    status: 'Active',
    group: 'QA',
    description: 'Description for user 10',
  },
  {
    id: '212281',
    username: 'daviddavis',
    firstName: 'David',
    lastName: 'Davis',
    email: 'david.davis@example.com',
    birthDate: new Date('1990-12-31T17:00:00.000Z'),
    basicSalary: 35780.43485363124,
    status: 'Inactive',
    group: 'QA',
    description: 'Description for user 11',
  },
  {
    id: '794952',
    username: 'bobbrown',
    firstName: 'Bob',
    lastName: 'Brown',
    email: 'bob.brown@example.com',
    birthDate: new Date('1991-12-31T17:00:00.000Z'),
    basicSalary: 35649.85535783828,
    status: 'Active',
    group: 'Development',
    description: 'Description for user 12',
  },
  {
    id: '33308',
    username: 'franktaylor',
    firstName: 'Frank',
    lastName: 'Taylor',
    email: 'frank.taylor@example.com',
    birthDate: new Date('1992-12-31T17:00:00.000Z'),
    basicSalary: 36047.37101694029,
    status: 'Inactive',
    group: 'QA',
    description: 'Description for user 13',
  },
  {
    id: '483633',
    username: 'davidjohnson',
    firstName: 'David',
    lastName: 'Johnson',
    email: 'david.johnson@example.com',
    birthDate: new Date('1993-12-31T17:00:00.000Z'),
    basicSalary: 39290.344161252804,
    status: 'Active',
    group: 'QA',
    description: 'Description for user 14',
  },
  {
    id: '881443',
    username: 'frankbrown',
    firstName: 'Frank',
    lastName: 'Brown',
    email: 'frank.brown@example.com',
    birthDate: new Date('1994-12-31T17:00:00.000Z'),
    basicSalary: 39335.197348819514,
    status: 'Inactive',
    group: 'Development',
    description: 'Description for user 15',
  },
  {
    id: '271690',
    username: 'gracewilson',
    firstName: 'Grace',
    lastName: 'Wilson',
    email: 'grace.wilson@example.com',
    birthDate: new Date('1995-12-31T17:00:00.000Z'),
    basicSalary: 33465.56284307528,
    status: 'Active',
    group: 'Network Infrastructure',
    description: 'Description for user 16',
  },
  {
    id: '682596',
    username: 'ivywilson',
    firstName: 'Ivy',
    lastName: 'Wilson',
    email: 'ivy.wilson@example.com',
    birthDate: new Date('1996-12-31T17:00:00.000Z'),
    basicSalary: 39019.57571907771,
    status: 'Inactive',
    group: 'Network Infrastructure',
    description: 'Description for user 17',
  },
  {
    id: '435059',
    username: 'frankmoore',
    firstName: 'Frank',
    lastName: 'Moore',
    email: 'frank.moore@example.com',
    birthDate: new Date('1997-12-31T17:00:00.000Z'),
    basicSalary: 37302.82667676959,
    status: 'Active',
    group: 'Development',
    description: 'Description for user 18',
  },
  {
    id: '84073',
    username: 'bobjones',
    firstName: 'Bob',
    lastName: 'Jones',
    email: 'bob.jones@example.com',
    birthDate: new Date('1998-12-31T17:00:00.000Z'),
    basicSalary: 36690.167067255694,
    status: 'Inactive',
    group: 'Network Infrastructure',
    description: 'Description for user 19',
  },
  {
    id: '910095',
    username: 'gracemoore',
    firstName: 'Grace',
    lastName: 'Moore',
    email: 'grace.moore@example.com',
    birthDate: new Date('1999-12-31T17:00:00.000Z'),
    basicSalary: 34328.37878303628,
    status: 'Active',
    group: 'Network Infrastructure',
    description: 'Description for user 20',
  },
  {
    id: '948917',
    username: 'bobsmith',
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bob.smith@example.com',
    birthDate: new Date('2000-12-31T17:00:00.000Z'),
    basicSalary: 39797.52315077672,
    status: 'Inactive',
    group: 'Development',
    description: 'Description for user 21',
  },
  {
    id: '934096',
    username: 'gracemoore',
    firstName: 'Grace',
    lastName: 'Moore',
    email: 'grace.moore@example.com',
    birthDate: new Date('2001-12-31T17:00:00.000Z'),
    basicSalary: 31882.258701101808,
    status: 'Active',
    group: 'Network Infrastructure',
    description: 'Description for user 22',
  },
  {
    id: '545319',
    username: 'henrymoore',
    firstName: 'Henry',
    lastName: 'Moore',
    email: 'henry.moore@example.com',
    birthDate: new Date('2002-12-31T17:00:00.000Z'),
    basicSalary: 34182.49750542193,
    status: 'Inactive',
    group: 'Network Infrastructure',
    description: 'Description for user 23',
  },
  {
    id: '688684',
    username: 'alicemoore',
    firstName: 'Alice',
    lastName: 'Moore',
    email: 'alice.moore@example.com',
    birthDate: new Date('2003-12-31T17:00:00.000Z'),
    basicSalary: 33352.51238173462,
    status: 'Active',
    group: 'Development',
    description: 'Description for user 24',
  },
  {
    id: '935325',
    username: 'charliemoore',
    firstName: 'Charlie',
    lastName: 'Moore',
    email: 'charlie.moore@example.com',
    birthDate: new Date('2004-12-31T17:00:00.000Z'),
    basicSalary: 38314.484250688605,
    status: 'Inactive',
    group: 'Network Infrastructure',
    description: 'Description for user 25',
  },
  {
    id: '85486',
    username: 'alicesmith',
    firstName: 'Alice',
    lastName: 'Smith',
    email: 'alice.smith@example.com',
    birthDate: new Date('2005-12-31T17:00:00.000Z'),
    basicSalary: 34979.22596875239,
    status: 'Active',
    group: 'Network Infrastructure',
    description: 'Description for user 26',
  },
  {
    id: '177953',
    username: 'davidsmith',
    firstName: 'David',
    lastName: 'Smith',
    email: 'david.smith@example.com',
    birthDate: new Date('2006-12-31T17:00:00.000Z'),
    basicSalary: 33348.72781412411,
    status: 'Inactive',
    group: 'Development',
    description: 'Description for user 27',
  },
  {
    id: '906705',
    username: 'davidmoore',
    firstName: 'David',
    lastName: 'Moore',
    email: 'david.moore@example.com',
    birthDate: new Date('2007-12-31T17:00:00.000Z'),
    basicSalary: 36824.473868603665,
    status: 'Active',
    group: 'Network Infrastructure',
    description: 'Description for user 28',
  },
  {
    id: '917402',
    username: 'alicewilliams',
    firstName: 'Alice',
    lastName: 'Williams',
    email: 'alice.williams@example.com',
    birthDate: new Date('2008-12-31T17:00:00.000Z'),
    basicSalary: 32561.722910081884,
    status: 'Inactive',
    group: 'Network Infrastructure',
    description: 'Description for user 29',
  },
  {
    id: '517426',
    username: 'gracedavis',
    firstName: 'Grace',
    lastName: 'Davis',
    email: 'grace.davis@example.com',
    birthDate: new Date('2009-12-31T17:00:00.000Z'),
    basicSalary: 31973.125030388903,
    status: 'Active',
    group: 'IT Support',
    description: 'Description for user 30',
  },
  {
    id: '418984',
    username: 'jackwilliams',
    firstName: 'Jack',
    lastName: 'Williams',
    email: 'jack.williams@example.com',
    birthDate: new Date('2010-12-31T17:00:00.000Z'),
    basicSalary: 31574.670193803177,
    status: 'Inactive',
    group: 'Network Infrastructure',
    description: 'Description for user 31',
  },
  {
    id: '910787',
    username: 'gracesmith',
    firstName: 'Grace',
    lastName: 'Smith',
    email: 'grace.smith@example.com',
    birthDate: new Date('2011-12-31T17:00:00.000Z'),
    basicSalary: 31649.1875414892,
    status: 'Active',
    group: 'Database Management',
    description: 'Description for user 32',
  },
  {
    id: '850721',
    username: 'charlietaylor',
    firstName: 'Charlie',
    lastName: 'Taylor',
    email: 'charlie.taylor@example.com',
    birthDate: new Date('2012-12-31T17:00:00.000Z'),
    basicSalary: 35648.393312297,
    status: 'Inactive',
    group: 'IT Support',
    description: 'Description for user 33',
  },
  {
    id: '5512',
    username: 'ivywilson',
    firstName: 'Ivy',
    lastName: 'Wilson',
    email: 'ivy.wilson@example.com',
    birthDate: new Date('2013-12-31T17:00:00.000Z'),
    basicSalary: 38934.903354720496,
    status: 'Active',
    group: 'Database Management',
    description: 'Description for user 34',
  },
  {
    id: '635069',
    username: 'jackwilson',
    firstName: 'Jack',
    lastName: 'Wilson',
    email: 'jack.wilson@example.com',
    birthDate: new Date('2014-12-31T17:00:00.000Z'),
    basicSalary: 35425.04300818389,
    status: 'Inactive',
    group: 'Database Management',
    description: 'Description for user 35',
  },
  {
    id: '133337',
    username: 'charliemoore',
    firstName: 'Charlie',
    lastName: 'Moore',
    email: 'charlie.moore@example.com',
    birthDate: new Date('2015-12-31T17:00:00.000Z'),
    basicSalary: 37681.05294199238,
    status: 'Active',
    group: 'IT Support',
    description: 'Description for user 36',
  },
  {
    id: '440618',
    username: 'ivytaylor',
    firstName: 'Ivy',
    lastName: 'Taylor',
    email: 'ivy.taylor@example.com',
    birthDate: new Date('2016-12-31T17:00:00.000Z'),
    basicSalary: 37766.75982119053,
    status: 'Inactive',
    group: 'Database Management',
    description: 'Description for user 37',
  },
  {
    id: '679029',
    username: 'henrytaylor',
    firstName: 'Henry',
    lastName: 'Taylor',
    email: 'henry.taylor@example.com',
    birthDate: new Date('2017-12-31T17:00:00.000Z'),
    basicSalary: 34990.9569989008,
    status: 'Active',
    group: 'Database Management',
    description: 'Description for user 38',
  },
  {
    id: '143880',
    username: 'alicewilson',
    firstName: 'Alice',
    lastName: 'Wilson',
    email: 'alice.wilson@example.com',
    birthDate: new Date('2018-12-31T17:00:00.000Z'),
    basicSalary: 39159.84872275502,
    status: 'Inactive',
    group: 'IT Support',
    description: 'Description for user 39',
  },
  {
    id: '324303',
    username: 'jackmoore',
    firstName: 'Jack',
    lastName: 'Moore',
    email: 'jack.moore@example.com',
    birthDate: new Date('2019-12-31T17:00:00.000Z'),
    basicSalary: 35977.840504334425,
    status: 'Active',
    group: 'Database Management',
    description: 'Description for user 40',
  },
  {
    id: '814430',
    username: 'gracemiller',
    firstName: 'Grace',
    lastName: 'Miller',
    email: 'grace.miller@example.com',
    birthDate: new Date('2020-12-31T17:00:00.000Z'),
    basicSalary: 35165.44814684466,
    status: 'Inactive',
    group: 'Database Management',
    description: 'Description for user 41',
  },
  {
    id: '394833',
    username: 'frankwilliams',
    firstName: 'Frank',
    lastName: 'Williams',
    email: 'frank.williams@example.com',
    birthDate: new Date('2021-12-31T17:00:00.000Z'),
    basicSalary: 32461.240760953624,
    status: 'Active',
    group: 'IT Support',
    description: 'Description for user 42',
  },
  {
    id: '28923',
    username: 'davidmiller',
    firstName: 'David',
    lastName: 'Miller',
    email: 'david.miller@example.com',
    birthDate: new Date('2022-12-31T17:00:00.000Z'),
    basicSalary: 34788.009896032665,
    status: 'Inactive',
    group: 'Database Management',
    description: 'Description for user 43',
  },
  {
    id: '100827',
    username: 'charliejones',
    firstName: 'Charlie',
    lastName: 'Jones',
    email: 'charlie.jones@example.com',
    birthDate: new Date('2023-12-31T17:00:00.000Z'),
    basicSalary: 39388.035232535614,
    status: 'Active',
    group: 'Database Management',
    description: 'Description for user 44',
  },
  {
    id: '43291',
    username: 'charliewilliams',
    firstName: 'Charlie',
    lastName: 'Williams',
    email: 'charlie.williams@example.com',
    birthDate: new Date('2024-12-31T17:00:00.000Z'),
    basicSalary: 31484.96998083099,
    status: 'Inactive',
    group: 'IT Support',
    description: 'Description for user 45',
  },
  {
    id: '483940',
    username: 'henrytaylor',
    firstName: 'Henry',
    lastName: 'Taylor',
    email: 'henry.taylor@example.com',
    birthDate: new Date('2025-12-31T17:00:00.000Z'),
    basicSalary: 32964.144650917624,
    status: 'Active',
    group: 'Database Management',
    description: 'Description for user 46',
  },
  {
    id: '311136',
    username: 'jackwilson',
    firstName: 'Jack',
    lastName: 'Wilson',
    email: 'jack.wilson@example.com',
    birthDate: new Date('2026-12-31T17:00:00.000Z'),
    basicSalary: 30104.711042339248,
    status: 'Inactive',
    group: 'Database Management',
    description: 'Description for user 47',
  },
  {
    id: '8684',
    username: 'gracewilson',
    firstName: 'Grace',
    lastName: 'Wilson',
    email: 'grace.wilson@example.com',
    birthDate: new Date('2027-12-31T17:00:00.000Z'),
    basicSalary: 34266.753032973385,
    status: 'Active',
    group: 'IT Support',
    description: 'Description for user 48',
  },
  {
    id: '697436',
    username: 'evabrown',
    firstName: 'Eva',
    lastName: 'Brown',
    email: 'eva.brown@example.com',
    birthDate: new Date('2028-12-31T17:00:00.000Z'),
    basicSalary: 32807.410367329736,
    status: 'Inactive',
    group: 'Project Management',
    description: 'Description for user 49',
  },
  {
    id: '514239',
    username: 'evajones',
    firstName: 'Eva',
    lastName: 'Jones',
    email: 'eva.jones@example.com',
    birthDate: new Date('2029-12-31T17:00:00.000Z'),
    basicSalary: 32569.62850449794,
    status: 'Active',
    group: 'Project Management',
    description: 'Description for user 50',
  },
  {
    id: '4694',
    username: 'charliemiller',
    firstName: 'Charlie',
    lastName: 'Miller',
    email: 'charlie.miller@example.com',
    birthDate: new Date('2030-12-31T17:00:00.000Z'),
    basicSalary: 32676.470189341366,
    status: 'Inactive',
    group: 'IT Support',
    description: 'Description for user 51',
  },
  {
    id: '803621',
    username: 'davidjones',
    firstName: 'David',
    lastName: 'Jones',
    email: 'david.jones@example.com',
    birthDate: new Date('2031-12-31T17:00:00.000Z'),
    basicSalary: 35045.4081217818,
    status: 'Active',
    group: 'Project Management',
    description: 'Description for user 52',
  },
  {
    id: '47839',
    username: 'ivysmith',
    firstName: 'Ivy',
    lastName: 'Smith',
    email: 'ivy.smith@example.com',
    birthDate: new Date('2032-12-31T17:00:00.000Z'),
    basicSalary: 37387.99538666035,
    status: 'Inactive',
    group: 'Project Management',
    description: 'Description for user 53',
  },
  {
    id: '8695',
    username: 'frankjohnson',
    firstName: 'Frank',
    lastName: 'Johnson',
    email: 'frank.johnson@example.com',
    birthDate: new Date('2033-12-31T17:00:00.000Z'),
    basicSalary: 39598.46593536356,
    status: 'Active',
    group: 'IT Support',
    description: 'Description for user 54',
  },
  {
    id: '69034',
    username: 'ivywilson',
    firstName: 'Ivy',
    lastName: 'Wilson',
    email: 'ivy.wilson@example.com',
    birthDate: new Date('2034-12-31T17:00:00.000Z'),
    basicSalary: 32374.486438875145,
    status: 'Inactive',
    group: 'Project Management',
    description: 'Description for user 55',
  },
  {
    id: '558667',
    username: 'bobdavis',
    firstName: 'Bob',
    lastName: 'Davis',
    email: 'bob.davis@example.com',
    birthDate: new Date('2035-12-31T17:00:00.000Z'),
    basicSalary: 30608.32383347238,
    status: 'Active',
    group: 'Project Management',
    description: 'Description for user 56',
  },
  {
    id: '89921',
    username: 'ivywilliams',
    firstName: 'Ivy',
    lastName: 'Williams',
    email: 'ivy.williams@example.com',
    birthDate: new Date('2036-12-31T17:00:00.000Z'),
    basicSalary: 31775.767196645196,
    status: 'Inactive',
    group: 'IT Support',
    description: 'Description for user 57',
  },
  {
    id: '34573',
    username: 'bobdavis',
    firstName: 'Bob',
    lastName: 'Davis',
    email: 'bob.davis@example.com',
    birthDate: new Date('2037-12-31T17:00:00.000Z'),
    basicSalary: 39853.83685821053,
    status: 'Active',
    group: 'Project Management',
    description: 'Description for user 58',
  },
  {
    id: '651528',
    username: 'henryjones',
    firstName: 'Henry',
    lastName: 'Jones',
    email: 'henry.jones@example.com',
    birthDate: new Date('2038-12-31T17:00:00.000Z'),
    basicSalary: 38252.17614663798,
    status: 'Inactive',
    group: 'Project Management',
    description: 'Description for user 59',
  },
  {
    id: '266215',
    username: 'alicetaylor',
    firstName: 'Alice',
    lastName: 'Taylor',
    email: 'alice.taylor@example.com',
    birthDate: new Date('2039-12-31T17:00:00.000Z'),
    basicSalary: 34177.24702824767,
    status: 'Active',
    group: 'Technical Writing',
    description: 'Description for user 60',
  },
  {
    id: '639533',
    username: 'henrywilson',
    firstName: 'Henry',
    lastName: 'Wilson',
    email: 'henry.wilson@example.com',
    birthDate: new Date('2040-12-31T17:00:00.000Z'),
    basicSalary: 39883.40486539061,
    status: 'Inactive',
    group: 'Project Management',
    description: 'Description for user 61',
  },
  {
    id: '110848',
    username: 'charliejones',
    firstName: 'Charlie',
    lastName: 'Jones',
    email: 'charlie.jones@example.com',
    birthDate: new Date('2041-12-31T17:00:00.000Z'),
    basicSalary: 31975.79919899808,
    status: 'Active',
    group: 'Project Management',
    description: 'Description for user 62',
  },
  {
    id: '728917',
    username: 'evadavis',
    firstName: 'Eva',
    lastName: 'Davis',
    email: 'eva.davis@example.com',
    birthDate: new Date('2042-12-31T17:00:00.000Z'),
    basicSalary: 38435.64617621633,
    status: 'Inactive',
    group: 'Technical Writing',
    description: 'Description for user 63',
  },
  {
    id: '52277',
    username: 'ivysmith',
    firstName: 'Ivy',
    lastName: 'Smith',
    email: 'ivy.smith@example.com',
    birthDate: new Date('2043-12-31T17:00:00.000Z'),
    basicSalary: 32320.04549289922,
    status: 'Active',
    group: 'Security',
    description: 'Description for user 64',
  },
  {
    id: '941784',
    username: 'evawilson',
    firstName: 'Eva',
    lastName: 'Wilson',
    email: 'eva.wilson@example.com',
    birthDate: new Date('2044-12-31T17:00:00.000Z'),
    basicSalary: 39151.675537946125,
    status: 'Inactive',
    group: 'Security',
    description: 'Description for user 65',
  },
  {
    id: '857416',
    username: 'ivywilliams',
    firstName: 'Ivy',
    lastName: 'Williams',
    email: 'ivy.williams@example.com',
    birthDate: new Date('2045-12-31T17:00:00.000Z'),
    basicSalary: 35898.89343603893,
    status: 'Active',
    group: 'Technical Writing',
    description: 'Description for user 66',
  },
  {
    id: '158828',
    username: 'alicewilson',
    firstName: 'Alice',
    lastName: 'Wilson',
    email: 'alice.wilson@example.com',
    birthDate: new Date('2046-12-31T17:00:00.000Z'),
    basicSalary: 37921.65655974984,
    status: 'Inactive',
    group: 'Security',
    description: 'Description for user 67',
  },
  {
    id: '666509',
    username: 'henrybrown',
    firstName: 'Henry',
    lastName: 'Brown',
    email: 'henry.brown@example.com',
    birthDate: new Date('2047-12-31T17:00:00.000Z'),
    basicSalary: 37654.212848850766,
    status: 'Active',
    group: 'Security',
    description: 'Description for user 68',
  },
  {
    id: '480667',
    username: 'alicemoore',
    firstName: 'Alice',
    lastName: 'Moore',
    email: 'alice.moore@example.com',
    birthDate: new Date('2048-12-31T17:00:00.000Z'),
    basicSalary: 30720.384755505376,
    status: 'Inactive',
    group: 'Technical Writing',
    description: 'Description for user 69',
  },
  {
    id: '301569',
    username: 'alicetaylor',
    firstName: 'Alice',
    lastName: 'Taylor',
    email: 'alice.taylor@example.com',
    birthDate: new Date('2049-12-31T17:00:00.000Z'),
    basicSalary: 36791.63107783355,
    status: 'Active',
    group: 'Security',
    description: 'Description for user 70',
  },
  {
    id: '876227',
    username: 'gracemiller',
    firstName: 'Grace',
    lastName: 'Miller',
    email: 'grace.miller@example.com',
    birthDate: new Date('2050-12-31T17:00:00.000Z'),
    basicSalary: 38660.164604492915,
    status: 'Inactive',
    group: 'Security',
    description: 'Description for user 71',
  },
  {
    id: '710801',
    username: 'charliebrown',
    firstName: 'Charlie',
    lastName: 'Brown',
    email: 'charlie.brown@example.com',
    birthDate: new Date('2051-12-31T17:00:00.000Z'),
    basicSalary: 36766.267299903855,
    status: 'Active',
    group: 'Technical Writing',
    description: 'Description for user 72',
  },
  {
    id: '543074',
    username: 'alicewilson',
    firstName: 'Alice',
    lastName: 'Wilson',
    email: 'alice.wilson@example.com',
    birthDate: new Date('2052-12-31T17:00:00.000Z'),
    basicSalary: 36297.041085669916,
    status: 'Inactive',
    group: 'Security',
    description: 'Description for user 73',
  },
  {
    id: '514042',
    username: 'ivysmith',
    firstName: 'Ivy',
    lastName: 'Smith',
    email: 'ivy.smith@example.com',
    birthDate: new Date('2053-12-31T17:00:00.000Z'),
    basicSalary: 34698.03450226139,
    status: 'Active',
    group: 'Security',
    description: 'Description for user 74',
  },
  {
    id: '531445',
    username: 'henryjones',
    firstName: 'Henry',
    lastName: 'Jones',
    email: 'henry.jones@example.com',
    birthDate: new Date('2054-12-31T17:00:00.000Z'),
    basicSalary: 38325.032019913706,
    status: 'Inactive',
    group: 'Technical Writing',
    description: 'Description for user 75',
  },
  {
    id: '591453',
    username: 'bobdavis',
    firstName: 'Bob',
    lastName: 'Davis',
    email: 'bob.davis@example.com',
    birthDate: new Date('2055-12-31T17:00:00.000Z'),
    basicSalary: 35351.113758983185,
    status: 'Active',
    group: 'Security',
    description: 'Description for user 76',
  },
  {
    id: '730638',
    username: 'henrywilliams',
    firstName: 'Henry',
    lastName: 'Williams',
    email: 'henry.williams@example.com',
    birthDate: new Date('2056-12-31T17:00:00.000Z'),
    basicSalary: 35375.468075050376,
    status: 'Inactive',
    group: 'Security',
    description: 'Description for user 77',
  },
  {
    id: '44647',
    username: 'charliewilliams',
    firstName: 'Charlie',
    lastName: 'Williams',
    email: 'charlie.williams@example.com',
    birthDate: new Date('2057-12-31T17:00:00.000Z'),
    basicSalary: 31395.40923607436,
    status: 'Active',
    group: 'Technical Writing',
    description: 'Description for user 78',
  },
  {
    id: '603690',
    username: 'alicejones',
    firstName: 'Alice',
    lastName: 'Jones',
    email: 'alice.jones@example.com',
    birthDate: new Date('2058-12-31T17:00:00.000Z'),
    basicSalary: 32270.904293213465,
    status: 'Inactive',
    group: 'User Experience (UX)',
    description: 'Description for user 79',
  },
  {
    id: '572696',
    username: 'daviddavis',
    firstName: 'David',
    lastName: 'Davis',
    email: 'david.davis@example.com',
    birthDate: new Date('2059-12-31T17:00:00.000Z'),
    basicSalary: 37616.10251882734,
    status: 'Active',
    group: 'User Experience (UX)',
    description: 'Description for user 80',
  },
  {
    id: '802434',
    username: 'bobsmith',
    firstName: 'Bob',
    lastName: 'Smith',
    email: 'bob.smith@example.com',
    birthDate: new Date('2060-12-31T17:00:00.000Z'),
    basicSalary: 32576.281502112757,
    status: 'Inactive',
    group: 'Technical Writing',
    description: 'Description for user 81',
  },
  {
    id: '736808',
    username: 'charliemoore',
    firstName: 'Charlie',
    lastName: 'Moore',
    email: 'charlie.moore@example.com',
    birthDate: new Date('2061-12-31T17:00:00.000Z'),
    basicSalary: 35928.15493526323,
    status: 'Active',
    group: 'User Experience (UX)',
    description: 'Description for user 82',
  },
  {
    id: '312',
    username: 'gracejones',
    firstName: 'Grace',
    lastName: 'Jones',
    email: 'grace.jones@example.com',
    birthDate: new Date('2062-12-31T17:00:00.000Z'),
    basicSalary: 33473.27600382047,
    status: 'Inactive',
    group: 'User Experience (UX)',
    description: 'Description for user 83',
  },
  {
    id: '800972',
    username: 'evawilliams',
    firstName: 'Eva',
    lastName: 'Williams',
    email: 'eva.williams@example.com',
    birthDate: new Date('2063-12-31T17:00:00.000Z'),
    basicSalary: 33004.85220358315,
    status: 'Active',
    group: 'Technical Writing',
    description: 'Description for user 84',
  },
  {
    id: '263604',
    username: 'ivysmith',
    firstName: 'Ivy',
    lastName: 'Smith',
    email: 'ivy.smith@example.com',
    birthDate: new Date('2064-12-31T17:00:00.000Z'),
    basicSalary: 37169.43021446821,
    status: 'Inactive',
    group: 'User Experience (UX)',
    description: 'Description for user 85',
  },
  {
    id: '514685',
    username: 'frankwilliams',
    firstName: 'Frank',
    lastName: 'Williams',
    email: 'frank.williams@example.com',
    birthDate: new Date('2065-12-31T17:00:00.000Z'),
    basicSalary: 33183.62107766199,
    status: 'Active',
    group: 'User Experience (UX)',
    description: 'Description for user 86',
  },
  {
    id: '274086',
    username: 'jackjones',
    firstName: 'Jack',
    lastName: 'Jones',
    email: 'jack.jones@example.com',
    birthDate: new Date('2066-12-31T17:00:00.000Z'),
    basicSalary: 39845.32346382171,
    status: 'Inactive',
    group: 'Technical Writing',
    description: 'Description for user 87',
  },
  {
    id: '591439',
    username: 'evadavis',
    firstName: 'Eva',
    lastName: 'Davis',
    email: 'eva.davis@example.com',
    birthDate: new Date('2067-12-31T17:00:00.000Z'),
    basicSalary: 33470.28404735357,
    status: 'Active',
    group: 'User Experience (UX)',
    description: 'Description for user 88',
  },
  {
    id: '900565',
    username: 'jackmiller',
    firstName: 'Jack',
    lastName: 'Miller',
    email: 'jack.miller@example.com',
    birthDate: new Date('2068-12-31T17:00:00.000Z'),
    basicSalary: 36654.78336352571,
    status: 'Inactive',
    group: 'User Experience (UX)',
    description: 'Description for user 89',
  },
  {
    id: '65254',
    username: 'evasmith',
    firstName: 'Eva',
    lastName: 'Smith',
    email: 'eva.smith@example.com',
    birthDate: new Date('2069-12-31T17:00:00.000Z'),
    basicSalary: 38008.48465593834,
    status: 'Active',
    group: 'Technical Writing',
    description: 'Description for user 90',
  },
  {
    id: '137517',
    username: 'frankbrown',
    firstName: 'Frank',
    lastName: 'Brown',
    email: 'frank.brown@example.com',
    birthDate: new Date('2070-12-31T17:00:00.000Z'),
    basicSalary: 36985.187513592406,
    status: 'Inactive',
    group: 'User Experience (UX)',
    description: 'Description for user 91',
  },
  {
    id: '648839',
    username: 'alicewilliams',
    firstName: 'Alice',
    lastName: 'Williams',
    email: 'alice.williams@example.com',
    birthDate: new Date('2071-12-31T17:00:00.000Z'),
    basicSalary: 33564.939254798956,
    status: 'Active',
    group: 'User Experience (UX)',
    description: 'Description for user 92',
  },
  {
    id: '133348',
    username: 'davidmiller',
    firstName: 'David',
    lastName: 'Miller',
    email: 'david.miller@example.com',
    birthDate: new Date('2072-12-31T17:00:00.000Z'),
    basicSalary: 36878.602550273885,
    status: 'Inactive',
    group: 'Security',
    description: 'Description for user 93',
  },
  {
    id: '496758',
    username: 'ivymiller',
    firstName: 'Ivy',
    lastName: 'Miller',
    email: 'ivy.miller@example.com',
    birthDate: new Date('2073-12-31T17:00:00.000Z'),
    basicSalary: 34104.81538866706,
    status: 'Active',
    group: 'User Experience (UX)',
    description: 'Description for user 94',
  },
  {
    id: '276976',
    username: 'jackbrown',
    firstName: 'Jack',
    lastName: 'Brown',
    email: 'jack.brown@example.com',
    birthDate: new Date('2074-12-31T17:00:00.000Z'),
    basicSalary: 36779.27210390325,
    status: 'Inactive',
    group: 'User Experience (UX)',
    description: 'Description for user 95',
  },
  {
    id: '473963',
    username: 'frankjones',
    firstName: 'Frank',
    lastName: 'Jones',
    email: 'frank.jones@example.com',
    birthDate: new Date('2075-12-31T17:00:00.000Z'),
    basicSalary: 33104.924369984656,
    status: 'Active',
    group: 'Security',
    description: 'Description for user 96',
  },
  {
    id: '532580',
    username: 'jackdavis',
    firstName: 'Jack',
    lastName: 'Davis',
    email: 'jack.davis@example.com',
    birthDate: new Date('2076-12-31T17:00:00.000Z'),
    basicSalary: 39076.068252851735,
    status: 'Inactive',
    group: 'User Experience (UX)',
    description: 'Description for user 97',
  },
  {
    id: '830774',
    username: 'charliejones',
    firstName: 'Charlie',
    lastName: 'Jones',
    email: 'charlie.jones@example.com',
    birthDate: new Date('2077-12-31T17:00:00.000Z'),
    basicSalary: 33535.978502722675,
    status: 'Active',
    group: 'User Experience (UX)',
    description: 'Description for user 98',
  },
  {
    id: '932600',
    username: 'alicejohnson',
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    birthDate: new Date('2078-12-31T17:00:00.000Z'),
    basicSalary: 35865.05818739078,
    status: 'Inactive',
    group: 'Security',
    description: 'Description for user 99',
  },
];

export const groups: Group[] = [
  {
    id: 1,
    name: 'Development',
    code: 'DEV',
    description: 'Software Development Department',
  },
  {
    id: 2,
    name: 'QA',
    code: 'QA',
    description: 'Quality Assurance Department',
  },
  {
    id: 3,
    name: 'IT Support',
    code: 'ITS',
    description: 'IT Support Department',
  },
  {
    id: 4,
    name: 'Network Infrastructure',
    code: 'NET',
    description: 'Network Infrastructure Department',
  },
  { id: 5, name: 'Security', code: 'SEC', description: 'Security Department' },
  {
    id: 6,
    name: 'Database Management',
    code: 'DBM',
    description: 'Database Management Department',
  },
  {
    id: 7,
    name: 'Project Management',
    code: 'PRJ',
    description: 'Project Management Department',
  },
  {
    id: 8,
    name: 'Research and Development',
    code: 'R&D',
    description: 'Research and Development Department',
  },
  {
    id: 9,
    name: 'Technical Writing',
    code: 'TW',
    description: 'Technical Writing Department',
  },
  {
    id: 10,
    name: 'User Experience (UX)',
    code: 'UX',
    description: 'User Experience (UX) Department',
  },
];
