import { Extension, extensions, ExtensionContext, window } from 'vscode';
import * as path from 'path';

interface CortexDebug {
    registerSVDFile(expression: RegExp | string, path: string): void;
}

export function activate(context: ExtensionContext) {
        console.log('Congratulations, your extension "helloworld-sample" is now active!');

    const cortexDebug: Extension<CortexDebug> = <Extension<CortexDebug>>extensions.getExtension('marus25.cortex-debug');
    if (!cortexDebug) {
        window.showErrorMessage('Cortex-Debug Extension is not available for device support packages');
        return;
    }

    cortexDebug.activate().then((cdbg) => {
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)743.*/i, path.join(context.extensionPath, 'data', 'stm32h743.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)743v.*/i, path.join(context.extensionPath, 'data', 'stm32h743v.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)747(CM|cm)4.*/i, path.join(context.extensionPath, 'data', 'stm32h747cm4.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)747(CM|cm).*/i, path.join(context.extensionPath, 'data', 'stm32h747cm7.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)753.*/i, path.join(context.extensionPath, 'data', 'stm32h753.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)753(V|v).*/i, path.join(context.extensionPath, 'data', 'stm32h753v.svd'));
        cdbg.registerSVDFile(/^(STM|stm)32(h|H)7(B|b)3.*/i, path.join(context.extensionPath, 'data', 'stm32h7b3.svd'));
    }, (error) => {
        console.log('Unable to activate cortexDebug');
    });
}

export function deactivate() {}
