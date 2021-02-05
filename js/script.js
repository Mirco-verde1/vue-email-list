new Vue({
  el: '#list-mail',

  data:{

    emailList:[]
  },

  mounted() {
    const self = this;

    for (var i = 1; i <= 10; i++) {

    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function(resp) {
        console.log('risposta vue', resp.data);
        self.emailList.push(resp.data.response)

      })
      }
        console.log(self.emailList);
  }




});
Vue.config.devtools = true;
