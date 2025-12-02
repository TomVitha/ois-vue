<script setup>

</script>

<template>
  <!-- WIP -->
  <!-- TODO: Create proper design (with proper code) -->
  <!-- TODO: Click to copy text buttons -->
  <!-- TODO: Breakdown for partially paid (like on payments page) -->
  <!-- * Povinné údaje: částka, variabilní symbol, číslo účtu  -->
  <!-- * Nepovinné/případné údaje: qr kód, podrobnější popis -->
  <div class="modal fade" id="temp-payment-modal">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-sm modal-fullscreen-sm-down">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Zaplatit platbu</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="space-y-4">
            <img src="/qr-temp.svg" alt="QR kód se nepodařilo načíst" width="200" class="d-block mx-auto" title="Zaplaťte načtením QR kódu ve své bankovní mobilní aplikaci" />
            <div class="space-y-2">
              <div class="d-flex justify-content-between">
                <span class="text-secondary">Číslo účtu</span>
                <span class="text-end">670100-1234567890 / 6210</span>
              </div>
              <div class="d-flex justify-content-between">
                <span class="text-secondary">Variabilní symbol</span>
                <span class="text-end">7464685</span>
              </div>
              <div class="d-flex justify-content-between">
                <span class="text-secondary">Částka</span>
                <span class="text-end">50 000 Kč</span>
              </div>
              <div class="d-flex justify-content-between">
                <span class="text-secondary">Zpráva pro příjemce</span>
                <span class="text-end">165-10-007 KD1</span>
              </div>
            </div>
            <div>oznámení že odeslané platby se na OIS propíší až po 3 dnech.</div>
            <!-- <div>Možná: <a href="#">Požádat o odklad platby</a> ?</div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>