using ReactNative;
using ReactNative.Modules.Core;
using ReactNative.Shell;
using System.Collections.Generic;
using ReactNative.Modules.RNGoogleSignin;

namespace testlogin
{
    class MainReactNativeHost : ReactNativeHost
    {
        public override string MainComponentName => "testlogin";

#if !BUNDLE || DEBUG
        public override bool UseDeveloperSupport => true;
#else
        public override bool UseDeveloperSupport => false;
#endif

        protected override string JavaScriptMainModuleName => "index";

#if BUNDLE
        protected override string JavaScriptBundleFile => "ms-appx:///ReactAssets/index.windows.bundle";
#endif

        protected override List<IReactPackage> Packages => new List<IReactPackage>
        {
            new MainReactPackage(),
            new RNGoogleSigninPackage()
        };
    }
}
