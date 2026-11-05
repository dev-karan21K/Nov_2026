module.exports = {
  default:
    {
        path:["features/**/*.feature"],
        require:[
            "step-definitions/**/*.ts"
        ],
        requireModule:[
            "ts-node/register"
        ],
        format:[
           "progress","allure-cucumberjs/reporter" 
        ],
        formatOptions:{
            resultDir: "allure-result"
        },

        publishQuiet:true
    }
};