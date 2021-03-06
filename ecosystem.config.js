module.exports = {
  apps: [{
    name: 'Server',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'abenettaleb',
      host: 'ec2-18-219-122-59.us-east-2.compute.amazonaws.com',
      key: '/Users/BENETTALEB/Downloads/abenettaleb.pem',
      ref: 'origin/master',
      repo: 'https://github.com/ibenettaleb/server-pm.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
