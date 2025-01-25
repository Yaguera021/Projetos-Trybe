const admMock = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
}

const validUserBody = {
  email: 'admin@admin.com', password: 'secret_admin' 
}

const invalidUserPasswordBody = {
  email: 'admin@admin.com', password: 'wrong_password'
}

const invalidUserEmailBody = {
  email: 'wrong_email', password: 'secret_admin'
}

const notEmailFound = {
  email: 'email@email.com', password: 'secret_admin'
}

const noEmail = {
  password:'secret_admin'
}

const noPassword = {
  email: 'admin@admin.com'
}

const allUsersMock = [
  {
    id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
  },
  {
    id: 2,
    username: 'User',
    role: 'user',
    email: 'user@user.com',
    password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO'
  },
]

const validToken = { 
  bearer:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk5ODA4OTA3LCJleHAiOjE2OTk4OTUzMDd9.-m1sPHRcRVFZjYbIIV_KOMILgdCP3PFvBnMmYt6DNWI' 
} 

export default { admMock, validToken, validUserBody, invalidUserPasswordBody, invalidUserEmailBody, notEmailFound, noEmail, noPassword, allUsersMock }