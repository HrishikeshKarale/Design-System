import Vue, { PluginFunction, VueConstructor } from 'vue';


interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const ComponentLibraryVue2: { install: InstallFunction };
export default ComponentLibraryVue2;

export const ComponentLibraryVue2Sample: VueConstructor<Vue>;
