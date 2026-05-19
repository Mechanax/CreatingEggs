ServerEvents.recipes(event => {
  const recipes = [{
    output: Item.of('eccentrictome:tome', {
      "eccentrictome:tome_data": {
        books: {
          adorablehamsterpets: [{ components: { "patchouli:book": "adorablehamsterpets:hamster_tips_guide_book" }, count: 1, id: "adorablehamsterpets:hamster_guide_book" }],
          advancedperipherals: [{ components: { "patchouli:book": "advancedperipherals:manual" }, count: 1, id: "patchouli:guide_book" }],
          apotheosis: [{ components: { "patchouli:book": "apotheosis:apoth_chronicle" }, count: 1, id: "patchouli:guide_book" }],
          ars_nouveau: [{ count: 1, id: "ars_nouveau:worn_notebook" }],
          buildinggadgets2: [{ components: { "patchouli:book": "buildinggadgets2:buildinggadgets2book" }, count: 1, id: "patchouli:guide_book" }],
          dynamictrees: [{ components: { "patchouli:book": "dynamictrees:guide" }, count: 1, id: "patchouli:guide_book" }],
          nautec: [{ count: 1, id: "nautec:nautec_guide" }],
          simplyswords: [{ components: { "patchouli:book": "simplyswords:runic_grimoire" }, count: 1, id: "patchouli:guide_book" }],
          starcatcher: [{ count: 1, id: "starcatcher:starcatcher_guide" }]
        }, tome_id: "3d19099f-0448-4dc4-a966-0de999c595d5"
      }
    }), inputs: ['minecraft:book', '#c:bookshelves'] }];
    recipes.forEach((recipe) => {
        recipe.id
            ? event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
            : event.shapeless(recipe.output, recipe.inputs);
    });
});

