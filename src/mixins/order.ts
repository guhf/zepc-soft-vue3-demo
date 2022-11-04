export default{
  data: function(){
    return{
      orderInfo: {
        orderCode: '121212',
        amount: 666
      }
    }
  },
  created(){
    console.log('执行混入生命周期');
    
  },
  methods:{
    getOrder(){
      console.log('查询订单........');
      
    }
  }
}