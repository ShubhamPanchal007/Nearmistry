import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-4 bg-gray-100 text-gray-600 px-32 py-14 gap-y-10">
        <article className="space-y-4 test-xs test-gray-800">
          <h5 className="font-bold cursor-pointer"> ABOUT</h5>
          <p className="cursor-pointer">How it works</p>
          <p className="cursor-pointer">Why us.</p>
          <p className="cursor-pointer">How NearMistry got Started.</p>
          <p className="cursor-pointer">General queries</p>
          <p className="cursor-pointer">NearMistry Plus</p>
        </article>
        <article className="space-y-4 test-xs test-gray-800">
          <h5 className="font-bold cursor-pointer"> Community Work</h5>
          <p className="cursor-pointer">Chat with volunteers</p>
          <p className="cursor-pointer">How to make a change Happen</p>
          <p className="cursor-pointer">About volunteer</p>
          <p className="cursor-pointer">Volunteer Hotspot</p>
          <p className="cursor-pointer">A better self</p>
        </article>
        <article className="space-y-4 test-xs test-gray-800">
          <h5 className="font-bold cursor-pointer"> Follow us</h5>
          <p className="cursor-pointer">Instagram</p>
          <p className="cursor-pointer">facebook</p>
          <p className="cursor-pointer">Youtube</p>
          <p className="cursor-pointer">twitter</p>
          <p className="cursor-pointer">LinkedIn</p>
        </article>
        <article className="space-y-4 test-xs test-gray-800">
          <h5 className="font-bold cursor-pointer"> Support</h5>
          <p className="cursor-pointer">Follow us</p>
          <p className="cursor-pointer">Newsroom</p>
          <p className="cursor-pointer">Investors</p>
          <p className="cursor-pointer">Future Plans</p>
          <p className="cursor-pointer">Know more.</p>
        </article>
      </div>
    </section>
  );
}

export default Footer;
