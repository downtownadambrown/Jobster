const db = require('../models');

// Syncing our sequelize models 
// =============================================================
db.sequelize.sync({ force: true }).then(function () {
  db.Applicant.bulkCreate([{

    firstName: 'pamela',
    lastName: 'anderson',
    email: 'pam@gmail.com',
    phone: 501 - 860 - 1832,
    linkedIn: 'https://www.linkedin.com/in/pamela-anderson-85b98a89/',
    personalUrl: 'https://www.linkedin.com/in/pamela-anderson-85b98a89/',
    availability: 12 - 01 - 2018,
    zipcode: 72012,
    salary: 20000,
    videoUrl: 'https://www.linkedin.com/in/pamela-anderson-85b98a89/',
    jobTitle: 'server'
  }, {
    firstName: 'Ann',
    lastName: 'anderson',
    email: 'ann@gmail.com',
    phone: 501 - 860 - 1832,
    linkedIn: 'https://www.linkedin.com/in/pamela-anderson-85b98a89/',
    personalUrl: 'https://www.linkedin.com/in/pamela-anderson-85b98a89/',
    availability: 11 - 11 - 2018,
    zipcode: 72011,
    salary: 30000,
    videoUrl: 'https://www.linkedin.com/in/pamela-anderson-85b98a89/',
    jobTitle: 'host'
  }, {
    firstName: 'ki',
    lastName: 'anderson',
    email: 'ki@gmail.com',
    phone: 501 - 111 - 2222,
    linkedIn: 'https://www.linkedin.com/in/pamela-anderson-85b98a89/',
    personalUrl: 'https://www.linkedin.com/in/pamela-anderson-85b98a89/',
    availability: 02 - 01 - 2018,
    zipcode: 30115,
    salary: 45000,
    videoUrl: 'https://www.linkedin.com/in/pamela-anderson-85b98a89/',
    jobTitle: 'line-cook'
  },
  ]).then(function (response) {
    db.Manager.bulkCreate([{
      firstName: 'Ben',
      lastName: 'higgens',
      email: 'ben@gmail.com',
      phone: '750-852-8745',
      password: 'Qwerty13',
      companyName: 'Chillies',
      companySite: 'https://www.linkedin.com/in/pamela-anderson-85b98a89/',
      companyLinkedIn: 'https://www.linkedin.com/in/pamela-anderson-85b98a89/',
      companyZipcode: 58585

    },
    {
      firstName: 'sam',
      lastName: 'blank',
      email: 'sam@gmail.com',
      phone: '750-252-4747',
      password: 'password',
      companyName: 'Olive Garden',
      companySite: 'https://www.linkedin.com/in/pamela-anderson-85b98a89/',
      companyLinkedIn: 'https://www.linkedin.com/in/pamela-anderson-85b98a89/',
      companyZipcode: 85214

    },
    {
      firstName: 'Matt',
      lastName: 'Smiles',
      email: 'matt@gmail.com',
      phone: '747-222-8585',
      password: 'password1',
      companyName: 'Red Lobster',
      companySite: 'https://www.linkedin.com/in/pamela-anderson-85b98a89/',
      companyLinkedIn: 'https://www.linkedin.com/in/pamela-anderson-85b98a89/',
      companyZipcode: 78945

    }
    ]).then(function (response) {
      db.Message.bulkCreate([{
        message: "Report to the manager please",
        sent: "Sent by Connor",
        received: "Recieved by Manager Cody"
      },
      {
        message: "Kill the manager please",
        sent: "Sent by Connor",
        received: "Recieved by Assassin Pamela"
      },
      {
        message: "Order doughnuts",
        sent: "Sent by Gia",
        received: "Recieved by Anon"
      },

      ]).then(function (response) {
        db.Job.bulkCreate([{
          position: 'server',
          hourlyRate: 8,
          hours: 'full-time',
          startDate: 08 - 25 - 2019,
          zipcode: 90545

        },
        {
          position: 'host',
          hourlyRate: 7,
          hours: 'part-time',
          startDate: 07 - 15 - 2019,
          zipcode: 90545

        },
        {
          position: 'line cook',
          hourlyRate: 10,
          hours: 'full-time',
          startDate: 02 - 25 - 2019,
          zipcode: 90545

        }])
      })
    })
  }).then(function (data) {
    console.log('Data successfully added!');
    db.close();
  }).catch(function (error) {
    console.log('Error', error)
    db.close()
  })
});
