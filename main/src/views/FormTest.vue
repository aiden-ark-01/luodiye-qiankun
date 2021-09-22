<template>
  <div>
    <form-create :rule="rule" v-model="fApi" :option="options" :value.sync="values" v-if="show" />
    {{ values.input1 }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      show:false,
      fApi: {},
      values: {
        input1: "123123",
        upload:'http://localhost:3031/public/images/1.png'
      },
      options: {
        onSubmit: (formData) => {
          alert(JSON.stringify(formData));
        },
        global: {
          "*": {
            col: {
              span: 12,
            },
          },
          upload: {
            props: {
              action: "/api/uploadImages",
              // maxLength: 1,
              limit: 1,
              multiple: true,
              type: "select",
              uploadType: "image",
              accept: "image/*",
              format: ["jpg", "jpeg", "png", "gif"],
              name: "pic",
              onSuccess: function (response, file, fileList) {
                console.log(
                  `----------------`,
                  "onSuccess",
                  "----------------"
                );
                console.log(`response`, response);
                console.log(`file`, file);
                console.log(`fileList`, fileList);
                file.url = "http://localhost:3031/public/images/1.png";
                return "http://localhost:3031/public/images/1.png";
              },
              onError: function (r) {
                console.log(`r`, r);
                alert("上传失败");
              },
            },
            validate: [
              {
                required: true,
              },
            ],
          },
        },
      },
      rule: [
        {
          type: "input",
          title: "input1",
          field: "input1",
        },
        {
          type: "input",
          field: "input2",
          title: "input2",
        },
        {
          type: "input",
          field: "input3",
          title: "input3",
          col: {
            span: 24,
          },
        },
        {
          type: "input",
          field: "input4",
          title: "input4",
          col: {
            span: 24,
          },
        },
        {
          type: "upload",
          field: "upload",
          title: "上传图片",
          value: "",
        },
      ],
    };
  },
  mounted(){
    setTimeout(() => {
      this.show=true
    }, 2000);
  }
};
</script>