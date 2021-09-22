<template>
  <div>
    <p>value: {{ value.group }}</p>
    <form-create
      :rule="rule"
      v-model="fApi"
      :option="options"
      :value.sync="value"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      testV:0,
      fApi: {},
      value: {
        asd: "123123",
        test: [
          { field1: "111", field2: "2222" }
        ],
      },
      options: {
        onSubmit: (formData) => {
          alert(JSON.stringify(formData));
        },
      },
      rule: [
        { type: "input", field: "asd", title: "asd" },
        {
          type: "group",
          field: "test",
          title: "test",
          props: {
            max:5,
            min:3,
            rules: [
              { type: "input", field: "field1", title: "field1" }
            ],
          },
        },
      ],
    };
  },
  mounted(){
    const list=[]
    const init=async (v)=>{
      const result= await new Promise((resolve)=>{
          resolve(v)
          this.v=v
          console.log(`this.v`, this.v)
      })
      return result
    }
    for (let index = 0; index < 10; index++) {
      console.log(`1`, 1)
      list.push(init(index))
      console.log(`2`, 2)
    }
    Promise.all(list).then(res=>{
      console.log(`res`, res)
    })

  }
};
</script>
