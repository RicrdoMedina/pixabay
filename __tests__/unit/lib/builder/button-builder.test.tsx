import ButtonBuilder from '@/lib/builder/button-builder';
import MockButton from '../../__mocks__/MockButton';

describe('ButtonBuilder.ts', () => {
  let onClickMock: jest.Mock;

  beforeEach(() => {
    onClickMock = jest.fn()
  })

	test('should create a button with default properties', async () => {
    const builder = new ButtonBuilder(MockButton, "Default Button", "btn", "btn-active", "btn-inactive", onClickMock);

    const { component, props } = builder.setDefaultStyle().build();

		expect(component).toBe(MockButton);
		expect(props.label).toBe("Default Button");
		expect(props.className).toBe("btn");
  });

  test('should create a button with active properties', async () => {
    const builder = new ButtonBuilder(MockButton, "Active Button", "btn", "btn-active", "btn-inactive", onClickMock);

    const { component, props } = builder.setDefaultStyle().setActiveStyle().build();

		expect(component).toBe(MockButton);
		expect(props.label).toBe("Active Button");
		expect(props.className).toBe("btn btn-active");
  });

  test('should create a button with inactive properties', async () => {
    const builder = new ButtonBuilder(MockButton, "Inactive Button", "btn", "btn-active", "btn-inactive", onClickMock);

    const { component, props } = builder.setDefaultStyle().setInactiveStyle().build();

		expect(component).toBe(MockButton);
		expect(props.label).toBe("Inactive Button");
		expect(props.className).toBe("btn btn-inactive");
  });
});
