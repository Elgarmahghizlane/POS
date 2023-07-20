<template>
  <b-row class="p-0 m-0 h-100">
    <b-col sm="6" md="7" lg="8" xl="9" class="m-0 pl-2 pt-2 pb-2 pr-0 h-100">
      <b-card
        bg-variant="dark"
        class="h-100"
        body-class="p-2 m-2 h-100"
      >
        <div class=" " style="display: block; width: 100%; overflow: hidden; overflow-y: auto;height: auto;">
          <Ticket v-for="ticket in tickets" :key="'ticket_' + ticket.id" :ticket="ticket" />
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
          <div class="px-3 py-3 ">
            <h2 class="font-20 text-center">
              26 Janv. 2022
            </h2>
            <h3 class="font-20 text-center">
              Liste des tickets du jours
            </h3>
          </div>
        </template>
         <template>
           <div class="py-2 mx-2">
             <h1 class="text-left  font-weight-bold font-20">
               Afficher par :
             </h1>
           <b-dropdown id="dropdown-left" text="Zone " class="mx-2 ">
             <b-dropdown-item href="#">Terasse A</b-dropdown-item>
             <b-dropdown-item href="#">Terasse B </b-dropdown-item>
             <b-dropdown-item href="#">Bar</b-dropdown-item>
           </b-dropdown>
           <b-dropdown id="dropdown-left" text="Serveur " class="mx-2 " >
             <b-dropdown-item href="#">Amine</b-dropdown-item>
             <b-dropdown-item href="#">Youssef </b-dropdown-item>
             <b-dropdown-item href="#">Tarik </b-dropdown-item>
           </b-dropdown>
           <b-button class="mx-2 text-black-50" style="background-color: silver">
             Shift
           </b-button>
          </div>
           <div class="py-2 mx-2">
           <h1 class="text-left font-weight-bold font-20 " >
             Filtrer par
           </h1>
           <b-form-radio-group
             class="font-15"
               id="radio-slots"
               :options="options"
             >
           </b-form-radio-group>
           </div>
             <h1 class="text-left font-weight-bold font-20 " >
               Chercher par
             </h1>
           <b-row class="m-0">
             <b-col cols="4" class="p-0 m-0">
               <b-input-group class="mx-1 w-100" >
                 <b-form-input placeholder="Date" class="p-0 "/>
                 <template #append>
                   <b-button class="bg-dark " >
                     <b-icon icon="search">
                     </b-icon>
                   </b-button>
                 </template>
               </b-input-group>
             </b-col>
             <b-col cols="4" class="p-0 m-0">
               <b-input-group class="mx-1 w-100" >
                 <b-form-input placeholder="Heure" auto-grow class="text-sm" />
                 <template #append>
                   <b-button class="bg-dark " >
                     <b-icon icon="search">
                     </b-icon>
                   </b-button>
                 </template>
               </b-input-group>
             </b-col>
             <b-col cols="4" class="p-0 m-0">
             <b-input-group class="mx-1" >
               <b-form-input placeholder="Client" class="p-0 "/>
                 <template #append>
                   <b-button class="bg-dark " >
                     <b-icon icon="search">
                     </b-icon>
                   </b-button>
                 </template>
             </b-input-group>
           </b-col>
           </b-row>
         </template>
        <template #footer>
          <b-row class="p-0 m-0 mt-2 mb-1">
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
  </b-row>
</template>

<script>
export default {
  name: 'TicketsPage',
  auth: false,
  data () {
    return {
      tickets: [
        { id: 1, table: '03', serveur: 'Amine', client: 'Karim', total: '110 MAD' },
        { id: 2, table: '04', serveur: 'Tarik', client: 'Maryem', total: '120 MAD' },
        { id: 3, table: '05', serveur: 'Amine', client: 'Achraf', total: '170 MAD' },
        { id: 4, table: '05', serveur: 'Amine', client: 'Israe', total: '170 MAD' },
        { id: 5, table: '05', serveur: 'Amine', client: 'Israe', total: '170 MAD' },
        { id: 6, table: '05', serveur: 'Amine', client: 'Israe', total: '170 MAD' },
        { id: 7, table: '05', serveur: 'Amine', client: 'Israe', total: '170 MAD' },
        { id: 8, table: '05', serveur: 'Amine', client: 'Israe', total: '170 MAD' },
        { id: 9, table: '05', serveur: 'Amine', client: 'Israe', total: '170 MAD' },
        { id: 10, table: '05', serveur: 'Amine', client: 'Israe', total: '170 MAD' },
        { id: 11, table: '05', serveur: 'Amine', client: 'Israe', total: '170 MAD' },
        { id: 12, table: '05', serveur: 'Amine', client: 'Israe', total: '170 MAD' }
      ],
      showSingleTicket: false,
      selectedTicket: null,
      selected: '',
      options: [
        { text: 'Payer', value: 'payer' },
        { text: 'Impayer', value: 'impayer' }
      ]
    }
  },
  methods: {
    handleOpenTicket (ticket) {
      this.selectedTicket = ticket
      this.showSingleTicket = true
    }
  }
}

</script>

<style scoped>

</style>
