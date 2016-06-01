


exports.login = function(user, pass){

    return new Promise(function(resolve, reject) {

        console.log('user - '+user+' | pass - '+pass)

        if(user == 'user' && pass == 'pass'){

             var obj = {

                nombre      :'nombre',
                apellido1   :'apellido1',
                apellido2   :'apellido2',
                username    :user,
                password    :pass,
                role        :'role'
            }
            resolve(obj);

        }
        else{

            reject({ message: 'user not found' });
        }
    });
};





