<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="teal" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field id="email"
                                label="Email" 
                                name="email" 
                                prepend-icon="mdi-account"
                                type="text"></v-text-field>

                  <v-text-field
                    id="password"
                    label="Senha"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="teal" v-on:click="onBtnLoginClick()">Entrar</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
  },
  data: () => ({
  }),
  methods: {
    onBtnLoginClick: function () {
      this.axios.post('http://localhost:3000/login?email='+ document.getElementById('email').value +'&senha=' + document.getElementById('password').value)
      .then(function(res){
        sessionStorage.setItem('id', res.data[0].id);
        alert('Login realizado com sucesso!');
      });
    }    
  }
};
</script>