<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-8">
          <form @submit.prevent="handleSubmit" autocomplete="off" method="post">
            <h3 class="text-muted my-5">添加新的Pizza</h3>
            <div class="form-group row">
              <label class="col-sm-1">品种</label>
              <div class="col-sm-11">
                <input type="text" class="form-control" name="type" v-model="pizza.type" required />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-1">描述</label>
              <div class="col-sm-11">
                <textarea rows="5" class="form-control" name="desc" v-model="pizza.desc"></textarea>
              </div>
            </div>
            <p>
              <strong>选项1</strong>
            </p>
            <div class="form-group row">
              <label class="col-sm-1">尺寸</label>
              <div class="col-sm-11">
                <input type="text" class="form-control" name="sizeOne" v-model="pizza.sizeOne" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-1">价格</label>
              <div class="col-sm-11">
                <input type="text" class="form-control" name="priceOne" v-model="pizza.priceOne" />
              </div>
            </div>
            <p>
              <strong>选项2</strong>
            </p>
            <div class="form-group row">
              <label class="col-sm-1">尺寸</label>
              <div class="col-sm-11">
                <input type="text" class="form-control" name="sizeTwo" v-model="pizza.sizeTwo" />
              </div>
            </div>
            <div class="form-group row">
              <label class="col-sm-1">价格</label>
              <div class="col-sm-11">
                <input type="text" class="form-control" name="priceTwo" v-model="pizza.priceTwo" />
              </div>
            </div>
            <div class="form-group row">
              <button type="submit" class="btn btn-success btn-block">添加</button>
            </div>
          </form>
        </div>
        <div class="col-sm-12 col-md-4">
          <h3 class="text-muted my-5">菜单</h3>
          <table class="table">
            <thead class="table table-default">
              <tr>
                <th>品种</th>
                <th>删除</th>
              </tr>
            </thead>
            <tbody v-for="(profile,index) in profile" :key="index">
              <tr>
                <td>{{profile.type}}</td>
                <td>
                  <button class="btn btn-outline-danger btn-sm" @click="handleDelete(index)">×</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <br />
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <!---->
        </div>
        <div class="col-sm-12 col-md-4">
          <!---->
        </div>
        <div class="col-sm-12 col-md-4">
          <!---->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "admin",
  computed: {
    // ...mapGetters(["profile"]),
    profile: {
      get() {
        return this.$store.getters.profile;
      },
      set() {}
    }
  },
  created() {
    this.getProfileData();
  },
  data() {
    return {
      pizza: {
        type: "",
        desc: "",
        sizeOne: "",
        priceOne: "",
        sizeTwo: "",
        priceTwo: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      console.log(this.pizza);
      let data = {
        type: this.pizza.type,
        desc: this.pizza.desc,
        options: [
          {
            size: this.pizza.sizeOne,
            price: this.pizza.priceOne
          },
          {
            size: this.pizza.sizeTwo,
            price: this.pizza.priceTwo
          }
        ]
      };
      // 发送请求
      this.$axios
        .post("https://wd4782151544jfcwop.wilddogio.com/cwnmenus.json", data)
        .then(res => {
          this.$axios
            .get("https://wd4782151544jfcwop.wilddogio.com/cwnmenus.json")
            .then(res => {
              console.log(res);
              this.profile = res.data;
              this.$store.dispatch("setProfileAsync", res.data);
            });
        })
        .catch(err => {
          if (err.response.data) {
            this.errors = err.response.data;
          }
        });
    },
    handleDelete(id) {
      console.log(id);
      this.$axios
        .delete(`https://wd4782151544jfcwop.wilddogio.com/cwnmenus/${id}.json`)
        .then(res => {
          this.$axios
            .get("https://wd4782151544jfcwop.wilddogio.com/cwnmenus.json")
            .then(res => {
              console.log(res);
              this.profile = res.data;
              this.$store.dispatch("setProfileAsync", res.data);
            });
        });
    },
    getProfileData() {
      this.$axios
        .get("https://wd4782151544jfcwop.wilddogio.com/cwnmenus.json")
        .then(res => {
          console.log(res);
          // 如果数据请求到，那么赋值给profile
          this.profile = res.data;

          // 存到vuex中
          this.$store.dispatch("setProfileAsync", res.data);
        })
        .catch(err => {
          this.$store.dispatch("setProfileAsync", null);
          this.profile = null;
          // console.log(err);
        });
    }
  }
};
</script>
<style scoped>
</style>
