const colors = [
    "white",
    "orange",
    "magenta",
    "light_blue",
    "yellow",
    "lime",
    "pink",
    "gray",
    "light_gray",
    "cyan",
    "purple",
    "blue",
    "brown",
    "green",
    "red",
    "black"
]

StartupEvents.registry('item', event => {
    colors.forEach(color => {
        event.create('loot_bag_' + color)
            .displayName('Loot Bag')
    })
    event.create('loot_bag_small').displayName('Loot Bag')
    event.create('loot_bag').displayName('Loot Bag')
})