module.exports = {
  name: 'booking-feature-passenger-info',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/booking/feature-passenger-info',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
