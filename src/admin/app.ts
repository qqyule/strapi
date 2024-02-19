export default {
  config: {
    locales: [
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      "zh-Hans",
      // 'zh',
    ],
    translations: {
      "zh-Hans": {
        "Auth.form.email.label": "qqyule@gmail.com",
        Users: "qqyule@gmail.com",
        City: "Chinese (Simplified) (zh-Hans)",
        // 这里是刚刚在设置中新建的国际化语言版本的ID
        Id: "2",
      },
    },
  },
  bootstrap(app) {
    console.log(app);
  },
};
