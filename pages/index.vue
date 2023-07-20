<template>
  <b-row class="p-0 m-0 h-100">
    <b-col sm="6" md="7" lg="8" xl="9" class="m-0 pl-2 pt-2 pb-2 pr-0 h-100">
      <b-card
        bg-variant="dark"
        text-variant="white"
        class="h-88-5"
        header-class="p-0 m-0 font-15"
        body-class="p-0 m-0 font-15 text-center h-100"
      >
        <b-input-group style="width: 98%; margin: 5px auto; border: 1px solid #FFF; border-radius: 5px;" class="sticky-top">
          <b-form-input readonly style="background-color: black; color: white; border: 0;" value="" placeholder="Rechercher dans les articles" />
          <template #append>
            <b-button variant="dark">
              <b-icon icon="keyboard" />
            </b-button>
            <b-button variant="dark">
              <b-icon icon="search" />
            </b-button>
          </template>
        </b-input-group>
        <div style="display: block; width: 100%; overflow: hidden; overflow-y: auto;height: auto;">
          <Product v-for="prod in prods" :key="'product_' + prod.id" :product="prod" />
        </div>
      </b-card>
      <b-card
        bg-variant="dark"
        text-variant="white"
        class="h-10-5 mt-2"
        header-class="p-0 m-0 font-15"
        body-class="p-0 m-0 font-15 text-center h-100"
      >
        <div style="display: block; height: 100%; overflow: hidden; overflow-x: auto;width: auto;white-space: nowrap;">
          <Category v-for="cat in cats" :key="'cat_' + cat.id" :cat="cat" />
        </div>
      </b-card>
    </b-col>
    <b-col sm="6" md="5" lg="4" xl="3" class="m-0 p-2 h-100">
      <b-card
        bg-variant="dark"
        text-variant="white"
        class="h-100"
        header-class="m-0 font-15 p-1 border-bottom"
        footer-class="m-0 font-15 p-1 border-top"
        body-class="p-0 m-0 font-15 text-center h-100 overflow-y"
        body-text-variant="white"
        header-bg-variant="dark"
        footer-bg-variant="dark"
      >
        <template #header>
          <b-row class="p-0 m-0">
            <b-col cols="8" class="p-0 m-0">
              <b-row class="p-0 m-0">
                <b-col cols="4" class="p-0 m-0 text-left">
                  Ticket N°
                </b-col>
                <b-col cols="1" class="p-0 m-0 text-center">
                  :
                </b-col>
                <b-col cols="7" class="p-0 m-0 font-weight-bolder">
                  TK123658
                </b-col>
              </b-row>
              <b-row class="p-0 m-0">
                <b-col cols="4" class="p-0 m-0 text-left">
                  Table N°
                </b-col>
                <b-col cols="1" class="p-0 m-0 text-center">
                  :
                </b-col>
                <b-col cols="7" class="p-0 m-0 font-weight-bolder">
                  107
                </b-col>
              </b-row>
              <b-row class="p-0 m-0">
                <b-col cols="4" class="p-0 m-0 text-left">
                  Client
                </b-col>
                <b-col cols="1" class="p-0 m-0 text-center">
                  :
                </b-col>
                <b-col cols="7" class="p-0 m-0 font-weight-bolder" style="white-space: nowrap;">
                  Ghizlane <br> EL GARMAH
                </b-col>
              </b-row>
            </b-col>
            <b-col cols="4" class="p-0 m-0">
              <b-button class="my-button p-0 m-0 bg-secondary w-95 text-light font-15 mb-1" @click="showModalTable">
                Table
              </b-button>
              <b-button class="my-button p-0 m-0 bg-secondary w-95 text-light font-15 mb-1" @click="showModalSeveur">
                Serveur
              </b-button>
              <b-button class="my-button p-0 m-0 bg-secondary w-95 text-light font-15" @click="showModalClient">
                Client
              </b-button>
            </b-col>
          </b-row>
        </template>
        <b-table
          class="m-0 p-0"
          hover
          small
          borderless
          table-variant="dark"
          :fields="ticket_table_fields"
          :items="ticket_table_items"
        >
          <template #cell(total)="row">
            <span>{{ parseFloat(row.value).toFixed(2) }}</span>
          </template>
          <template #cell(name)="row">
            <span class="d-block text-left">{{ row.value.length > 15 ? (row.value.substring(0, 12) + '...') : row.value }}</span>
            <span class="d-flex font-10 justify-content-start">
              <span v-for="option in row.item.options" :key="option">
                {{ option }},
              </span>
            </span>
          </template>
          <template #cell(actions)="row">
            <b-button variant="none" size="sm" @click="deleteTicketItem(row.item)">
              <b-icon icon="plus-circle-fill" rotate="45" variant="warning" />
            </b-button>
          </template>
        </b-table>
        <template #footer>
          <b-row class="p-0 m-0 text-center font-weight-bolder text-info">
            <b-col cols="6" class="p-0 m-0 d-flex justify-content-center align-items-center">
              Subtotal
            </b-col>
            <b-col cols="1" class="p-0 m-0 d-flex justify-content-center align-items-center">
              :
            </b-col>
            <b-col cols="5" class="p-0 m-0 font-25">
              1200.00
            </b-col>
          </b-row>
          <b-row class="p-0 m-0 text-center font-weight-bolder text-warning">
            <b-col cols="6" class="p-0 m-0 d-flex justify-content-center align-items-center">
              Remise (20%)
            </b-col>
            <b-col cols="1" class="p-0 m-0 d-flex justify-content-center align-items-center">
              :
            </b-col>
            <b-col cols="5" class="p-0 m-0 font-25">
              200.00
            </b-col>
          </b-row>
          <b-row class="p-0 m-0 text-center font-weight-bolder border-bottom text-success">
            <b-col cols="6" class="p-0 m-0 d-flex justify-content-center align-items-center">
              Total
            </b-col>
            <b-col cols="1" class="p-0 m-0 d-flex justify-content-center align-items-center">
              :
            </b-col>
            <b-col cols="5" class="p-0 m-0 font-25">
              1000.00
            </b-col>
          </b-row>
          <b-row class="p-0 m-0 mt-2 mb-1">
            <b-col cols="6" class="p-0 text-center mb-2">
              <b-button class="my-button bg-silver-50 font-20 w-95 p-3 text-success">
                Valider
              </b-button>
            </b-col>
            <b-col cols="6" class="p-0 text-center">
              <b-button class="my-button bg-silver-50 font-20 w-95 p-3 text-danger">
                Annuler
              </b-button>
            </b-col>
            <b-col cols="4" class="p-0 text-center">
              <b-button class="my-button bg-silver-50 font-20 w-95 p-3" style="white-space: nowrap;">
                Tiroir
              </b-button>
            </b-col>
            <b-col cols="4" class="p-0 text-center">
              <b-button class="my-button bg-silver-50 font-20 w-95 p-3">
                Caisse
              </b-button>
            </b-col>
            <b-col cols="4" class="p-0 text-center">
              <b-button v-b-toggle.sidebar-right class="my-button bg-silver-50 font-20 w-95 p-3">
                Menu
              </b-button>
            </b-col>
          </b-row>
        </template>
      </b-card>
    </b-col>
    <ChooseTableModal />
    <ChooseSeveurModal />
    <ChooseClientModal />
  </b-row>
