<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-8">
          <table class="table">
            <thead class="thead-default">
              <tr>
                <th>尺寸</th>
                <th>价格</th>
                <th>加入</th>
              </tr>
            </thead>
            <tbody v-for="(pro,index) in profile" :key="index">
              <tr>
                <td>
                  <strong>{{pro.type}}</strong>
                </td>
              </tr>
              <tr v-for="(option,i) in pro.options" :key="i">
                <td>{{option.size}}</td>
                <td>{{option.price}}</td>
                <td>
                  <button class="btn btn-sm btn-outline-success" @click="add(pro,option)">+</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="shoppingCar.length > 0">
          <table class="table">
            <thead class="thead-default">
              <tr>
                <th>数量</th>
                <th>品种</th>
                <th>价格</th>
              </tr>
            </thead>
            <tbody v-for="item in shoppingCar" :key="item.type">
              <tr>
                <td>
                  <button class="btn btn-sm" @click="decreaseQuantity(item)">-</button>
                  <span>&nbsp;{{item.quantity}}&nbsp;</span>
                  <button class="btn btn-sm" @click="increaseQuantity(item)">+</button>
                </td>
                <td>{{item.type}}{{item.size}}</td>
                <td>{{item.price * item.quantity}}</td>
              </tr>
            </tbody>
          </table>
          <p>总价: {{total + "&nbsp;RMB"}}</p>
          <button class="btn btn-success btn-block">提交</button>
        </div>
        <div v-else class="col-sm-12 col-md-4">
          <div>购物车没有任何商品</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Menu",
  data() {
    return {
      shoppingCar: []
    };
  },
  computed: {
    // ...mapGetters(["profile"]),
    profile: {
      get() {
        return this.$store.getters.profile;
      },
      set() {}
    },
    total() {
      let totalCost = 0;

      for (let index in this.shoppingCar) {
        let individualItem = this.shoppingCar[index];
        totalCost += individualItem.quantity * individualItem.price;
      }

      return totalCost;
    }
  },
  created() {
    this.getProfileData();
  },
  methods: {
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
    },
    add(profile, option) {
      let shoppingCar = {
        type: profile.type,
        size: option.size,
        price: option.price,
        quantity: 1
      };

      if (this.shoppingCar.length > 0) {
        // 过滤
        let result = this.shoppingCar.filter(shoppingCar => {
          return (
            shoppingCar.type === profile.type &&
            shoppingCar.price === option.price
          );
        });

        if (result != null && result.length > 0) {
          result[0].quantity++;
        } else {
          this.shoppingCar.push(shoppingCar);
        }
      } else {
        this.shoppingCar.push(shoppingCar);
      }
    },
    decreaseQuantity(item) {
      item.quantity--;

      if (item.quantity <= 0) {
        this.removeFromBasket(item);
      }
    },
    increaseQuantity(item) {
      item.quantity++;
    },
    removeFromBasket(item) {
      this.shoppingCar.splice(this.shoppingCar.indexOf(item), 1);
    }
  }
};
</script>
<style scoped>
</style>
