export default ({env }) => ({
  upload: {
    config: {
      provider: 'provider-upload-qiniu-cloud', // full package name is required
      providerOptions: {
        accessKey: env('QINIU_AK', ''),
        secretKey: env('QINIU_SK', ''),
        prefix: 'strapi',
        zone: env('QINIU_ZONE', ''),
        bucket: env('QINIU_BUCKET', ''),
        publicBucketDomain: env('QINIU_DOMAIN', ''),
        https: false, 
        cdn: false, 
      },
    },
  },
});
