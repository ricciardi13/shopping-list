function handleShoppingList() {
    $(".shopping-list").on("click", ".shopping-item-delete", function(event) {
        $(this).closest("li").remove();
    });

    $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
        const targetToggle = $(this).closest("li").find(".shopping-item");
        targetToggle.toggleClass("shopping-item__checked");
    })

    $("#js-shopping-list-form").on("submit", function(event) {
        event.preventDefault();
        const textInput = $("#shopping-list-entry").val();
        $("#shopping-list-entry").val("");
        console.log(textInput);
        $(".shopping-list").append(
            `<li>
            <span class="shopping-item">${textInput}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`
        );
    })
}

$(handleShoppingList);