</template>

<script>
export default {
  name: 'IndexPage',
  auth: false,
  data () {
    return {
      ticket_table_fields: [
        { label: 'Article', key: 'name' },
        { label: 'Qty', key: 'qty' },
        { label: 'Total', key: 'total' },
        { label: '', key: 'actions' }
      ],
      ticket_table_items: [],
      cats: [
        { id: 1, name: 'Entrée', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOrr2zpGG0TPvV6BmuE6g9SZAU88SR1uPlhUCxw9QCQGQOkx1niV06xfAwtC8-m_U3Dg&usqp=CAU' },
        { id: 2, name: 'Boisson', image: 'https://d2j6dbq0eux0bg.cloudfront.net/images/33167103/1588970838.jpg' },
        { id: 3, name: 'Pizzas', image: 'https://img.cuisineaz.com/660x660/2016/06/20/i83891-pizza-jambon-gruyere-et-olives.jpg' },
        { id: 5, name: 'Apperitif', image: 'https://img.cuisineaz.com/660x660/2016/06/20/i83891-pizza-jambon-gruyere-et-olives.jpg' },
        { id: 6, name: 'Softs', image: 'https://img.cuisineaz.com/660x660/2016/06/20/i83891-pizza-jambon-gruyere-et-olives.jpg' },
        { id: 7, name: 'Poulet', image: 'https://img.cuisineaz.com/660x660/2016/06/20/i83891-pizza-jambon-gruyere-et-olives.jpg' },
        { id: 8, name: 'Poissons', image: 'https://img.cuisineaz.com/660x660/2016/06/20/i83891-pizza-jambon-gruyere-et-olives.jpg' },
        { id: 9, name: 'Pates', image: null },
        { id: 10, name: 'Conso. Aprés 20H et 30MIN', image: 'https://img.cuisineaz.com/660x660/2016/06/20/i83891-pizza-jambon-gruyere-et-olives.jpg' }
      ],
      prods: [
        { id: 1, name: 'Salade italienne', price: 25.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Salade niçoise', price: 20.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza fruit de mers avec 2 boissons pour 4 personnes', price: 45.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza végitariane', price: 40.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza 4 saisons', price: 35.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        // { id: 1, name: 'Coca-cola 33cl', price: 15.00, is_addon: true, image: null },
        // { id: 1, name: 'Fanta 33cl', price: 15.00, is_addon: true, image: 'https://mercador.ma/wp-content/uploads/2021/10/FANTA-Orange-Canette-33cl.jpg' },
        { id: 1, name: 'Lasagne', price: 75.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Poulet routi', price: 80.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Emmincé de poulet', price: 125.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Salade italienne', price: 25.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Salade niçoise', price: 20.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza fruit de mers avec 2 boissons pour 4 personnes', price: 45.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza végitariane', price: 40.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza 4 saisons', price: 35.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        // { id: 1, name: 'Coca-cola 33cl', price: 15.00, is_addon: true, image: null },
        // { id: 1, name: 'Fanta 33cl', price: 15.00, is_addon: true, image: 'https://mercador.ma/wp-content/uploads/2021/10/FANTA-Orange-Canette-33cl.jpg' },
        { id: 1, name: 'Lasagne', price: 75.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Poulet routi', price: 80.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Emmincé de poulet', price: 125.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Salade italienne', price: 25.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Salade niçoise', price: 20.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza fruit de mers avec 2 boissons pour 4 personnes', price: 45.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza végitariane', price: 40.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza 4 saisons', price: 35.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Lasagne', price: 75.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Poulet routi', price: 80.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Emmincé de poulet', price: 125.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Salade italienne', price: 25.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Salade niçoise', price: 20.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza fruit de mers avec 2 boissons pour 4 personnes', price: 45.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza végitariane', price: 40.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza 4 saisons', price: 35.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        // { id: 1, name: 'Coca-cola 33cl', price: 15.00, is_addon: true, image: null },
        // { id: 1, name: 'Fanta 33cl', price: 15.00, is_addon: true, image: 'https://mercador.ma/wp-content/uploads/2021/10/FANTA-Orange-Canette-33cl.jpg' },
        { id: 1, name: 'Lasagne', price: 75.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Poulet routi', price: 80.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Emmincé de poulet', price: 125.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Salade italienne', price: 25.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Salade niçoise', price: 20.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza fruit de mers avec 2 boissons pour 4 personnes', price: 45.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza végitariane', price: 40.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza 4 saisons', price: 35.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        // { id: 1, name: 'Coca-cola 33cl', price: 15.00, is_addon: true, image: null },
        // { id: 1, name: 'Fanta 33cl', price: 15.00, is_addon: true, image: 'https://mercador.ma/wp-content/uploads/2021/10/FANTA-Orange-Canette-33cl.jpg' },
        { id: 1, name: 'Lasagne', price: 75.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Poulet routi', price: 80.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Emmincé de poulet', price: 125.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Salade italienne', price: 25.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Salade niçoise', price: 20.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza fruit de mers avec 2 boissons pour 4 personnes', price: 45.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza végitariane', price: 40.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza 4 saisons', price: 35.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        // { id: 1, name: 'Coca-cola 33cl', price: 15.00, is_addon: true, image: null },
        // { id: 1, name: 'Fanta 33cl', price: 15.00, is_addon: true, image: 'https://mercador.ma/wp-content/uploads/2021/10/FANTA-Orange-Canette-33cl.jpg' },
        { id: 1, name: 'Lasagne', price: 75.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Poulet routi', price: 80.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Emmincé de poulet', price: 125.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Salade italienne', price: 25.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Salade niçoise', price: 20.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza fruit de mers avec 2 boissons pour 4 personnes', price: 45.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza végitariane', price: 40.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza 4 saisons', price: 35.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        // { id: 1, name: 'Coca-cola 33cl', price: 15.00, is_addon: true, image: null },
        // { id: 1, name: 'Fanta 33cl', price: 15.00, is_addon: true, image: 'https://mercador.ma/wp-content/uploads/2021/10/FANTA-Orange-Canette-33cl.jpg' },
        { id: 1, name: 'Lasagne', price: 75.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Poulet routi', price: 80.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Emmincé de poulet', price: 125.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Salade italienne', price: 25.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Salade niçoise', price: 20.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza fruit de mers avec 2 boissons pour 4 personnes', price: 45.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza végitariane', price: 40.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        { id: 1, name: 'Pizza 4 saisons', price: 35.00, is_addon: false, image: 'https://www.regal.fr/sites/art-de-vivre/files/Import/R84-salade-italie_ss.jpg' },
        // { id: 1, name: 'Coca-cola 33cl', price: 15.00, is_addon: true, image: null },
        // { id: 1, name: 'Fanta 33cl', price: 15.00, is_addon: true, image: 'https://mercador.ma/wp-content/uploads/2021/10/FANTA-Orange-Canette-33cl.jpg' },
        { id: 1, name: 'Lasagne', price: 75.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Poulet routi', price: 80.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Emmincé de poulet', price: 125.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Lasagne', price: 75.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Poulet routi', price: 80.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' },
        { id: 1, name: 'Emmincé de poulet', price: 125.00, is_addon: false, image: 'https://assets.afcdn.com/recipe/20180119/76936_w1024h1024c1cx2680cy1786.jpg' }
      ]
    }
  },
  methods: {
    showModalTable () {
      this.$bvModal.show('ChooseTableModal')
    },
    showModalSeveur () {
      this.$bvModal.show('ChooseSeveurModal')
    },
    showModalClient () {
      this.$bvModal.show('ChooseClientModal')
    }
  },
  mounted () {
    const items = ['Café créme', 'Café noir', 'Pizza italienne avec fruit de mere', 'Pizza fruit de mere', 'Margaritta', 'Pain complet remplit', 'Pasticcio', 'Tacos XXL']
    const options = ['Sans fromage', 'Sans onion', 'sans tomate', 'mi-cui', 'sans souces', 'plus de fromage']
    for (let i = 1; i <= 100; i++) {
      const x = Math.floor(Math.random() * (items.length - 1))
      const y = Math.floor(Math.random() * (options.length - 1))
      this.ticket_table_items.push({
        id: i,
        name: items[x],
        options: [options[y]],
        price: x,
        qty: i,
        total: (x) * i
      })
    }
  }
}
</script>
