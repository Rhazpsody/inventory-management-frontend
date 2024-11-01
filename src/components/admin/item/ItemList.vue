<template>
  <div class="item-list container py-4 bg-white rounded shadow-sm">
    <div class="header d-flex justify-content-between align-items-center mb-3">
      <h2>Daftar Barang</h2>
      <button class="btn btn-primary" @click="showAddForm">Tambah Item</button>
    </div>

    <div class="item-cards row">
      <ItemCard
        v-for="item in items"
        :key="item.kode"
        :item="item"
        @edit-item="editItem"
        @delete-item="deleteItem"
        class="col-md-6 mb-4"
      />
    </div>
    <Modal :visible="showForm" @close="cancelEditForm">
      <ItemForm
        :item="selectedItem"
        :isEdit="isEdit"
        @submit="handleSubmit"
        @cancel="cancelEditForm"
      />
    </Modal>
  </div>
</template>

<script>
import ItemCard from "./ItemCard.vue";
import ItemForm from "./ItemForm.vue";
import Modal from "@/components/Modal.vue";

export default {
  components: {
    ItemCard,
    ItemForm,
    Modal,
  },
  data() {
    return {
      items: [
        {
          kode: 101,
          nama: "Laptop",
          deskripsi: "Laptop dengan prosesor Intel i5 dan RAM 8GB",
          stok: 10,
        },
        {
          kode: 102,
          nama: "Mouse",
          deskripsi: "Mouse wireless dengan sensor optik",
          stok: 50,
        },
        {
          kode: 103,
          nama: "Keyboard",
          deskripsi: "Keyboard mekanik dengan lampu RGB",
          stok: 25,
        },
        {
          kode: 104,
          nama: "Monitor",
          deskripsi: "Monitor LED 24 inch Full HD",
          stok: 15,
        },
        {
          kode: 105,
          nama: "Printer",
          deskripsi: "Printer inkjet multifungsi",
          stok: 8,
        },
      ],
      showForm: false,
      selectedItem: null,
      isEdit: false,
    };
  },
  methods: {
    showAddForm() {
      this.selectedItem = {
        kode: "",
        nama: "",
        deskripsi: "",
        stok: 0,
      };
      this.isEdit = false;
      this.showForm = true;
    },
    editItem(item) {
      this.selectedItem = { ...item };
      this.isEdit = true;
      this.showForm = true;
    },
    handleSubmit(item) {
      if (this.isEdit) {
        const index = this.items.findIndex((i) => i.kode === item.kode);
        if (index !== -1) {
          this.items.splice(index, 1, item);
        }
      } else {
        item.kode = Date.now();
        this.items.push(item);
      }
      this.showForm = false;
      this.selectedItem = null;
      this.isEdit = false;
    },
    cancelEditForm() {
      this.showForm = false;
      this.isEdit = false;
      this.selectedItem = null;
    },
    deleteItem(kode) {
      this.items = this.items.filter((item) => item.kode !== kode);
    },
  },
};
</script>

<style scoped>
.item-list {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header h2 {
  color: #4b3f6b;
  font-size: 24px;
}

.header .btn-primary {
  background-color: #007bff;
  border-color: #007bff;
}

.header .btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}
</style>
