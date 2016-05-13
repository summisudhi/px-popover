module.exports = {
    remote: true,
    verbose: false,
    plugins: {
        local: {
            browsers: ['chrome', 'firefox']
            // "browsers": [
//              
//          {
//           "browserName": "internet explorer",
//           "platform": "Windows 7",
//           "version": "10"
//         },
//         {
//           "browserName": "chrome",
//           "platform": "Windows 10",
//           "version": "44"
//         },
//          {
//           "browserName": "microsoftedge",
//           "platform": "Windows 10"
//          
//         },
//         {
//           "browserName": "internet explorer",
//           "platform": "Windows 8.1",
//           "version": "11"
//         },
//         {
//           "browserName": "internet explorer",
//           "platform": "Windows 10",
//           "version": "11"
//         },
//         {
//           "browserName": "internet explorer",
//           "platform": "Windows 8",
//           "version": "10"
//         },
//          {
//           "browserName": "firefox",
//           "platform": "Windows 8.1",
//           "version": "44"
//         },
//          {
//           "browserName": "chrome",
//           "platform": "Windows 8.1",
//           "version": "48"
//         },
//          {
//           "browserName": "safari",
//           "platform": "OS X 10.10",
//           "version": "8"
//         },
//          
//         
//          {
//           "browserName": "chrome",
//           "platform": "OS X 10.11",
//           "version": "48"
//         },
//              
//            
//         {
//           "browserName": "safari",
//           "platform": "OS X 10.11",
//           "version": "9"
//         },
//              
//          {
//           "browserName": "iphone",
//           "platform": "OS X 10.10",
//           "version": "9.2",
//           "deviceName": "iPad Retina",
//           "deviceOrientation": "portrait"
//           
//         },
//         
//         {
//           "browserName": "iphone",
//           "platform": "OS X 10.10",
//           "version": "9.2",
//           "deviceName": "iPad 2",
//           "deviceOrientation": "portrait"
//           
//         }
// 
//         
//         
//       ]
        },
        sauce: {
             "disabled" : false,
             "username" : "sirishaaluri",
             "accessKey" : "312becfc-d56a-4cb2-945b-a5ce514739c5",
             "browsers": [
             
         {
          "browserName": "internet explorer",
          "platform": "Windows 7",
          "version": "10"
        },
        {
          "browserName": "chrome",
          "platform": "Windows 10",
          "version": "44"
        },
         {
          "browserName": "microsoftedge",
          "platform": "Windows 10"
         
        },
        {
          "browserName": "internet explorer",
          "platform": "Windows 8.1",
          "version": "11"
        },
        {
          "browserName": "internet explorer",
          "platform": "Windows 10",
          "version": "11"
        },
        {
          "browserName": "internet explorer",
          "platform": "Windows 8",
          "version": "10"
        },
         {
          "browserName": "firefox",
          "platform": "Windows 8.1",
          "version": "44"
        },
         {
          "browserName": "chrome",
          "platform": "Windows 8.1",
          "version": "48"
        },
         {
          "browserName": "safari",
          "platform": "OS X 10.10",
          "version": "8"
        },
         
        
         {
          "browserName": "chrome",
          "platform": "OS X 10.11",
          "version": "48"
        },
             
           
        {
          "browserName": "safari",
          "platform": "OS X 10.11",
          "version": "9"
        },
             
         {
          "browserName": "iphone",
          "platform": "OS X 10.10",
          "version": "9.2",
          "deviceName": "iPad Retina",
          "deviceOrientation": "portrait"
          
        },
        
        {
          "browserName": "iphone",
          "platform": "OS X 10.10",
          "version": "9.2",
          "deviceName": "iPad 2",
          "deviceOrientation": "portrait"
          
        }

        
        
      ]
    }
  },
  suites: [
    'test/fixture.html'
  ]
};
