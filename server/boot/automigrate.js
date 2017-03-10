module.exports = function(app) {

  var auto = [
    'User',
    'AccessToken',
    'ACL',
    'RoleMapping',
    'Role',
    'employee'
  ];

  app.dataSources.db.automigrate(auto, function(err) {
    if (err) throw err;
    app.models.employee.create([
      {
        id: 100,
        name: 'Alan',
        managerId: 150
      },
      {
        id: 220,
        name: 'Martin',
        managerId: 100
      },
      {
        id: 150,
        name: 'Jamie'
      },
      {
        id: 275,
        name: 'Alex',
        managerId: 100
      },
      {
        id: 400,
        name: 'Steve',
        managerId: 150
      },
      {
        id: 190,
        name: 'David',
        managerId: 400
      }
    ], function(err, employees) {
      if (err) throw err;
      console.log('Models created: \n', employees);
    });
  });
};
