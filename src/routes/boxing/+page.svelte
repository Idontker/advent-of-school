<div class="container">
	<nav class="navbar">Navbar Content</nav>
	<div class="main-container">
		<div class="left-container">
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero asperiores quasi nihil
				provident magnam neque dolor sed iusto cupiditate, quae corrupti eius! Perspiciatis ipsum
				vitae rerum! Rerum corrupti dicta vitae. Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Libero asperiores quasi nihil provident magnam neque dolor sed iusto cupiditate, quae
				corrupti eius! Perspiciatis ipsum vitae rerum! Rerum corrupti dicta vitae. Lorem ipsum dolor
				sit amet consectetur adipisicing elit. Libero asperiores quasi nihil provident magnam neque
				dolor sed iusto cupiditate, quae corrupti eius! Perspiciatis ipsum vitae rerum! Rerum
				corrupti dicta vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
				asperiores quasi nihil provident magnam neque dolor sed iusto cupiditate, quae corrupti
				eius! Perspiciatis ipsum vitae rerum! Rerum corrupti dicta vitae. Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Libero asperiores quasi nihil provident magnam neque dolor sed
				iusto cupiditate, quae corrupti eius! Perspiciatis ipsum vitae rerum! Rerum corrupti dicta
				vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero asperiores quasi
				nihil provident magnam neque dolor sed iusto cupiditate, quae corrupti eius! Perspiciatis
				ipsum vitae rerum! Rerum corrupti dicta vitae. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Libero asperiores quasi nihil provident magnam neque dolor sed iusto
				cupiditate, quae corrupti eius! Perspiciatis ipsum vitae rerum! Rerum corrupti dicta vitae.
			</div>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero asperiores quasi nihil
				provident magnam neque dolor sed iusto cupiditate, quae corrupti eius! Perspiciatis ipsum
				vitae rerum! Rerum corrupti dicta vitae. Lorem ipsum dolor sit amet consectetur adipisicing
				elit. Libero asperiores quasi nihil provident magnam neque dolor sed iusto cupiditate, quae
				corrupti eius! Perspiciatis ipsum vitae rerum! Rerum corrupti dicta vitae. Lorem ipsum dolor
				sit amet consectetur adipisicing elit. Libero asperiores quasi nihil provident magnam neque
				dolor sed iusto cupiditate, quae corrupti eius! Perspiciatis ipsum vitae rerum! Rerum
				corrupti dicta vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
				asperiores quasi nihil provident magnam neque dolor sed iusto cupiditate, quae corrupti
				eius! Perspiciatis ipsum vitae rerum! Rerum corrupti dicta vitae. Lorem ipsum dolor sit amet
				consectetur adipisicing elit. Libero asperiores quasi nihil provident magnam neque dolor sed
				iusto cupiditate, quae corrupti eius! Perspiciatis ipsum vitae rerum! Rerum corrupti dicta
				vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero asperiores quasi
				nihil provident magnam neque dolor sed iusto cupiditate, quae corrupti eius! Perspiciatis
				ipsum vitae rerum! Rerum corrupti dicta vitae. Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Libero asperiores quasi nihil provident magnam neque dolor sed iusto
				cupiditate, quae corrupti eius! Perspiciatis ipsum vitae rerum! Rerum corrupti dicta vitae.
			</div>
		</div>
		<div class="right-container">Right Container Content</div>
	</div>
</div>

<style>
	/* Reset and body styling */
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	.container {
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.navbar {
		height: 60px; /* Set navbar height here */
		background-color: #333;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.main-container {
		flex: 1; /* Fills remaining space below navbar */
		display: flex;
		background-color: #f4f4f4;
		overflow: hidden; /* Prevents overflow from main container */
	}

	/* Two sub-containers filling half width and full height of main-container */
	.left-container,
	.right-container {
		width: 50%;
		height: 100%;
		overflow-y: auto; /* Allows internal scrolling if content is too long */
		padding: 20px;
	}

	/* Optional styling for visualization */
	.left-container {
		background-color: #8a3b3b;
	}

	.right-container {
		background-color: #447c7c;
	}

	.second-container {
		background-color: #ccc;
		padding: 20px;
	}
</style>
