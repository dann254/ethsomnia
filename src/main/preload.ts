import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('dbAPI', {
  get(channel: string, name) {
    const validChannels = ['loadContent'];
    if (validChannels.includes(channel)) {
      return ipcRenderer.invoke(channel, name);
    }
    return null;
  },

  set(channel: string, data) {
    const validChannels = ['saveContent'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },

  delete(channel: string, name) {
    const validChannels = ['deleteContent'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, name);
    }
  },
});

contextBridge.exposeInMainWorld('darkMode', {
  toggle: () => ipcRenderer.invoke('dark-mode:toggle'),
  system: () => ipcRenderer.invoke('dark-mode:system'),
});
