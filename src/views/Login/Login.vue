<template>
  <div id="login_div">
    <div class="login_text_div">

      <Tabs value="Student" size="large">
        <TabPane label="学生登录" name="Student" icon="md-person">
          <div class="text">
            <Form ref="StudentInfo" :model="StudentInfo" :rules="ruleStudentInfo" inline>
              <FormItem prop="account">
                <Input type="text" v-model="StudentInfo.StuId" placeholder="Student-Username">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <br>
              <FormItem prop="password" >
                <Input type="password" v-model="StudentInfo.Password" placeholder="Student-Password">
                  <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem lable="验证码" prop="vcode">
                <Input type="text" v-model="StudentInfo.vcode"  placeholder="Identifying code" style="width: 120px"></Input>
                <Button type="primary">获取验证码</Button>
              </FormItem>
              <br>
              <FormItem>
                <Button type="primary" style="width: 100px;margin-left: 50px" >登录</Button>
              </FormItem>
            </Form>
          </div>
        </TabPane>
        <TabPane label="教师登录" name="Teacher" icon="ios-person">
          <div class="text">
            <Form ref="TeacherInfo" :model="TeacherInfo" :rules="ruleTeacherInfo" inline>
              <FormItem prop="TeacherName">
                <Input type="text" v-model="TeacherInfo.tId" placeholder="Teacher-Username">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <br>
              <FormItem prop="TeacherPassword">
                <Input type="password" v-model="TeacherInfo.tPasssword" placeholder="Teacher-Password">
                  <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>
              <FormItem lable="验证码" prop="Teachervcode">
                <Input type="text" placeholder="Identifying code" style="width: 120px"></Input>
                <Button type="primary">获取验证码</Button>
              </FormItem>
              <br>
              <FormItem>
                <Button type="primary" style="width: 100px;margin-left: 50px" >登录</Button>
              </FormItem>
            </Form>
          </div>
        </TabPane>
        <TabPane label="使用说明" name="name3" icon="md-help-circle">
          <div class="text1">
            <br><br>
            <p>使用说明，本系统用户名均为邮箱账号！</p>
            <p>请教师和学生分流登陆！！</p>
          </div>
        </TabPane>
      </Tabs>
      <div style="margin-top: 10px;margin-bottom: 10px">
        <router-link to="/register" class="text1">点击注册</router-link>
        <router-link to="/findpwd" class="text2">忘记密码？</router-link>
      </div>

    </div>


  </div>

</template>


<script>
  import Vcode from "./Vcode";
  export default {
    name: "login",
    components: {Vcode},
    data(){
      return {
        StudentInfo: {
          StuId: '',
          Password: '',
          vcode:'',
        },
        TeacherInfo:{
          tId:'',
          tPasssword:'',
          tVcode:'',
        },
        ruleStudentInfo: {
          StuId: [
            { required: true, message: 'Please fill in the user name', trigger: 'blur' }
          ],
          Password: [
            { required: true, message: 'Please fill in the password.', trigger: 'blur' },
            { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ],
          vcode: [
            { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          ]
        },
        ruleTeacherInfo: {
          tId: [
            { required: true, message: 'Please fill in the user name', trigger: 'blur' }
          ],
          tPasssword: [
            { required: true, message: 'Please fill in the password.', trigger: 'blur' },
            { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ],
          tVcode: [
            { required: true, message: 'Please fill in the password.', trigger: 'blur' },

          ]
        }
      }
    }
  }

</script>

<style lang="less" scoped>
#login_div{

  .login_text_div{
    margin: 100px 100px 100px 400px;
    width: 410px;
    border-radius: 10px;
    border: solid lightcyan;
    background-color: lightcyan;

    .text{
      margin-left: 70px;
    }
    .text1{
      margin-left: 68px;
    }
    .text2{
      margin-left: 110px;
    }
  }
}
</style>