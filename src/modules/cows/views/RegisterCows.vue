<template>
  <div class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Registro de vacas</div>
        <q-separator spaced />
      </q-card-section>

      <q-tabs v-model="tab" class="text-teal">
        <q-tab
          label="Listado de vacas"
          name="one"
          class="col-xs-3 col-sm-6 col-md-5 col-md-6"
        />
        <q-tab
          label="Agregar vaca"
          name="two"
          class="col-xs-3 col-sm-6 col-md-5 col-md-6"
        />
      </q-tabs>

      <q-separator />

      <q-btn
        v-model="tab"
        color="positive"
        label="Agregar vaca"
        class="q-ma-md"
        name="two"
      />
      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="one">
          <q-markup-table>
            <thead>
              <tr>
                <th class="text-left">Dessert (100g serving)</th>
                <th class="text-right">Calories</th>
                <th class="text-right">Fat (g)</th>
                <th class="text-right">Carbs (g)</th>
                <th class="text-right">Protein (g)</th>
                <th class="text-right">Sodium (mg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-left">Frozen Yogurt</td>
                <td class="text-right">159</td>
                <td class="text-right">6</td>
                <td class="text-right">24</td>
                <td class="text-right">4</td>
                <td class="text-right">87</td>
              </tr>
              <tr>
                <td class="text-left">Ice cream sandwich</td>
                <td class="text-right">237</td>
                <td class="text-right">9</td>
                <td class="text-right">37</td>
                <td class="text-right">4.3</td>
                <td class="text-right">129</td>
              </tr>
              <tr>
                <td class="text-left">Eclair</td>
                <td class="text-right">262</td>
                <td class="text-right">16</td>
                <td class="text-right">23</td>
                <td class="text-right">6</td>
                <td class="text-right">337</td>
              </tr>
              <tr>
                <td class="text-left">Cupcake</td>
                <td class="text-right">305</td>
                <td class="text-right">3.7</td>
                <td class="text-right">67</td>
                <td class="text-right">4.3</td>
                <td class="text-right">413</td>
              </tr>
              <tr>
                <td class="text-left">Gingerbread</td>
                <td class="text-right">356</td>
                <td class="text-right">16</td>
                <td class="text-right">49</td>
                <td class="text-right">3.9</td>
                <td class="text-right">327</td>
              </tr>
            </tbody>
          </q-markup-table>
        </q-tab-panel>

        <q-tab-panel name="two">
          With so much content to display at once, and often so little screen
          real-estate, Cards have fast become the design pattern of choice for
          many companies, including the likes of Google and Twitter.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    return {
      tab: ref("one"),
    };
  },
};
</script>

<style></style>
