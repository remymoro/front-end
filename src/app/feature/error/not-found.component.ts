import { Component } from "@angular/core";






@Component({
    selector: 'app-not-found',
    standalone: true,
    template: `
    <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
        Oops! Page non trouvée.
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
        Il semble que vous ayez suivi un lien incorrect. Si vous pensez qu'il s'agit d'une erreur, veuillez contacter l'administrateur du site.
      </p>
    </div>
    <div>
      <a href="/" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Retourner à l'accueil
      </a>
    </div>
  </div>
</div>

    
    
    
    `,
})


export class NotFoundComponent {
    constructor() { }
}