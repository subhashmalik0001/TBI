export interface DockItem {
  name: string;
  src: string;
  isBin?: boolean;
}

export const dockItems: DockItem[] = [
  { name: "Finder", src: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Finder_Icon_macOS_Big_Sur.png" },
  { name: "Siri", src: "https://www.apple.com/v/siri/i/images/overview/routers_tile_1__gds6mleh3lea_large.png" },
  { name: "LaunchPad", src: "https://images.icon-icons.com/3053/PNG/512/whatsapp_macos_bigsur_icon_189555.png" },
  { name: "Contacts", src: "https://images.icon-icons.com/3053/PNG/512/apple_music_macos_bigsur_icon_190383.png" },
  { name: "Notes", src: "https://images.icon-icons.com/3053/PNG/512/notes_macos_bigsur_icon_189901.png" },
  { name: "Reminders", src: "https://cdn.iconscout.com/icon/free/png-256/free-apple-reminders-icon-download-in-svg-png-gif-file-formats--logo-apps-pack-user-interface-icons-493156.png" },
  { name: "Photos", src: "https://help.apple.com/assets/679ACA21EB15411D2F04AF52/679ACA228BFAEA9BFA09B3F3/en_US/b27be11281d58d9597fabdfcc67a3060.png" },
  { name: "Messages", src: "https://help.apple.com/assets/679AC43E7A8BD83AFF052A41/679AC43F157D85B16906C7D7/en_US/5c55a7fe0ab609058db1fc2bf1a365ee.png" },
  { name: "FaceTime", src: "https://help.apple.com/assets/6729353BC607F7FB540266C5/6729353EC607F7FB540266CB/en_GB/da344696d20a7c23624795e7c31e1053.png" },
  { name: "Music", src: "https://images.icon-icons.com/3053/PNG/512/apple_music_macos_bigsur_icon_190383.png" },
  { name: "Podcasts", src: "https://help.apple.com/assets/6716C2A03414F9E73601CB1B/6716C2A180C98F21860FC66E/en_GB/cd59b692b1d977af3e52e1cb77e5a446.png" },
  { name: "TV", src: "https://cdn.jim-nielsen.com/macos/512/tv-2019-09-25.png?rf=1024" },
  { name: "App Store", src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Mac_App_Store_logo.png" },
  { name: "Safari", src: "https://help.apple.com/assets/679ACA21EB15411D2F04AF52/679ACA228BFAEA9BFA09B3F3/en_US/b27be11281d58d9597fabdfcc67a3060.png" },
  {
    name: "Bin",
    src: "https://findicons.com/files/icons/569/longhorn_objects/128/trash.png",
    isBin: true,
  },
]; 