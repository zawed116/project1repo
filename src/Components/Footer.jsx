export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold">YourBrand</span>
              <p className="text-gray-400 mt-2">© 2023 All rights reserved</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-300">Terms</a>
              <a href="#" className="hover:text-blue-300">Privacy</a>
              <a href="#" className="hover:text-blue-300">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }