<template>
  <div class="ctEdit">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

      <el-form-item label="内容标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>

      <el-form-item label="副标题" prop="sub_title">
        <el-input v-model="ruleForm.sub_title"></el-input>
      </el-form-item>

      <el-form-item label="所属类别" prop="category_id">
        <el-select v-model="ruleForm.category_id" placeholder="请选择商品类别">
          <el-option :label="item.title" v-for='item in goodsTypeList' :key="item.category_id" :value="item.category_id">
            <span>
              <span v-if="item.class_layer!=1">|- </span>
              <span>{{item.title}}</span>
            </span>
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="是否发布" prop="status" style="text-align: left;">
        <el-switch v-model="ruleForm.status"></el-switch>
      </el-form-item>



      <el-form-item label="推荐类型" prop="delivery">
        <el-switch active-text="轮播图" v-model="ruleForm.is_slide"></el-switch>
        <el-switch active-text="置顶" v-model="ruleForm.is_top"></el-switch>
        <el-switch active-text="推荐" v-model="ruleForm.is_hot"></el-switch>
      </el-form-item>


      <el-form-item label="上传封面" prop="imgList">
        <el-upload class="upload-demo" action="http://localhost:8899/admin/article/uploadimg" :on-remove="removeImg" :on-success="uploadedImg"
          :file-list="ruleForm.imgList" list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>

      <el-form-item label="上传附件" prop="fileList">
        <el-upload class="upload-demo" action="http://localhost:8899/admin/article/uploadfile" :on-success="uploadedFile" :file-list="ruleForm.fileList">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>

      <el-form-item label="货号" prop="goods_no">
        <el-input v-model="ruleForm.goods_no"></el-input>
      </el-form-item>
      <el-form-item label="库存" prop="stock_quantity">
        <el-input v-model="ruleForm.stock_quantity"></el-input>
      </el-form-item>
      <el-form-item label="市场价格" prop="market_price">
        <el-input v-model="ruleForm.market_price"></el-input>
      </el-form-item>
      <el-form-item label="销售价格" prop="sell_price">
        <el-input v-model="ruleForm.sell_price"></el-input>
      </el-form-item>

      <el-form-item label="内容摘要" prop="zhaiyao">
        <el-input v-model="ruleForm.zhaiyao"></el-input>
      </el-form-item>

      <el-form-item label="详细内容" prop="content">
        <quill-editor v-model="ruleForm.content"></quill-editor>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">保存提交</el-button>
        <el-button>返回上一页</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>
<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import { quillEditor } from 'vue-quill-editor'

  export default {
    components: {
      quillEditor,
    },
    data() {
      //校验封面
      function validateImg(rule, value, callback) {
        if (value === '' || value.length == 0) {
          callback(new Error('请上传一张封面图'));
        } else {
          callback();
        }
      };

      return {
        //要修改的商品id
        id: null,
        // 表单数据对象
        ruleForm: {},
        //表单校验规则
        rules: {
          title: [
            { required: true, message: '请输入标题名称', trigger: 'blur' },
            { min: 5, max: 100, message: '长度在 5 到 20 个字符', trigger: 'blur' }
          ],
          sub_title: [
            { required: true, message: '请选择副标题', trigger: 'blur' }
          ],
          category_id: [
            { required: true, message: '请选择商品分类', trigger: 'change' }
          ],
          goods_no: [
            { required: true, message: '请输入货号', trigger: 'change' }
          ],
          stock_quantity: [
            { required: true, message: '请输入库存', trigger: 'change' }
          ],
          market_price: [
            { required: true, message: '请输入市场价格', trigger: 'change' }
          ],
          sell_price: [
            { required: true, message: '请输入销售价格', trigger: 'blur' }
          ],
          zhaiyao: [
            { required: true, message: '请填写摘要', trigger: 'blur' }
          ],
          content: [
            { required: true, message: '请输入内容', trigger: 'blur' }
          ],
          // imgList: [
          //   { validator: validatorImg, trigger: 'submit' }
          // ],
          imgList: [
            { validator: validateImg, trigger: 'submit' }
          ]
        },
        //商品类别
        goodsTypeList: []
      };
    },
    methods: {
      // 上传封面
      removeImg(file, fileList) {
        // console.log(file, fileList);
        var url = file.url;
        // console.log(url);
        this.ruleForm.imgList = this.ruleForm.imgList.filter(v => {
          v.url != url
        })

        // console.log(this.ruleForm.imgList);
      },
      uploadedImg(response, file, fileList) {
        this.ruleForm.imgList = [response]
      },
      //上传附近
      uploadedFile(response, file, fileList) {
        if (this.id) {
          this.ruleForm.fileList.push(response);
        } else {
          this.ruleForm.fileList = [response]
        }

      },
      //获取商品类别
      getGoodsType() {
        this.$http.get(this.$api.ctList + "goods").then(res => {
          // console.log(res);
          this.goodsTypeList = res.data.message;
        })
      },
      //修改商品数据
      modyfyGoods() {
        this.$http.post(this.$api.gsEdit + this.id, this.ruleForm).then(res => {
          console.log(this.ruleForm);
          if (res.data.status == 0) {
            this.$alert('修改成功！', '提示', {
              confirmButtonText: '确定',
              callback: action => {
                this.$router.push({ name: "goodsCtList" });
              }
            });
          }
        })
      },
      //修改新增提交上传功能
      submitForm(formName) {
        // 修改后提交
        if (this.id) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.modyfyGoods();
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        }
        // 新增提交
        else {
          this.ruleForm.is_hot ? this.ruleForm.is_hot = this.ruleForm.is_hot : this.ruleForm.is_hot = false;
          this.ruleForm.is_slide ? this.ruleForm.is_slide = this.ruleForm.is_slide : this.ruleForm.is_slide = false;
          this.ruleForm.is_top ? this.ruleForm.is_top = this.ruleForm.is_top : this.ruleForm.is_top = false;
          this.$http.post(this.$api.gsAdd,this.ruleForm).then(res=>{
            if(res.data.status==0){
              this.$alert(res.data.message);
              this.$router.push({name:'goodsCtList'});
            }
          })

        }
      },
      //根据ID获取产品数据
      getDataById() {
        this.$http.get(this.$api.gsDetail + this.id).then(res => {
          this.ruleForm = res.data.message;
          this.ruleForm.category_id = +this.ruleForm.category_id;
        })
      }
    },
    //根据ID获取产品数据
    created() {
      this.id = this.$route.params.id;
      this.getGoodsType();
      if (this.id) {
        this.getDataById();
      }
    }
  }
</script>
<style scoped>
  .ctEdit {
    text-align: left;
  }
</style>