import React from 'react';
import { userAddresses } from '../../components/data/data';
import { MapPin, Plus, Trash2, Edit2, CheckCircle } from 'lucide-react';

const UserAddresses = () => {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">My Addresses</h1>
                <button className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 font-medium">
                    <Plus className="w-4 h-4" />
                    Add New
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {userAddresses.map((addr) => (
                    <div
                        key={addr.id}
                        className={`p-6 rounded-2xl border transition-all ${addr.isDefault
                                ? 'bg-orange-50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-500/30'
                                : 'bg-white dark:bg-neutral-800 border-neutral-100 dark:border-neutral-700 hover:border-orange-200 dark:hover:border-neutral-600'
                            }`}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${addr.isDefault
                                        ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400'
                                        : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400'
                                    }`}>
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                                        {addr.type}
                                        {addr.isDefault && (
                                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400 font-bold uppercase tracking-wider">
                                                Default
                                            </span>
                                        )}
                                    </h3>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                                    <Edit2 className="w-4 h-4" />
                                </button>
                                <button className="p-2 text-neutral-400 hover:text-red-500 transition-colors">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4">
                            {addr.address}<br />
                            {addr.city} - {addr.pincode}
                        </p>

                        <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 bg-white/50 dark:bg-black/20 p-2 rounded-lg inline-block">
                            <span className="font-medium">Phone:</span> {addr.phone}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserAddresses;
