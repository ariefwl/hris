<template>
  <div class="row">
    <div class="flex xs12">
      <va-card>
        <va-card-content>
          <h1 class="mb-5">Create User</h1>
          <form>
            <div class="form-floating mb-3">
              <input id="uname" v-model="dataUser.uname" type="text" class="form-control" placeholder="Username" />
              <label for="uname">Username</label>
            </div>
            <div class="form-floating mb-3">
              <input
                id="email"
                v-model="dataUser.email"
                type="email"
                class="form-control"
                placeholder="name@example.com"
              />
              <label for="email">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                id="password"
                v-model="dataUser.password"
                type="password"
                class="form-control"
                placeholder="Password"
              />
              <label for="password">Password</label>
            </div>
            <div class="form-floating mb-3">
              <input id="name" v-model="dataUser.name" type="text" class="form-control" placeholder="Fullname" />
              <label for="name">Fullname</label>
            </div>
            <button type="submit" class="btn btn-outline-primary" @click.prevent="simpan()">Simpan</button>
          </form>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { useRouter } from 'vue-router'

  // Set header CORS untuk setiap request axios
  // axios.interceptors.request.use(
  //     function(config) {
  //         config.headers['Access-Control-Allow-Origin'] = '*';
  //         config.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT, DELETE';
  //         config.headers['Access-Control-Allow-Headers'] = 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Authorization';
  //         config.headers['Access-Control-Allow-Credentials'] = true;
  //         config.headers['Access-Control-Max-Age'] = 86400;
  //         return config;
  //     },
  //     function(error) {
  //         return Promise.reject(error);
  //     }
  // );
  // const router = useRouter();
  export default {
    data() {
      return {
        dataUser: {
          uname: '',
          email: '',
          password: '',
          name: '',
        },
      }
    },
    methods: {
      simpan() {
        axios
          .post('https://api101.lapaksemarang.com/api/users', this.dataUser)
          .then((response) => {
            console.log(response.data)
            // router.push({ name: 'data-user' })
          })
          .catch((err) => {
            console.log(err.response.data)
          })
      },
    },
  }
</script>

<style></style>
