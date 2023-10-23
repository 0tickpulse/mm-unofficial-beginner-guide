---
sidebar_position: 2
---

# Background Information

## What is Mythic?

Mythic is a suite of plugins developed by MythicCraft, focused on providing an immersive RPG experience to your players. _However, you do not even need to have an RPG server to make huge use of it!_

### Is a plugin a mod?

If you have played Minecraft for a long time, you would know that there are things called mods which modify Minecraft's code. However, mods are different from plugins.

A plugin is _like_ a mod, but only for servers. They only modify the server's code. This means that only servers need plugins - clients can just log on without needing to use anything. However, since plugins cannot directly modify the client's code, they have to adhere to many restrictions that Mojang has set.

### Example Mythic code

Here is an example _mob_ made in Mythic (+Mobs):

```yaml
WanderingAdventurer:
  Type: ZOMBIE
  Health: 20
  Damage: 2
  Display: "Wandering Adventurer"
  Equipment:
    - IRON_SWORD HAND
  Skills:
    - heal{amount=5} @Self ~onTimer:200
```

This is a mob called the Wandering Adventurer. Its base mob is a Zombie, it holds an Iron Sword in its hand, and heals itself every 10 seconds.

### What does Mythic consist of?

Mythic consists of multiple plugins. The main one is named Mythic (+Mobs) or MythicMobs, as it comes with the core for Mythic, and a system to create mobs using the core system.

| Plugin | Description |
| :-- | :-- |
| Mythic (+Mobs) | The main Mythic plugin. The "Mythic" part of the plugin is the core of Mythic. It contains all the essential code that the other plugins rely on. The "Mobs" part of the plugin allows for complete control over mobs in your server. By combining these, you can make mage zombies that shoot fireballs, friendly skeletons, buffed endermen, custom drops, etc.
| ModelEngine | ModelEngine is a plugin that allows you to add custom models to mobs. Mobs with models look modded and can add a flair to your server.
| MythicCrucible | MythicCrucible is a plugin that expands on Mythic's items. It adds custom furniture, backpacks, custom blocks, and more!
| MythicEnchants | Add custom enchants to your server using the powerful Mythic Skill system.
| MythicDungeons | Create instanced dungeons in your server with mobs, bosses, custom loot, mechanics, and more!
| MythicScript (Upcoming as of 10 July 2023) | Use Mythic's skill system to its full potential and expand beyond just mobs and items. You can fundamentally change the way your server works by hooking into Bukkit events and using Mythic's skill system.
