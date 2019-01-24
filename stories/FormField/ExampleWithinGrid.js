/* eslint-disable */

<MessageBoxFunctionalLayout title="User Details" confirmText="Save" cancelText="Cancel">
  <Container fluid>
    <Row stretchViewsVertically>
      <Col span={3}>
        <FormField dataHook="storybook-formfield-grid" label="User" required />
      </Col>
      <Col span={9}>
        <Input />
      </Col>
    </Row>
    <Row stretchViewsVertically>
      <Col span={3}>
        <FormField label="Email" />
      </Col>
      <Col span={9}>
        <Input />
      </Col>
    </Row>
    <Row stretchViewsVertically>
      <Col span={3}>
        <FormField label="Address" infoContent="I help you to fill info" />
      </Col>
      <Col span={9}>
        <Input />
      </Col>
    </Row>
  </Container>
</MessageBoxFunctionalLayout>;
