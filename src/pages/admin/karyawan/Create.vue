<template>
  <div class="row">
    <div class="flex xs12">
      <va-card>
        <va-card-content>
          <h1 class="mb-4">Tambah Data Karyawan</h1>
          <form>
            <div class="flex sm2">
              <va-input v-model="simple" label="NIP" />
            </div>
            <div class="flex sm6">
              <va-input v-model="simple" label="Nama Karyawan" />
            </div>
            <div class="flex sm6">
              <va-input v-model="simple" label="Fungsional" />
            </div>
            <div class="flex sm6">
              <va-input v-model="simple" label="Alamat" />
            </div>
            <div class="flex sm6">
              <va-input v-model="simple" label="Nama Karyawan" />
            </div>
          </form>
        </va-card-content>
      </va-card>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style></style>
