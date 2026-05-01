ServerEvents.recipes(event => {
    event.remove({ id: /waterframes:.*/g });
})