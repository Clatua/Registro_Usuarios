let User=function(id, name, username, email, phone, website, street, city, zipcode)
            {
              this.id=id;
              this.name=name;
              this.username=username;
              this.email=email;
              this.phone=phone;
              this.website=website;
              this.address={street:street, city:city, zipcode:zipcode};
            };

          let Control=function()
            {

              this.Registration=new Map();
              
              this.AddUser=function(nuevo)
                {
                  let User=this.Registration.has(nuevo.id);
                  if(User===false)
                    {
                      this.Registration.set(nuevo.id, nuevo);
                      console.log(this.Registration.get(nuevo.id));
                      return true;
                    }
                  else
                    {
                      return false
                    }
                }

              this.Search=function(id)
                {
                  
                  let Search=this.Registration.has(id);
                    if(Search===true)
                    {
                      console.log(this.Registration.get(id));
                      return true;
                    }
                    else
                      return false;
                }

              this.Deleted=function(id)
                {
                  
                  let Deleted=this.Registration.delete(id);
                    if(Deleted===true)
                    {
                      console.log(this.Registration.get(id));
                      return true;
                    }
                    else
                      return false;
                }
            };

          let ShowInfo=function()
          {
            this.AddInfo=function(nuevo)
            {
              let List=document.getElementById('result');
              let User=document.createElement('div');
              User.innerHTML=`
                        <div class ='Show' id='cod${nuevo.id}'>
                          <div class='info'>
                          <table border-collapse="collapse">
                            <caption>Datos usuario</caption>
                              <tbody>
                                <tr>
                                  <td></td>
                                    <th>Datos Usuario</th>
                                </tr>
                                <tr>
                                  <th>Id:</th>
                                  <td>${nuevo.id}</td>
                                </tr>
                                <tr>
                                  <th>Nombre:</th>
                                  <td>${nuevo.name}</td>
                                </tr>
                                <tr>
                                  <th>Usuario:</th>
                                  <td>${nuevo.username}</td>
                                </tr>
                                <tr>
                                  <th>Correo:</th>
                                  <td>${nuevo.email}</td>
                                </tr>
                                <tr>
                                  <th>Celular:</th>
                                  <td>${nuevo.phone}</td>
                                </tr>
                                <tr>
                                  <th>Facebook</th>
                                  <td>${nuevo.website}</td>
                                </tr>
                                <tr>
                                  <th>Calle</th>
                                  <td>${nuevo.address.street}</td>
                                </tr>
                                <tr>
                                  <th>Ciudad</th>
                                  <td>${nuevo.address.city}</td>
                                </tr>
                                <tr>
                                  <th>CodigoPostal</th>
                                  <td>${nuevo.address.zipcode}</td>
                                </tr>
                            </tbody>
                          </table>
                          <div>
                        </div>
                    `;
              List.appendChild(User);
            }

            this.ShowMessageInfo=function(message,type)
            {
              let top=document.getElementById('top');
              let bottom=document.getElementById('bottom');
              let div=document.createElement('div');
              div.className=`alertinfo`;
              div.appendChild(document.createTextNode(message))
              top.insertBefore(div,bottom);
              setTimeout(function()
                {
                  document.querySelector('.alertinfo').remove();
                },3000);
            }

            this.ShowMessageDanger=function(message,type)
            {
              let top=document.getElementById('top');
              let bottom=document.getElementById('bottom');
              let div=document.createElement('div');
              div.className=`alertdanger`;
              div.appendChild(document.createTextNode(message))
              top.insertBefore(div,bottom);
              setTimeout(function()
                {
                  document.querySelector('.alertdanger').remove();
                },3000);
            }
          };

          let Register=new Control();
          let Result = new ShowInfo();

          let btnAdd=document.getElementById('btnAdd');
          btnAdd.addEventListener('click',()=>{
            let id=document.getElementById('IntroId').value;
            let name=document.getElementById('IntroName').value;
            let username=document.getElementById('IntroUserName').value;
            let email=document.getElementById('IntroEmail').value;
            let phone=document.getElementById('IntroPhone').value;
            let website=document.getElementById('IntroWebsite').value;
            let street=document.getElementById('IntroStreet').value;
            let city=document.getElementById('IntroCity').value;
            let zipcode=document.getElementById('IntroZipcode').value;
            let nuevo=new User(id, name, username, email, phone, website, street, city, zipcode);
            let value=Register.AddUser(nuevo);
            if(value==true)
            {
            Result.AddInfo(nuevo);
            console.log(Register);
            Result.ShowMessageInfo('El usuario fue agregado exitosamente',1);
            }
            else
            {
              Result.ShowMessageDanger('El usuario ya existe',1);
            }
          });

          let btnSearch=document.getElementById('btnSearch');
          btnSearch.addEventListener('click',()=>{
            let id=document.getElementById('IntroId').value;
            let Found=Register.Search(id);
            if(Found==true)
              {
                Result.ShowMessageInfo('Se encontró al usuario correctamente',1);
              }
            else
              {
                Result.ShowMessageDanger('El usuario no fue encontrado o no existe',1);
              }
          });

          let btnDeleted=document.getElementById('btnDeleted');
          btnDeleted.addEventListener('click',()=>{
            let id=document.getElementById('IntroId').value;
            let Erased=Register.Deleted(id);
            if(Erased==true)
              {
                Result.ShowMessageInfo('El usuario fue eliminado con éxito',3);
                console.log(Register);
              } 
            else
              {
                Result.ShowMessageDanger('El usuario ya ha sido eliminado o no existe',3);
              }
          });