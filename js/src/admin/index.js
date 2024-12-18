import { extend } from 'flarum/common/extend';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';

app.initializers.add('hospital-clinico-puq-customizations', () => {
  console.log("EXTENSION NAMEasd is working!");
  extend(ExtensionPage.prototype, 'oncreate', function () {
    const rootElement = this.element; // The root DOM element for this component
    try {
      // Navigate to the ExtensionInfo element using the path provided
      const extensionInfo = rootElement.children[0]
        .children[0]
        .childNodes[2]
        .children[1];

      if (extensionInfo && extensionInfo.classList.contains('ExtensionInfo')) {
        extensionInfo.remove(); // Remove the element directly from the DOM
        console.log('ExtensionInfo removed successfully!');
      }
    } catch (e) {
      console.error('Failed to remove ExtensionInfo:', e);
    }
  });
});
