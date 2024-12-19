import { extend } from 'flarum/common/extend';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import AdminNav from 'flarum/admin/components/AdminNav';


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
  extend(AdminNav.prototype, 'extensionItems', function (extensionItems) {
    // Example: Remove the "Settings" menu item
    console.log(extensionItems);
    let extensionsList = ['extension-flarum-approval',
      'extension-flarum-bbcode',
      'extension-flarum-emoji',
      'extension-flarum-flags',
      'extension-fof-pages',
      'extension-fof-upload',
      'extension-fof-user-directory',
      'extension-justoverclock-newsletter',
      'extension-afrux-forum-widgets-core',
      'extension-flarum-likes',
      'extension-flarum-lock',
      'extension-flarum-markdown',
      'extension-flarum-mentions',
      'extension-flarum-nicknames',
      'extension-flarum-pusher',
      'extension-flamarkt-signup-page',
      'extension-flarum-sticky',
      'extension-flarum-subscriptions',
      'extension-flarum-suspend',
      'extension-isaced-email-verification-switch',
      'extension-hospital-clinico-puq-user-views',
      'extension-clarkwinkelmann-who-read',
      'category-theme',
      'extension-blomstra-welcome-login',
      'category-language',
      'extension-flarum-lang-english',
      'extension-flarum-lang-spanish'];
    for (let extensionsListKey in extensionsList) {
      console.log(extensionsList[extensionsListKey]);
      extensionItems.remove(extensionsList[extensionsListKey]);
    }

    // You can similarly remove other items by their key names
    // For instance, to remove the "Extensions" item:
    // items.remove('extensions');

    // If you want to remove custom items added by other extensions:
    // items.remove('custom-item-key');
  });
});
