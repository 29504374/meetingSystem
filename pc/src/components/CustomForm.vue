<template>
    <div class="form-main-page">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
<el-form-item label="会议类型" prop="type">
    <el-select placeholder="选择会议类型" v-model="ruleForm.type" @change="meetingTypeSelect()">
    <el-option v-for="item in meetingTypeOptions" :label="item.label" :value="item.value" :key="item.value"></el-option>
    </el-select>
</el-form-item>
<el-form-item label="客户名称" prop="client" v-show="clientShow">
<el-input v-model="ruleForm.client"  />
</el-form-item>
<el-form-item label="所在部门" prop="department">
<el-input v-model="ruleForm.department"  />
</el-form-item>
<el-form-item label="联系电话" prop="phone">
<el-input v-model="ruleForm.phone"  />
</el-form-item>
<el-form-item label="会议主题" prop="theme">
<el-input v-model="ruleForm.theme"  />
</el-form-item>
<el-form-item label="会议日期" prop="date">
    <el-input v-model="ruleForm.date" v-bind:disabled="!this.$store.state.calendarAndInfoState"  />
</el-form-item>
<el-form-item label="起始时间" prop="startTime">
  <el-time-select placeholder="起始时间" v-model="ruleForm.startTime" @change="pickerTimeChange()" 
    :picker-options="pickerOptionStart" />
</el-form-item>
<el-form-item label="结束时间" prop="endTime">
     <el-time-select placeholder="结束时间" v-model="ruleForm.endTime"
    :picker-options="pickerOptionEnd"/>
</el-form-item>
    <div class="form-change-time"><span @click="pickerTimeClick(pickerText)">{{pickerText}}</span></div>
<div class="tags">
    <div class="form-reference-user"><span @click="selectOrg()">选择参会人员</span></div>
    <div class="form-reference-tag">
       <el-tag
  v-for="tag in tags"
  :key="tag.name"
  closable
  :type="tag.type">
  {{tag.name}}
</el-tag> 
    </div>
</div>
<el-input type="textarea" :rows="4" placeholder="请输入内容" style="margin-top:10px;" />
<div class="form-submit-button">
    <el-button @click="cleanerForm()">取消预约</el-button>
    <el-button type="primary" @click="submitForm('ruleForm')">提交申请</el-button>
    </div>


        </el-form>
    </div>
</template>
<script>
import example from "../uilt/Example"
export default {
  data: function() {
    return {
        pickerOptionStart:{},
        pickerOptionEnd:{},
        pickerText:"24小时",
        meetingTypeOptions:[],
        clientShow:false,
        workTime:true,
      ruleForm: {
        type: "",
        client:"",
        department:"",
        phone:"",
        theme:"",
        date:"",
        startTime:"",
        endTime:"",
      },
      rules: {
        type: [{ required: true, message: '请选择会议类型', trigger: 'change' }],
        client:[{ required: true, message: '请输入客户名称', trigger: 'blur' }],
        department:[{ required: true, message: '请输入部门名称', trigger: 'blur' }],
        phone:[{ required: true, message: '请输入联系电话', trigger: 'blur' }],
        theme:[{ required: true, message: '请输入会议主题', trigger: 'blur' }],
        date:[{ required: true, message: '请输入会议日期', trigger: 'blur' }],
        startTime:[{ required: true, message: '请选择会议开始时间', trigger: 'blur' }],
        endTime:[{ required: true, message: '请选择会议结束时间', trigger: 'blur' }],
      },
      tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ]
    };
  },
  mounted:function()
  {
      this.meetingTypeOptions = example.getMeetingType();
      this.pickerOptionEnd=this.pickerOptionStart = example.getTimeStepOptions(0);
  },
  methods:{
      submitForm:function(formName)
      {
          this.$refs[formName].validate(
              (valid) => {
                if(valid)
                {
                    console.log("sussess...");
                }else
                {
                    console.log("wrong...");
                    return;
                }
              }
          )
      },
      cleanerForm:function()
      {
          let that = this;
          this.$alert("你确要要取消吗？确定后，信息将清空...","系统提示",{
              callback:action => {
                  that.formCleaner();
              }
          });
          
      },
      formCleaner:function()
      {
          this.$emit("resetForm");
          this.$refs["ruleForm"].resetFields();
          this.clientShow = false;
          this.pickerTimeClick("8小时");
      },
      meetingTypeSelect:function()
      {
          
          if(this.ruleForm.type != '0')
          {
              this.clientShow = false;
          }else
          {
              this.clientShow = true;
          }
      },
      pickerTimeClick:function(state)
      {
          if(state == "24小时")
          {
              this.pickerText = "8小时";
              this.pickerOptionStart = example.getTimeStepOptions(1);
          }else
          {
              this.pickerText = "24小时";
              this.pickerOptionStart = example.getTimeStepOptions(0);
          }
          this.pickerOptionEnd = this.pickerOptionStart;
          this.ruleForm.startTime = "";
          this.ruleForm.endTime = "";
      },
      pickerTimeChange:function()
      {
          this.pickerOptionEnd.minTime = this.ruleForm.startTime;
      },
      setFormDate:function(value)
      {
          this.ruleForm.date = value;
      },
      selectOrg:function()
      {
          this.$store.commit("setIndexRightState","org");
      }
  }
};
</script>
<style>
.form-main-page
{
    padding: 20px;
}
.form-main-page .el-select
{
    width:100%;
}
.form-main-page .el-date-editor.el-input, .el-date-editor.el-input__inner
{
    width: 100%;
  
}
.form-change-time
{
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    margin-bottom: 20px;
}
.form-reference-user
{
        display: flex;
    justify-content: flex-end;
    cursor: pointer;
    color: #2381c8;
}
.form-reference-tag
{
    display: flex;
    flex-wrap: wrap;
}
.form-reference-tag .el-tag
{
    margin-top: 10px;
    margin-right: 7px;
}
.form-submit-button
{
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}
.el-form-item
{
    margin-bottom: 20px;
}
</style>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              