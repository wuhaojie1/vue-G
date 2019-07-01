<template>
    <section>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="d-block mb-2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="14.31" y1="8" x2="20.05" y2="17.94"></line>
                <line x1="9.69" y1="8" x2="21.17" y2="8"></line>
                <line x1="7.38" y1="12" x2="13.12" y2="2.06"></line>
                <line x1="9.69" y1="16" x2="3.95" y2="6.06"></line>
                <line x1="14.31" y1="16" x2="2.83" y2="16"></line>
                <line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>
            </svg>
            <a class="navbar-brand" href="/">SmartHome</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars01"
                    aria-controls="navbars01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbars01">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active li-a">
                        <a class="nav-link" href="/userinfo">User</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/login">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/Register">Register</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Blog</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-md-0 d-flex justify-content-center">
                    <input class="form-control" type="text" placeholder="Search">
                    <button class="btn btn-outline-light my-2 my-sm-0 search-btn" type="submit">Search</button>
                    <a class="nav-link" href="#">
                        <svg class="navbar-nav-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 499.36"
                             width="1.5rem" height="1.5rem"
                             focusable="false"><title>GitHub</title>
                            <path d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"
                                  fill="currentColor" fill-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a class="nav-link" href="/shoppingCart">
                        <svg class="cart-icon-3" version="1.1" width="1.5rem" height="1.5rem"
                             viewBox="0 0 90.156 89.89">
                            <path class="main-path-3" fill="none" stroke="#FFFFFF" stroke-width="3"
                                  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
          M14.973,26.021V15.296c0-1.109-0.865-2.292-1.922-2.628L1.49,8.99 M62.354,55.639c0,1.109-0.101,2.236-0.224,2.504
          c-0.123,0.268-1.684,0.487-2.793,0.487H17.989c-1.109,0-2.242-0.098-2.517-0.218c-0.275-0.12-0.5-1.664-0.5-2.773V23.273
          c0-1.109,0.101-2.236,0.224-2.504c0.123-0.268,1.684-0.487,2.793-0.487h41.348c1.109,0,2.242,0.098,2.517,0.218 c0.275,0.12,0.5,1.664,0.5,2.773V55.639z"></path>
                            <line class="center-line-3" fill="none" stroke="#FFFFFF" stroke-width="3"
                                  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="30.863"
                                  y1="20.74" x2="30.863" y2="58.63"></line>
                            <line class="center-line-3" fill="none" stroke="#FFFFFF" stroke-width="3"
                                  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="46.837"
                                  y1="20.74" x2="46.837" y2="58.63"></line>
                            <line class="center-line-3" fill="none" stroke="#FFFFFF" stroke-width="3"
                                  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="15.973"
                                  y1="33.308" x2="61.24" y2="33.308"></line>
                            <line class="center-line-3" fill="none" stroke="#FFFFFF" stroke-width="3"
                                  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="15.973"
                                  y1="46.285" x2="61.125" y2="46.285"></line>
                            <circle class="wheel-3" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-miterlimit="10" cx="23.442" cy="64.554"
                                    r="5.924"></circle>
                            <circle class="wheel-3" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"
                                    stroke-linejoin="round" stroke-miterlimit="10" cx="53.314" cy="64.554"
                                    r="5.924"></circle>
                            <path class="outer-plus-3" fill="none" stroke="#FFFFFF" stroke-width="3"
                                  stroke-linecap="round" stroke-miterlimit="10" d="M67.378,52.665
          c1.29-0.143,2.615-0.147,3.959,0.001c9.837,1.087,16.93,9.943,15.843,19.78s-9.943,16.93-19.78,15.843
          c-7.378-0.815-13.212-6.001-15.21-12.692"></path>
                            <path class="cart-plus-3" fill="none" stroke="#FFFFFF" stroke-width="3"
                                  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="
          M61.516,70.556h17.695 M70.364,61.708v17.695"></path>
                        </svg>
                    </a>
                </form>
            </div>
        </nav>
    </section>
</template>

<script>
    export default {
        name: "nav-bar-one"
    }
</script>

<style scoped>
    .mb-2 {
        color: coral;
        margin: 0.5rem;
    }

    .search-btn {
        margin-left: 0.5rem;
    }

    .li-a {
        margin: 0 0.5rem;
    }
</style>
