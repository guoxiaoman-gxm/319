<template>
    <div id="border_div">
        <div class="showYZM_div">
            <div class="yzm_div">
                <input type="text" v-model="check_yzm" @blur="checkYZM" @keyup.enter="$event.target.blur" style="width: 120px;height: 30px;border-color: lightgrey" placeholder="请输入验证码">
                <p v-model="yzm_code" class="yzm_picture_div">{{yzm_code}}</p>
            </div>
            <div class="yzm_text_div">
                <a href="javascript:void(0);" @click="changeYZM">看不清，换一张试试？</a>
            </div>
        </div>
        <div>
            <div style="color: red">
                <p v-show="showErrorMssage">{{ErrorMessage}}</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "vcode",
        data(){
            return{
                yzm_code:'axaz',
                check_yzm:'',
                check_yzm_status:false,
                yzm_code_length:4,
                ErrorMessage:'',
                showErrorMssage:false,
            }
        },
        computed:{
            init(){
                console.log("初始化验证码---axaz")
            }
        },
        methods:{
            changeYZM:function(){
                let yzm_code = '';//点击更换时-初始验证码
                let yzm_code_length = this.yzm_code_length;//验证码长度获取
                let codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
                    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
                    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');//候选字符
                //通过循环获取yzm_code_length位codeChars中的字符下标，并通过下标获取指定字符，最后拼接
                for (let i = 0; i < yzm_code_length; i++ ) {
                    let charNum = Math.floor(Math.random() * 62);//获取随机验证码下标
                    yzm_code += codeChars[charNum];//根据下标获取指定字符并拼接
                }
                console.log("修改后验证码---"+yzm_code);
                return this.yzm_code = yzm_code;
            },
            checkYZM:function () {
                if(this.check_yzm == ''){
                    this.ErrorMessage = '验证码不能为空';
                    this.showErrorMssage = true;
                    return;
                }else if(this.check_yzm.toUpperCase() != this.yzm_code.toUpperCase()){
                    console.log("待校验验证码---"+this.check_yzm.toUpperCase())
                    console.log("正确验证码---"+this.yzm_code.toUpperCase())
                    this.ErrorMessage = '验证码输入有误';
                    this.showErrorMssage = true;
                    return;
                }else {
                    this.ErrorMessage = '';
                    this.showErrorMssage = false;
                    this.check_yzm_status = true;
                }
            },

        }
    }
</script>

<style scoped>
    #border_div{
        text-align: left;
        margin-left: 70px;
        margin-bottom: 20px;
        height: 60px;
    }
    .yzm_picture_div{
        width: 86px;
        height: 20px;
        margin-top: 3px;
        margin-bottom: 5px;
        margin-right: 116px;
        background: mistyrose;
        letter-spacing: 15px;
        color: lightcoral;
        text-align: center;
        float: right;
    }
    .yzm_picture_div {
        font-size: 15px;
    }
    .yzm_text_div{
        margin-left: 40px;
        margin-top: 5px;
    }
</style>